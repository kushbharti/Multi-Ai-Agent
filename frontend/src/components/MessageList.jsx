import { useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";

function MessageList() {
  const { selectedConversation } = useSelector((state) => state.conversation);

  const { messages } = useSelector((state) => state.message);

  const suggestions = [
    "Build Netflix clone",
    "Explain Redis",
    "Build Dashboard",
  ];

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {!selectedConversation || messages?.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[20px] font-semibold text-slate-200 tracking-tight">
              GroomAI
            </h1>

            <p className="text-[15px] font-semibold text-slate-400 tracking-tight">
              How can I help you?
            </p>

            <p className="text-[13px] text-slate-600 max-w-[260px] leading-relaxed">
              Ask me anything - code, ideas, experiments, or just a quick
              question.
            </p>
          </div>

          <div>
            {suggestions.map((item) => (
              <button
                key={item}
                className="text-[12px] text-slate-400 bg-white/4 border ml-3 border-white/7 px-3 py-1.5 rounded-lg hover:bg-white/8 hover:text-slate-200 transition-colors duration-150 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {messages.map((msg, i) => (
            <div key={msg._id || i}>
              <MessageBubble role={msg.role} content={msg.content} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MessageList;
