import { useState } from "react";
import { createContext } from "react";

const CoinContext = createContext({
  currentcoin: "BTC",
  changeCoin: (coin) => {},
});

const CoinContextProvider = (props) => {
  const [cointobechanged, SetCoin] = useState("BTC");
  const coinchanger = (coin) => SetCoin(coin);

  return (
    <CoinContext.Provider
      value={{
        currentcoin: cointobechanged,
        changeCoin: coinchanger,
      }}
    >
        {props.children}
    </CoinContext.Provider>
  );
};

export {CoinContextProvider,CoinContext};
