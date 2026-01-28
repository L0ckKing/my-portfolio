import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Extra = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
            Let's Connect
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Currently seeking Summer 2026 internship opportunities.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <a 
            href="mailto:mo.sadqui@gmail.com" 
            className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 transition-all flex flex-col items-center text-center"
          >
            <div className="p-4 bg-blue-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-blue-400" size={28} />
            </div>
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Email</h2>
            <p className="text-lg font-medium">mo.sadqui@gmail.com</p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+15142499219" 
            className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/50 transition-all flex flex-col items-center text-center"
          >
            <div className="p-4 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-purple-400" size={28} />
            </div>
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Phone</h2>
            <p className="text-lg font-medium">+1 (514) 249-9219</p>
          </a>

        </div>

        {/* Social Links Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-zinc-900 border border-white/5 flex flex-wrap justify-center gap-8">
          <a href="https://www.linkedin.com/in/mohamed-sadqui/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} /> <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/L0ckKing" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Github size={20} /> <span className="text-sm font-medium">GitHub</span>
          </a>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={18} /> <span className="text-sm italic">Montreal, QC</span>
          </div>
        </div>

        {/* Closing Quote/Note */}
        <p className="text-center mt-5 text-gray-500 text-sm italic">
          "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity."
        </p>
        <p className="text-center mt-5 text-gray-500 text-sm">- John Romero</p>
      </div>
    </div>
  );
};

export default Extra;