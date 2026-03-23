import React from 'react';
import { Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b-3 border-black bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">TIPZ</span>
          <span className="text-xl">💫</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/leaderboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Leaderboard
          </a>
          <a href="/dashboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Dashboard
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/akan_nigeria/stellar-tipz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-60 transition-opacity"
          >
            <Github size={20} />
          </a>
          {/* Wallet connect button will be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
