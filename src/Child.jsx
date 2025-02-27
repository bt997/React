import "./child.css";

export function Child({ isOn, state }) {

    let cellStatus = "cell";
  
    if (isOn) {
        cellStatus += " on";
    }
    
  return (
    <div className={cellStatus} onClick={state}>
    </div>
  );
};

export default Child;
