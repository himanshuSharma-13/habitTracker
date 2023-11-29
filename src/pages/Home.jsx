import React from "react";
import TodaysHabits from "../components/TodaysHabits";
import ActiveHabits from "../components/ActiveHabits";

function Home() {
  return (
    <>
      <h1 className="m-4 text-center text-3xl font-bold">My Habits | Curated Habits</h1>
      <div className="flex">
        <div className="flex-1 m-4">
          {/* <!-- Todays habits, Left container --> */}
          <TodaysHabits />
        </div>

        <div className="flex-1 m-4">
          {/* <!-- Active habits, Right container --> */}
          <ActiveHabits />
        </div>
      </div>
    </>
  );
}

export default Home;
