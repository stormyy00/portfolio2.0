import React from "react";

const Header = ({
  title,
  toolbar,
}: {
  title: string;
  toolbar?: React.ReactNode;
}) => {
  if (toolbar) {
    return (
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/10 backdrop-blur-sm border-t border-cyan-500/20">
        <div className="flex items-center justify-between h-full px-8">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <span className="text-cyan-400 font-mono text-sm">
              jonathan@portfolio:~/{title}
            </span>
            {toolbar}
          </div>
          {/* <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-xs">Ready</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    <div className="absolute top-0 left-0 right-0 h-12 bg-white/10 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-cyan-400 font-mono text-sm">
            jonathan@portfolio:~/{title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 font-mono text-xs">Ready</span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
