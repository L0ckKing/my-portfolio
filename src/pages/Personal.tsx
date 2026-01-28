import { ExternalLink, Sparkles, Smartphone, Pickaxe } from 'lucide-react';

const PersonalProjects = () => {
  const projects = [
    {
      title: "This  Website!",
      tags: ["React", "Github Pages"],
      desc: "I fully built this website using React JS and templates from React Bits for the most professional experience.",
      icon: <Smartphone className="text-blue-400" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "2025 UdeM GameJam",
      tags: ["C#", "Game Design", "unity"],
      desc: "In a team of 3, we created a complete game that tackled the themes of diversity and community in the span of 2 days.",
      icon: <Sparkles className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Passion Project",
      tags: ["C#", "Game Design", "unity"],
      desc: "I am currently developping a game in a team of 3, where we tackle every face of game development, from coding to art design.",
      icon: <Pickaxe className="text-green-400" />,
      color: "from-green-500/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-bold">Personal Projects</h1>
            <p className="text-gray-400 mt-2">Where code meets creativity.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className={`relative overflow-hidden bg-gradient-to-br ${proj.color} border border-white/10 p-1 rounded-[2.5rem] group`}>
              <div className="bg-[#0f0f0f] rounded-[2.3rem] p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5">
                    {proj.icon}
                  </div>
                  <div className="flex gap-2">
                    {/*<Github size={20} className="text-gray-500 hover:text-white cursor-pointer" />*/}
                    <ExternalLink size={20} className="text-gray-500 hover:text-white cursor-pointer" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{proj.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{proj.desc}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-gray-500">#{tag.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;