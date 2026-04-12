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
    </div>
  );
};
