import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Monthly = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      캘린더
      <Calendar
        onChange={setValue}
        value={value}
        formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default Monthly;
