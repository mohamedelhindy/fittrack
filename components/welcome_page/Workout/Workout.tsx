import { WorkoutContainer } from "./WorkoutContainer";

export const Workout = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-10">
      <WorkoutContainer
        imgSrc="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        split="Arnold Split"
        volume="High"
        days={6}
        description="The Arnold split, popularized by Arnold Schwarzenegger, is a high-volume routine that trains each muscle twice per week using a push/pull/legs-style setup. It’s great for building muscle and symmetry but requires good recovery and consistency.v"
      />

      <WorkoutContainer
        imgSrc="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        split="Arnold Split"
        volume="High"
        days={6}
        description="The Arnold split, popularized by Arnold Schwarzenegger, is a high-volume routine that trains each muscle twice per week using a push/pull/legs-style setup. It’s great for building muscle and symmetry but requires good recovery and consistency.v"
      />

      <WorkoutContainer
        imgSrc="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        split="Arnold Split"
        volume="High"
        days={6}
        description="The Arnold split, popularized by Arnold Schwarzenegger, is a high-volume routine that trains each muscle twice per week using a push/pull/legs-style setup. It’s great for building muscle and symmetry but requires good recovery and consistency.v"
      />
    </div>
  );
};
