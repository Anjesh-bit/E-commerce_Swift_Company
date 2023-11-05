import connectionFailed from "../../assets/no-connection.png";
import "./NoData.css";
const NoData = ({ title }) => {
  return (
    <div className="app___no-data">
      <h1>{title}</h1>
      <div className="image-div">
        <img src={connectionFailed} alt="connection" />
      </div>
    </div>
  );
};

export default NoData;
