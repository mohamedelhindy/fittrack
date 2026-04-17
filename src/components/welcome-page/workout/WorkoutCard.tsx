interface WorkoutProps {
  imgSrc: string;
  split: string;
  volume: string;
  days: number;
  description: string;
}

export const WorkoutCard = ({
  imgSrc,
  split,
  volume,
  days,
  description,
}: WorkoutProps) => {
  return (
    <div className="bg-black flex items-center justify-center p-10 bg-linear-to-r from-white via-white/80 to-white/60 bg-clip-text text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      <div className="relative w-89 h-135 rounded-3xl overflow-hidden group cursor-pointer">
        <img
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          src={imgSrc}
          alt=""
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 w-full p-5 text-white flex flex-col gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{split}</h1>
            <h2 className="text-gray-400 text-sm">Training Program</h2>

            <div className="flex gap-2 mt-2">
              <span className="border border-white/20 px-3 py-1 rounded-full text-xs">
                {volume}
              </span>
              <span className="border border-white/20 px-3 py-1 rounded-full text-xs">
                {days} Days
              </span>
            </div>

            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              {description}
            </p>
          </div>

          <button className="w-full bg-white text-black py-2 rounded-lg cursor-pointer font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
