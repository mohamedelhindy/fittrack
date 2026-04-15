export const Header = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img
        className="h-full w-full object-cover"
        src="https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

      <nav className="absolute top-0 left-0 w-full pt-7">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-white font-bold text-3xl">Fit Track</h1>

          <div className="flex gap-8">
            <p className="text-white hover:text-gray-300">Sign Up</p>
            <p className="text-white hover:text-gray-300">Log In</p>
          </div>
        </div>
      </nav>

      {/* TODO: Add a call-to-action button as it moves to the workout plans */}
      <div className="absolute flex flex-col justify-center items-center gap-7 w-[50%]">
        <h2 className="text-white text-5xl">GET FIT, STRONG & HEALTHY</h2>

        <p className="text-white text-[21px] w-[70%] pl-7 pr-7">
          An exercise system that keeps you safe, makes things simple, and gives
          you support so you feel capable and confident.
        </p>

        <button className="text-white transition-all duration-300ms cursor-pointer border-2 border-white w-[200px] h-14 rounded-[7px] text-2xl">
          Let's Start
        </button>
      </div>
    </div>
  );
};
