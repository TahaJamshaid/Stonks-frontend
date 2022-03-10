import BTC from "../assets/BTC.png";
import "../styles/HomeBody.css";

const HomeBody = () => {
  const color = ["green", "yellow", "red"];
  return (
    <div className="homebody">
      <div className="uppersection">
        <div className="upper-left-section" style={{ width: "45%" }}>
          <div className="CoinHeading">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={BTC} alt="coin-icon" />
              <h1 className="CoinTitle">BitCoin(BTC)</h1>
            </div>
            <div className="CoinPrice">
              <h1>$ 39,456.00</h1>
            </div>
          </div>
          <div className="prediction-chart">
            <div className="week">
              <h1>Week Prediction</h1>
              <p>
                $ 40,250 <span className={color[0]}>(75%)</span>
              </p>
            </div>
            <div className="month">
              <h1>Month Prediction</h1>
              <p>
                $ 42,250 <span className={color[2]}>(25%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="upper-right-section" style={{ width: "45%" }}>
            <h1>Market Cap</h1>
            <p>$ 871,305,000</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;