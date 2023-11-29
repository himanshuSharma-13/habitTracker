import React, { useState } from "react";
import { useHabit } from "../contexts/HabitContext";
import { SketchPicker } from "react-color";

function HabitForm() {


    const [habitName, setHabitName] = useState("");
    // const [addHabitMode, setAddHabitMode] = useState(false);
    const { addHabit } = useHabit();

    const [color, setColor] = useState("lightblue");
    const [hidden, setHidden] = useState(false);
    const pickerStyle = {
        default: {
            picker: {
                position: "absolute",
                bottom: "30px",
                left: "100px"
            }
        }
    };

    const add = (e) => {
        e.preventDefault()

        if (!habitName) return

        addHabit({ name: habitName, completed: false,cardColour: color})
        setHabitName("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
            />
            <div className="App" style={{ background: color }}>
                <div className="container">
                    {hidden && (
                        <SketchPicker
                            styles={pickerStyle}
                            color={color}
                            onChange={(updatedColor) => setColor(updatedColor.hex)}
                        />
                    )}

                    <button onClick={() => setHidden(!hidden)}>
                        {hidden ? "Color" : "Color"}
                    </button>
                </div>
            </div>
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default HabitForm;