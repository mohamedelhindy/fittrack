export const Hero = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center overflow-hidden">
      <img
        className="h-full w-full object-cover absolute inset-0"
        src="https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

      <div className="absolute flex flex-col justify-center items-center gap-7 w-[50%] z-10">
        {/* TODO: Add a call-to-action button as it moves to the workout plans */}
        <h2 className="text-white text-5xl">GET FIT, STRONG & HEALTHY</h2>

        <p className="text-white text-[21px] w-[70%] pl-7 pr-7">
          An exercise system that keeps you safe, makes things simple, and gives
          you support so you feel capable and confident.
        </p>

        <button className="text-white transition-all duration-300ms cursor-pointer border-2 border-white w-50 h-14 rounded-[7px] text-2xl">
          Let's Start
        </button>
      </div>
    </div>
  );
};
