export const About = () => {
  return (
    <div className="flex justify-center items-center gap-60 w-screen h-screen">
      <img
        className="h-3/4"
        src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

      <div className="text-white flex flex-col justify-center">
        <h1 className="text-[17px] font-bold pb-1">About Us</h1>

        <h3 className="text-3xl uppercase font-bold pb-7">
          We Believe in <br />
          <span className="text-yellow-600">“People Power”.</span> <br />
          Yours and Ours.
        </h3>

        <p className="text-[19px] pb-15">
          If you are ready to transform your body, health,
          <br /> and athletic performance goals into a reality,
          <br /> join our awesome community of fitness fans,
          <br /> athletes and professional fitness coaches and <br />
          begin your journey to a more fit you, today.
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[17px]">A Customized Fitness Program</p>
          <p className="text-[17px]">Personal Training Anywhere</p>
          <p className="text-[17px]">Team Training Group Sessions</p>
        </div>
      </div>
    </div>
  );
};
