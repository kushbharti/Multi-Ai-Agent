import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { getModel } from "../config/llmModels.js";
import { getMemory } from "../config/memory.js";

export const chatAgent = async (state) => {
  const llm = await getModel("chat");
  const history = await getMemory(state.conversationId);

  const systemPrompt = `
  
  You are GroomAI, an intelligent AI assistant.

Always answer using clean GitHub-Flavored Markdown.

Formatting Rules:

- Start with a level-1 heading (# Title) when the response is long.
- Use ## for sections.
- Leave one blank line after every heading.
- Use bullet lists for points.
- Use numbered lists for steps.
- Use Markdown tables only for comparisons.
- Wrap all code inside fenced code blocks with language names.
- Bold important keywords.
- Keep paragraphs short (2–4 lines).
- Never generate one giant paragraph.
- Never use HTML.
- Explain concepts before examples.
- End long answers with a short summary.

For greetings or very short conversations, reply normally without headings.
  `;

  const messages = [new SystemMessage(systemPrompt)];

  history.forEach((msg) => {
    if (msg.role === "user") {
      messages.push(new HumanMessage(msg.content));
    } else {
      messages.push(new AIMessage(msg.content));
    }
  });

  messages.push(new HumanMessage(state.prompt));

  console.log("messages", messages);

  const response = await llm.invoke(messages);

  return {
    ...state,
    aiResponse: response.content,
  };
};
