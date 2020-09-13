import React, { useEffect, useState } from "react";
import Highcharts, { dateFormat } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "../style/stock.css"



const Stock = () => {

  const useEffectBlocker = ''
  const [state, setState] = useState({ data: "" });

  const jsonData: any = "Time Series (Daily)";
  const getDateArray = () => {
    if (state.data) {
      return Object.entries(state.data[jsonData]).map((date) =>
        date[0].replace(/-/gi, ".")
      ).reverse();
    }
    return ["Loading..."];
  };

  const getPriceArray = () => {
    if (state.data) {
      const jsonData: any = "Time Series (Daily)";

      const jsonStock: any = "4. close";
      // let jotain : number = (jsonStock as number)
      return Object.entries(state.data[jsonData]).map((date) =>
        parseFloat(date[1][jsonStock])
      ).reverse();
    }
    return [0];
  };
  const dateArray = getDateArray();
  const priceArray = getPriceArray();



  
  const options = {
    xAxis: {
      categories: dateArray,
      style: {
        color: '#efefef'
      }
    },
   
    title: {
      text: "AAPL Stock Price",
      style: {
        color: '#efefef'
      }
    },
    
    series:
    [{
      name: "AAPL",
      data: priceArray,
      color: 'tomato'
    }],
  };

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.json())
      .then((res) => setState({ data: res }))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
  }, [useEffectBlocker]);

  return (
    <div className="stock">
     <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
    </div>
  );
};

export default Stock;