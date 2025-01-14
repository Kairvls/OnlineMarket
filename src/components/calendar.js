import React, { useState } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "5px",
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={() => alert(`You selected: ${i}`)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div>
      <h1>Calendar - {date.toDateString()}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", width: "300px" }}>
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
