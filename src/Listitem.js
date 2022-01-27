import React from "react";
import "./App.css";
export default function Listitem(props) {
  const items = props.items;
  const styled = {
    color: "red",
  };
  const listitem = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p className="itemtext" style={item.isCompleted ? styled : null}>
          {item.text}
        </p>
        <button className="Edit" onClick={() => props.UpdateState(item)}>
          EDIT
        </button>
        <button className="Delete" onClick={() => props.deleteItems(item.text)}>
          DELETE
        </button>
      </div>
    );
  });

  return <div>{listitem}</div>;
}
