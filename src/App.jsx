import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./frontend/Signup";
import Login from "./frontend/Login";
import UpdateLogin from "./frontend/UpdateLogin";
import PurchaseCourse from "./frontend/PurchaseCourse";
import ViewCourses from "./frontend/ViewCourses";
import CompleteCourse from "./frontend/CompleteCourse";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update-login" element={<UpdateLogin />} />
          <Route path="/purchase-course" element={<PurchaseCourse />} />
          <Route path="/view-courses" element={<ViewCourses />} />
          <Route path="/complete-course" element={<CompleteCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
