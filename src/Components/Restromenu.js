import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./Shimmercard";

const Restromenu = () => {
  const [RestroDetails, SetRestroDetails] = useState(null);

  useEffect(() => {
    GetIndividualRestroData();
  }, []);
  const { restroID,RestroName } = useParams();

  const GetIndividualRestroData = async () => {
    const resultobject = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9844618&lng=77.7064137&restaurantId=" +
        restroID +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    let jsonHoldRestro = await resultobject.json();
    SetRestroDetails(
      jsonHoldRestro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  if (RestroDetails === null) return <ShimmerCard />;

  const filterRecommendedList = RestroDetails.filter(
    (x) => x.card?.card?.title === "Recommended"
  );

  const FilterItemDetailsList = filterRecommendedList[0]?.card?.card?.itemCards;
  return (
    <div className="RestroMenuConatiner">
      <div className="RestroNameContainer">
        <h2>{RestroName}</h2>
      </div>
      <div className="MenuContainer">
        {FilterItemDetailsList?.map((x) => 
          <li>{x.card.info.name}</li>
        )}
      </div>
    </div>
  );
};

export default Restromenu;
