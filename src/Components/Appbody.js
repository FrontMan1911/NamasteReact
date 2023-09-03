import Carditems from "./Carditems";
import cardList from "../utils/mockData";
import CARDLIST from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmercard";
import { Link } from "react-router-dom";

const Appbody = () => {
  const [listofcards, setlistofcards] = useState([]);
  const [SearchbarItem, SetSearchbarItem] = useState("");
  const [Filterlist, SetFilterList] = useState([]);

  useEffect(() => {
    getSwiggyData();
  }, []);

  var jsonobj;
  const getSwiggyData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    jsonobj = await result.json();
    setlistofcards(
      jsonobj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    SetFilterList(
      jsonobj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(jsonobj);
  console.log(Filterlist);
  return listofcards?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="appbodyname" id="appbodyId">
      <button
        className="filter_restrobtn"
        onClick={() => {
          const FilteredCARDLIST = listofcards.filter(
            (X) => X.info.avgRating >= 4
          );
          SetFilterList(FilteredCARDLIST);
        }}
      >
        Top rated restros
      </button>
      <button
        onClick={() => {
          SetFilterList(listofcards);
        }}
      >
        Reset
      </button>
      <div className="appsearchName" id="appSearchId">
        <input
          type="text"
          id="searchboxId"
          className="searchboxName"
          value={SearchbarItem}
          onChange={(x) => {
            SetSearchbarItem(x.target.value);
          }}
        />
        <button
          onClick={() => {
            debugger;
            const filterListobject = listofcards.filter((x) =>
              x.info.name
                .toLowerCase()
                .trim()
                .includes(SearchbarItem.toLowerCase().trim())
            );
            SetFilterList(filterListobject);
          }}
        >
          Find
        </button>
      </div>
      <div className="CardConatinerHold">
        {Filterlist?.map((x) => (
          <Link
            to={"/Restaurants/" + x.info.name + "/" + x.info.id}
            key={x.info.id}
          >
            <Carditems cardobj={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Appbody;
