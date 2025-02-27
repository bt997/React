import { useState } from "react";
import Child from "./Child";
import "./parent.css";

export function Parent() {
    const [grid, setGrid] = useState([false, false, false, false]);

    // Function for onClick action
    function switchCellState(cellNum) {
        const newGrid = grid.slice();
        newGrid[cellNum] = !newGrid[cellNum];
        setGrid(newGrid);
    }

    // Count the number of cells 
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i]) counter++;
    }

    return (
        <div>
            <h2>Count: {counter}</h2>
            <div className="parentGrid">
                <Child isOn={grid[0]} state={() => switchCellState(0)} />
                <Child isOn={grid[1]} state={() => switchCellState(1)} />
                <Child isOn={grid[2]} state={() => switchCellState(2)} />
                <Child isOn={grid[3]} state={() => switchCellState(3)} />
            </div>
        </div>
    );
};

export default Parent;
