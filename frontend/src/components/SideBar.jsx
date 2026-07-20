import { PanelLeftIcon, PenSquare } from "lucide-react";
import { useState } from "react";
function SideBar() {

    const [collapsed,setCollapsed] = useState(false)

  return (
    <div className="fixed lg:static inset-y-0 left-0 z-50 w-67.5 h-screen shrink-0 bg-[#0d0f14] border-r border-white/6">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/6 ">
          <div className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transistion-colors duration-150 bg-transparent border-none cursor-pointer" onClick={() => setCollapsed(true)}
          >
            <PanelLeftIcon />
          </div>
          <span className="text-[16px] font-semibold text-slate-100 tracking-tight flex-1">
            GroomAI
          </span>
          <span className="text-[10px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full tracking-wide">
            Free
          </span>
          <button className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors duration-150 bg-transparent border-none cursor-pointer">
            <PenSquare size={15} />
          </button>
        </div>

       
      </div>
    </div>
  );
}

export default SideBar;
