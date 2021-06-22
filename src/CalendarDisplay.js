import React, { useContext } from "react";
import DatePicker from "react-date-picker";
import newsUrlComponent from "./newsUrlComponent.js";

function CalendarDisplay() {
  const value = useContext(newsUrlComponent);
  var current = new Date();
  var latestdate = new Date();
  latestdate.setDate(latestdate.getDate() - 30);
  return (
    <div className="item calendar">
      <DatePicker
        minDate={latestdate}
        maxDate={current}
        onChange={(date) => {
          value.setDate(date);
        }}
        value={value.newsDate}
      />
    </div>
  );
}
export default CalendarDisplay;
