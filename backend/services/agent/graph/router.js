import { getModel } from "../config/llmModels.js";

export const router = async (state) => {
  const llm = await getModel("router");
  const prompt = `You are an expert intent-classification router system. Your sole task is to analyze the user's query and route it to the exact, most appropriate specialized agent. 

<available_agents>
  <agent name="chat">
    <description>Default fallback. Use for general conversation, creative writing, explanations, learning, math, and historical knowledge. Use when no other specific agent applies.</description>
  </agent>
  <agent name="search">
    <description>Use when the query requires real-time data, current events, latest news, recent developments, or specific internet lookups that require up-to-date knowledge.</description>
  </agent>
  <agent name="coding">
    <description>Use for software development, writing code, debugging, project architecture, API design, and programming-related tasks.</description>
  </agent>
  <agent name="pdf">
    <description>Use ONLY when the user explicitly mentions generating, analyzing, summarizing, or extracting context from a PDF document.</description>
  </agent>
  <agent name="ppt">
    <description>Use ONLY when the user explicitly mentions generating, designing, or extracting context from a PowerPoint presentation (PPT, slides, slide deck).</description>
  </agent>
  <agent name="vision">
    <description>Use for requests to generate, create, draw, or analyze images and pictures.</description>
  </agent>
</available_agents>

<rules>
  1. You must analyze the User Query and choose exactly ONE agent from the available list.
  2. If a query overlaps (e.g., "write Python code to make a PDF"), prioritize the primary action (in this case, "coding").
  3. You must return ONLY the raw agent name in lowercase.
  4. DO NOT include any punctuation, quotes, spaces, preambles, or explanations. 
</rules>

<examples>
  User: "What is the capital of France?"
  chat

  User: "Who won the tennis match this morning?"
  search

  User: "Help me fix this React component."
  coding

  User: "Create a 5-slide presentation about AI."
  ppt

  User: "Summarize this 10-page document into a PDF."
  pdf

  User: "Generate a photorealistic image of a cat riding a skateboard."
  vision
</examples>

<user_query>
${state.prompt}
</user_query>
  `;
  const respopnse = await llm.invoke(prompt);
  console.log(`Response =>  ${respopnse}`);
  return {
    ...state,
    agent: respopnse.content.trim().toLowerCase(),
  };
};
