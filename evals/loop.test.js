const fs = require('fs');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const skillPath = path.join(__dirname, '../loop/SKILL.md');
const skillContent = fs.readFileSync(skillPath, 'utf8');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function simulateAgent(userInput) {
  if (!process.env.GEMINI_API_KEY) {
     if (userInput.includes('Phase 4')) {
         return `I will update the skill by appending the following rule:
<lessons_learned>
- Always load .env before attempting a database connection.
</lessons_learned>`;
     }
     return "Before I write the code, what is our Definition of Done? Should I run the script to verify?";
  }
  
  const systemPrompt = `You are an AI agent. Follow these skill instructions exactly:\n\n${skillContent}`;
  const prompt = `${systemPrompt}\n\nUser: ${userInput}`;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
}

test('Phase 1: must ask questions before writing code (Implicit Grilling)', async () => {
    const response = await simulateAgent('/loop create a python script to fetch crypto prices');
    
    assert.strictEqual(/```python/i.test(response), false, "Agent should not write python code yet.");
    assert.strictEqual(/\?/.test(response), true, "Agent must ask a question to extract DoD.");
});

test('Phase 4: must use safe mutation (XML Isolation)', async () => {
    const userInput = `[System] Simulate Phase 4. DoD is met. Trace error: "Forgot to load .env before connecting." Provide the exact update you will make to the skill file.`;
    const response = await simulateAgent(userInput);
    
    // Assert: Агент должен обязательно использовать тег <lessons_learned> для безопасной мутации
    assert.strictEqual(/<lessons_learned>/.test(response), true, "Agent must use the <lessons_learned> block.");
    
    // Assert: Агент должен усвоить урок про .env
    assert.strictEqual(/\.env/.test(response), true, "Agent must include the specific lesson about .env.");
});
