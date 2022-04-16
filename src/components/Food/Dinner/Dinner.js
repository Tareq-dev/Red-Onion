import React, { useContext } from "react";
import { MyFoodContext } from "../../../App";
import Header from "../../Header/Header";
import NavPage from "../../Navbar/NavPage";
import DinnerItem from "./DinnerItem/DinnerItem";

const Dinner = () => {
  const [breakfast] = useContext(MyFoodContext);
  return (
    <div>
      <NavPage />
      <Header />
      <div className="grid">
        {breakfast.map((b) => (
          <DinnerItem b={b} key={b._id} />
        ))}
      </div>
    </div>
  );
};

export default Dinner;
