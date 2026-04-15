interface WorkoutProps {
  imgSrc: string;
  split: string;
  volume: string;
  days: number;
  description: string;
}

export const WorkoutContainer = ({
  imgSrc,
  split,
  volume,
  days,
  description,
}: WorkoutProps) => {
  return (
    <div className="min-h-fit bg-black flex items-center justify-center p-10">
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
        <img className="w-full h-90 object-cover" src={imgSrc} alt="" />

        <div className="p-5 text-white">
          <h1 className="text-2xl font-bold">{split}</h1>
          <h2 className="text-gray-400 text-sm">Training Program</h2>

          <div className="flex gap-2 mt-3">
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              {volume}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              {days} Days
            </span>
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm">
            {description}
          </p>

          <button className="mt-5 w-full bg-white cursor-pointer text-black py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
