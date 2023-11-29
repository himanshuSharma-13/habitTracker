import React from 'react';
import { useHabit } from "../contexts/HabitContext";

function TodaysHabits() {
  const { habits, updateHabit } = useHabit();

  const handleCheckboxChange = (habitId) => {
    const updatedHabits = [...habits];

    const updatedHabit = { ...updatedHabits.find(habit => habit.id === habitId) };

    const currentDate = new Date().toISOString().split('T')[0];

    if (updatedHabit.completedDates.has(currentDate)) {
      updatedHabit.completedDates.delete(currentDate);
    } else {
      updatedHabit.completedDates.add(currentDate);
    }

    // Update the habit in the context
    updateHabit(habitId, updatedHabit);
  };

  return (
    <div className="m-4">
      <h1>TodaysHabits</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <input
              type="checkbox"
              name={habit.name}
              id={habit.id}
              checked={habit.completedDates.has(new Date().toISOString().split('T')[0])}
              onChange={() => handleCheckboxChange(habit.id)}
            />
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysHabits;
