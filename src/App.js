import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./components/Food/Breakfast/Breakfast";
import Dinner from "./components/Food/Dinner/Dinner";
import Lunch from "./components/Food/Lunch/Lunch";
import Main from "./components/Main/Main";

export const MyFoodContext = createContext();

function App() {
  const [breakfast, setBreakfast] = useState([]);

  return (
    <MyFoodContext.Provider value={[breakfast, setBreakfast]}>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </div>
    </MyFoodContext.Provider>
  );
}

export default App;
