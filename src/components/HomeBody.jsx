import BTC from "../assets/BTC.png";
import "../styles/HomeBody.css";
import Tweets from "./Tweets";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
// import { Meter } from "@adobe/react-spectrum";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const HomeBody = () => {
  const settings = {
    width: "90%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const themeForBar = {
    error: {
      symbol: "Sell",
      trailColor: "pink",
      color: "red",
    },
    default: {
      symbol: "Hold",
      trailColor: "lightblue",
      color: "blue",
    },
    active: {
      symbol: "76%",
      trailColor: "yellow",
      color: "orange",
    },
    success: {
      symbol: "Strongly Buy",
      trailColor: "lime",
      color: "green",
    },
  };

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
      <div className="Graph">
        {/* <h1>GRAPH</h1> */}
        <TradingViewWidget
          symbol="ADABUSD"
          theme={Themes.BRIGHT}
          locale="fr"
          autosize
        />
      </div>
      <div className="Twitter">
        <h1>What Twitter Says</h1>
        <div className="twitter-pane">
          <div className="tweets" style={{ padding: "0" }}>
            <div className="row">
              <div className="col">
                <Tweets />
              </div>
              <div className="col">
                <Tweets />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Tweets />
              </div>
              <div className="col">
                <Tweets />
              </div>
            </div>
          </div>
          <p className="readmore">Read More..</p>
        </div>
        {/* for polarity bar */}
        <div className="h-48 m-12 ">
          <p className="text-2xl m-4">Polarity</p>
          <div className="flex justify-center row">
            <Progress
              className="p-12"
              percent={76}
              theme={themeForBar}
              type="circle"
              width={100}
            />
            <Progress className="p-12" theme={themeForBar} percent={76} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
