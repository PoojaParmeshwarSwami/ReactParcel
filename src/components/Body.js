import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import { useEffect, useState } from "react";
// import { useState } from "react";

const Body = () => {
  const [resList1, setresList1] = useState(resList);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");
    const json = await data.json();
    console.log(json);
    // setresList1(json.data.success.cards[1].gridWidget.gridElements.restaurants.info.name)
  // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
  
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            let filtered = resList.filter(
              (resto) => resto.info.rating.aggregate_rating > 2
            );
            setresList1(filtered)
          }}
        >
          Top rated RESTAURANT
        </button>
      </div>
      <div className="res-container">
        {resList1.map((res) => (
          <>
            <RestaurantCard key={res.info.resId} resData={res} />
          </>
        ))}
      </div>
    </div>
  );
};
export default Body;
