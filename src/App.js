import {  Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Anoungements from "./pages/Anoungements";
import Courses from "./pages/Courses";
import Notifications from "./pages/Notifications";
import Schedule from "./pages/Schedule";
import Material from "./pages/Material";
import Students from "./pages/Students";
import Rating from "./pages/Rating";
import Details from "./pages/Details";
import DetailsStudent from "./pages/DetailsStudent";
import Submitted from "./pages/Submitted";
import Waiting from "./pages/Waiting";
import Late from "./pages/Late";
const material = [
  {
    id: "1",
    name: "Material 1",
  },
  {
    id: "2",
    name: "Material 2",
  },
];

const STUDENTS = [
  {
    id: "1",
    title: "Student Name1",
  },
  {
    id: "2",
    title: "Student Name2",
  },
];

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/courses/" element={<Courses />}>
          <Route path="materials/" element={<Material material={material} />} />
          <Route
            path="materials/:id/details/"
            element={<Details MATERIAL={material} />}
          >
            <Route
              path="submitted"
              element={<Submitted />}
            />
            <Route
              path="waiting"
              element={<Waiting />}
            />
            <Route
              path="late"
              element={<Late />}
            />
          </Route>

          <Route path="students/" element={<Students Students={STUDENTS} />} />
          <Route
            path="students/:id/details"
            element={<DetailsStudent STUDENT={STUDENTS} />}
          />
          <Route path="rating" element={<Rating />} />
        </Route>
        <Route path="/anoungements" element={<Anoungements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;
