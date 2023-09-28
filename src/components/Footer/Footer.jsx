import footerData from "../../data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app___footer-wrapper">
      <div className="footer-inner-wrapper">
        {footerData.map((data, index) => (
          <div className="footer-items" key={`index+${Math.random(index + 3)}`}>
            <h4>{data.header}</h4>
            {data.info}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
