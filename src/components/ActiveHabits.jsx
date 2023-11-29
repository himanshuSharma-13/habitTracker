import React from "react";
import { useHabit } from "../contexts/HabitContext";
import HabitForm from "../components/HabitForm";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

function ActiveHabits() {
  const { habits,deleteHabit } = useHabit();
  const arr = [true, false, true, 1, 1, 0, 1];
  const handleDelete = (habitId) => {
    deleteHabit(habitId);
  };
  // Calculate the percentage completion based on the 'arr'
  const percentage = Math.round((arr.filter((el) => el).length / arr.length) * 100);

  return (
    <div className="p-4">
      <h1 className="m-2">Active Habits</h1>
      {habits.map((habitItem, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4" style={{ background: `linear-gradient(to right, ${habitItem.cardColour} ${percentage}%, white ${percentage}%)` }}>
          <p style={{ display: "inline", marginRight: "110px" }}>{percentage}% </p>
          {arr.map((item, i) => (
            <span key={i} style={{ display: "inline", marginRight: "10px" }}>
              {item ? <FaCheck style={{ display: "inline" }} /> : <FaRegCircle style={{ display: "inline" }} />}
            </span>
          ))}
          <h5 className="m-2 text-2xl font-200 tracking-tight text-gray-900 dark:text-white">
            {habitItem.name}
          </h5>
          <button onClick={() => handleDelete(habitItem.id)}>
          <FcEmptyTrash />
          </button>
        </div>
      ))}
      <div>
        <HabitForm />
      </div>
    </div>
  );
}

export default ActiveHabits;
