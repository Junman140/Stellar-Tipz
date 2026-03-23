import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-3 border-black bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black">TIPZ</span>
            <span>💫</span>
            <span className="text-sm text-gray-600">Built on Stellar</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/akan_nigeria/stellar-tipz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://twitter.com/TipzApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Stellar Tipz. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
