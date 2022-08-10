import React, { useState, useEffect } from "react";
import "./FeaturedStyles.scss";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState(null);

  const urlApi =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(urlApi)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum and Dogecoin</h2>
          <p>See all avaliable assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          <div className="top">
            {/* <img src={BTC} alt="" /> */}
            <img src={data[0].image} alt="" />
          </div>
          <div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>
          <span>
            <FaArrowUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
