import React, { useState } from "react";
import "./birthdayReminder.scss";
import data from "./birthday-Reminder/data";
import List from "./birthday-Reminder/List";

function birthdayReminder() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </>
  );
}

export default birthdayReminder;
