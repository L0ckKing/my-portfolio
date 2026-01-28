import { Terminal, GraduationCap, MapPin, IdCardLanyard} from 'lucide-react';
import myAvatar from '../assets/minimal-style-landscape-design_1048-19243.avif';

export default function cv() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Fixed Identity (on Desktop) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit text-center lg:text-left">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900 rounded-2xl p-2 border border-white/10">
               {/* Replace with your actual image/avatar */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-zinc-800 rounded-xl overflow-hidden">
                <img 
                  src={myAvatar} 
                  alt="Mohamed" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight">Mohamed Sadqui</h1>
          <p className="mt-2 text-blue-400 font-mono flex items-center justify-center lg:justify-start gap-2 text-sm">
            <MapPin size={14} /> Based in Montreal, Canada
          </p>
        </aside>

        {/* Right Column: Scrollable Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Section: My Journey */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              My Journey <IdCardLanyard className="text-purple-500" size={24} />
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
                <h3 className="text-white font-bold mb-4 text-xl">The Engineer's Mind</h3>
                <p>
                  As a second-year Software Engineering student at McGill, my world revolves around building reliable systems. 
                  Whether it's diving into algorithms and data structures that compose all of our digital worlds or learning innovative
                  tools that allow for incredible creations, I enjoy the puzzle of software architecture.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
                <h3 className="text-white font-bold mb-4 text-xl">Computers as a Passion</h3>
                <p>
                  Beyond the learner, I am fascinated with what can be done through the computer. From games to art, 
                  I strive to use my knowledge to build projects that will hopefully have an impact in the world!
                </p>
              </div>
            </div>
          </section>

          {/* Section: Education & Tools */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
              <GraduationCap className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-white font-medium">McGill University</p>
              <p className="text-gray-500 text-sm italic">B.S. Software Engineering</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>• Model-Based Programming</li>
                <li>• Computer Architecture</li>
                <li>• Information Theory</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
              <Terminal className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Expo', 'OCaml', 'Java', 'C#', 'C++', 'C', 'Python', 'Assembly'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-gray-300 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section: What I'm Doing Now 
                    <section className="p-8 rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-yellow-500" /> What I'm doing now
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Finalizing a **Wealth Manager** dashboard using React & Expo.</li>
              <li>• Building a **NeoForge** mod to experiment with mob AI.</li>
              <li>• Preparing for **Summer 2026 internships** (Genetec, I'm looking at you!).</li>
            </ul>
          </section>*/}


        </div>
      </div>
    </div>

  )
}