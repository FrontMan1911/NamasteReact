import { FOODLOGO_URL, IMAGEBASEURL } from "../utils/constants";

const Carditems = (props) => {
  const { cardobj } = props;
  const {
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    id,
  } = cardobj.info;

  return (
    <div className="carditemsname">
      {
        <img
          src={IMAGEBASEURL + "/" + cloudinaryImageId}
          alt="Avatar"
          style={{ width: "100%", height: 250 }}
        />
      }
      <div className="ImageContainer">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{cuisines[0]}</p>
        <p>{areaName}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

export default Carditems;
