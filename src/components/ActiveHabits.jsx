import React from "react";
import { useHabit } from "../contexts/HabitContext";
import HabitForm from "../components/HabitForm";

function ActiveHabits() {
  const { habits } = useHabit();

  return (
    <div className="p-4">
      <h1 className="m-2">Active Habits</h1>
      {habits.map((habitItem, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {habitItem.name}
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Streak: {habitItem.streak}
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Success Rate: {habitItem.successRate}%
          </p>
        </div>
      ))}
      {/* Move the following part inside the main div */}
      <div>
        <HabitForm />
      </div>
    </div>
  );
}

export default ActiveHabits;
