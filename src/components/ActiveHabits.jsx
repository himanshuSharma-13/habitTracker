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

  // console.log(dateArray);


  const arr = [0, 0, 0, 1, 1, 1, 1];
  const handleDelete = (habitId) => {
    deleteHabit(habitId);
  };

  return (
    <div className="p-4">
      <h1 className="m-2">Active Habits</h1>
      {habits.map((habitItem, index) => {
        const daysDifference = Math.floor((currentDate - new Date(habitItem.startDate)) / (24 * 60 * 60 * 1000));
        const completedPercentage = daysDifference === 0 ? 0 : (habitItem.completedDates.size / daysDifference) * 100;

        return (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
            style={{ background: `linear-gradient(to right, ${habitItem.cardColour} ${completedPercentage}%, white ${completedPercentage}%)` }}
          >
            <p style={{ display: "inline", marginRight: "110px" }}>{completedPercentage.toFixed(2)}%</p>
            {habitItem.completedDates.has(currentDate.toISOString().split('T')[0]) ? (
              <FaCheck style={{ display: "inline", marginRight: "10px" }} />
            ) : (
              <FaRegCircle style={{ display: "inline", marginRight: "10px" }} />
            )}
            <div className="flex items-center">
              <h5 className="m-2 text-2xl font-200 tracking-tight text-gray-900 dark:text-white">
                {habitItem.name}
              </h5>
              <button onClick={() => deleteHabit(habitItem.id)}>
                <FcEmptyTrash />
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
