import GlassCard from "./GlassCard";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  reverse,
}) {
  return (
    <GlassCard className="group hover:bg-white/[0.04] transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[260px]">
        
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            reverse ? "order-2 md:order-1" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
        </div>

        {/* Content */}
        <div
          className={`p-7 md:p-8 flex flex-col justify-center ${
            reverse ? "order-1 md:order-2" : ""
          }`}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-[11px] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-400 max-w-lg mb-6">
            {description}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform duration-300">
              View Project
            </button>

            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}