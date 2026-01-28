import { Book, Cpu, Binary, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Internship at SCCC",
      course: "ECSE 201",
      tech: "Web Development, React, Node JS, SQL",
      description: "Learned how to apply my academic learning into concrete projects that implement important DevSecOps notions.",
      icon: <Cpu className="text-green-400" />
    },
    {
      title: "Model-Based Programming",
      course: "ECSE 223",
      tech: "Statecharts, Java, Umple",
      description: "Designed and implemented a complex system using model-driven development. Focused on state machine logic and automated code generation.",
      icon: <Layers className="text-blue-400" />
    },
    {
      title: "Programming Languages and Paradigms",
      course: "COMP 302",
      tech: "OCaml",
      description: "Explored recursion, pattern matching, and type systems to build a logic-based data processor.",
      icon: <Binary className="text-purple-400" />
    },
    {
      title: "Design Principles and Methods",
      course: "ECSE 211",
      tech: "Raspberry Pi, Python",
      description: "Studied the process of project development of extended duration and in teams of 7.",
      icon: <Cpu className="text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Academic Portfolio</h1>
        <p className="text-gray-400 mb-12 italic">Engineering coursework at McGill University</p>
        
        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div key={i} className="group bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-800/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">{proj.course}</span>
                    <h2 className="text-2xl font-bold mt-1">{proj.title}</h2>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed">{proj.description}</p>
              <div className="mt-6 flex gap-2">
                {proj.tech.split(', ').map(t => (
                  <span key={t} className="text-[10px] font-bold bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-white/10 uppercase italic">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;