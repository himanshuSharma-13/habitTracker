import React from "react";
import { useHabit } from "../contexts/HabitContext";
import HabitForm from "../components/HabitForm";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

function ActiveHabits() {
  const { habits, deleteHabit } = useHabit();

  const currentDate = new Date();
  const numberOfDays = 7; // You can adjust the number of days as needed

  const dateArray = Array.from({ length: numberOfDays }, (_, index) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - index);
    return newDate.toISOString().split('T')[0];
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Active Habits</h1>
      {habits.map((habitItem, index) => {
        const completedPercentage = (habitItem.completedDates.size / numberOfDays) * 100;

        return (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
            style={{ background: `linear-gradient(to right, ${habitItem.cardColour} ${completedPercentage}%, white ${completedPercentage}%)` }}
          >
            <p className="inline mr-20">{completedPercentage.toFixed(2)}%</p>
            {dateArray.map((item, i) => (
              <span key={i} className="inline mr-3">
                {habitItem.completedDates.has(item) ? (
                  <FaCheck className="inline" />
                ) : (
                  <FaRegCircle className="inline" />
                )}
              </span>
            ))}
            <div className="flex items-center">
              <h5 className="m-2 w-4/5 text-2xl font-200 tracking-tight text-gray-900 dark:text-white">
                {habitItem.name}
              </h5>
              <button onClick={() => deleteHabit(habitItem.id)}>
                <FcEmptyTrash className="text-xl"/>
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <HabitForm />
      </div>
    </div>
  );
}

export default ActiveHabits;
