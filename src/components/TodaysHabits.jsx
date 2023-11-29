import React from 'react';
import { useHabit } from "../contexts/HabitContext";

function TodaysHabits() {
  const { habits } = useHabit();
  
  return (
    <div className="m-4">
      <h1>TodaysHabits</h1>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <input type="checkbox" name="" id="" />
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysHabits;
