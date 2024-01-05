import React from "react";
import { Route, Routes } from "react-router-dom";
import BirthdayReminder from "./birthdayReminder";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/birthday" element={<BirthdayReminder />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
