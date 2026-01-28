import {ExternalLink, Code2, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto mb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mohamed Sadqui
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl" style={{margin:"50px 0px"}}>
          Second-year Software Engineering student at McGill.<br/>
          Searching for internship opportunities.
        </p>
      </header>

      {/* Bento Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Large Feature: Wealth App */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 p-8 flex flex-col justify-between h-[400px]">
          <div>
            <div className="flex items-center gap-2 mb-4"><Globe size={24} /> <span className="font-mono">FULL-STACK</span></div>
            <h2 className="text-3xl font-bold">Software development</h2>
            <p className="mt-2 text-blue-100 max-w-sm">Worked through multiple projects in software development.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">React</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Node.js</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Java</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">C#</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">C</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Assembly</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Python</span>
          </div>
        </div>

        {/* Small Feature: Digital Art */}
        <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 flex flex-col justify-between border border-white/5 hover:border-purple-500/50 transition-all">
          <Palette className="text-purple-400" size={32} />
          <div>
            <h2 className="text-2xl font-bold">Game Development</h2>
            <p className="text-gray-400 mt-2 italic text-sm">Member of the McGill GameDev Club.</p>
          </div>
          <Link 
            to="/projects/personal" 
            className="flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors"
          >
            View Projects <ExternalLink size={14} />
          </Link>
        </div>

        {/* Medium Feature: Minecraft Modding */}
        <div className="rounded-3xl bg-zinc-900 p-8 border border-white/5 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
            <Code2 className="text-green-500" />
          </div>
          <h2 className="text-2xl font-bold">React Bits</h2>
          <p className="text-gray-400 text-sm">Website built with the help of React Bits templates.</p>
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[10px] uppercase font-bold text-gray-500">
            <span>CSS</span><span>TailWind</span>
          </div>
        </div>

        {/* Small Feature: Current Study */}
        <div className="md:col-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-mono uppercase">Currently Learning</h3>
            <p className="text-xl font-medium mt-1">Functional Systems & Computer Organization</p>
          </div>
          <div className="hidden md:block h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>

      </main>
    </div>
  );
};

export default Home;