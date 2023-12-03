import React from 'react';
import { useHabit } from "../contexts/HabitContext";

function TodaysHabits() {
  const { habits, updateHabit } = useHabit();

  const handleCheckboxChange = (habitId) => {
    const updatedHabits = [...habits];

    const updatedHabit = { ...updatedHabits.find(habit => habit.id === habitId) };

    const currentDate = new Date().toISOString().split('T')[0];

    if (Array.from(updatedHabit.completedDates).includes(currentDate)) {
      updatedHabit.completedDates.delete(currentDate);
    } else {
      updatedHabit.completedDates.add(currentDate);
    }

    // Update the habit in the context
    updateHabit(habitId, updatedHabit);
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl font-semibold mb-4">Today's Habits</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={habit.name}
              id={habit.id}
              checked={Array.from(habit.completedDates).includes(new Date().toISOString().split('T')[0])}
              onChange={() => handleCheckboxChange(habit.id)}
              className="mr-2"
            />
            <span className={Array.from(habit.completedDates).includes(new Date().toISOString().split('T')[0]) ? 'line-through text-gray-500' : 'text-black'}>
              {habit.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysHabits;
