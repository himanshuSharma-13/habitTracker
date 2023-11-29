import { createContext, useContext } from "react";

export const HabitContext = createContext({
  habits: [
    {
      id: 1,
      name: "Todo msg",
      firstDate: new Date(),
      lastDate: new Date(),
      streak: 0,
    },
  ],
  addHabit: (habit) => {},
  updateHabit: (id, habit) => {},
  deleteHabit: (id) => {},
});

export const useHabit = () => {  // if i call use habit then whole [context] array of object will be returned
  return useContext(HabitContext);
};

export const HabitProvider = HabitContext.Provider;
