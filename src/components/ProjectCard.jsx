import { Briefcase, Clock, Tag, Wrench } from 'lucide-react'

const typeStyles = {
  'Mini Project': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Project: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  Capstone: 'bg-accent-500/15 text-accent-300 border-accent-500/30',
}

export default function ProjectCard({ project }) {
  const typeClass = typeStyles[project.type] || 'bg-slate-700/40 text-slate-300 border-slate-600'

  return (
    <div className="card card-hover p-5 flex flex-col gap-3 animate-fade-in">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-white pr-2">{project.title}</h3>
        <span className={`badge border ${typeClass}`}>
          <Briefcase className="w-3 h-3 mr-1" />
          {project.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="badge bg-slate-800 text-slate-300 border border-slate-700">
          <Tag className="w-3 h-3 mr-1" />
          {project.domain}
        </span>
        <span className="badge bg-slate-800 text-slate-300 border border-slate-700">
          <Clock className="w-3 h-3 mr-1" />
          {project.duration}
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

      <div className="pt-2 border-t border-slate-800">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
          <Wrench className="w-3 h-3" />
          <span className="uppercase tracking-wide">Tools</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 text-xs bg-slate-800/80 text-slate-300 rounded border border-slate-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
