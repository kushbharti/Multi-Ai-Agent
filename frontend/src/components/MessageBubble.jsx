import Markdown from "react-markdown";

function MessageBubble({ role, content }) {
  const isUser = role === "user";
  console.log(`content=> ${content}`);
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[72%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed mb-3 ${
          isUser
            ? "bg-gradient-to-br from-indigo-500 to-violet-700 text-white rounded-tr-sm"
            : "bg-white/5 border border-white/6 text-slate-200 rounded-tl-sm"
        }`}
      >
        <Markdown>
          {typeof content === "string"
            ? content
            : (content?.response ?? JSON.stringify(content))}
        </Markdown>
      </div>
    </div>
  );
}

export default MessageBubble;
