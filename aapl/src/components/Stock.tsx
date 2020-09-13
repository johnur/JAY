import React, { useEffect, useState } from "react";
import Highcharts, { dateFormat } from "highcharts";
import HighchartsReact from "highcharts-react-official";


const Stock = () => {
  
  const useEffectBlocker = ''
  const [state, setState] = useState({ data: "" });
   
  const jsonData : any = "Time Series (Daily)";
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
      const jsonData : any = "Time Series (Daily)";

      const jsonStock : any = "4. close";
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
    chart: {
      type: "spline",
    },
    xAxis: {
      categories: dateArray,
    },
    title: {
      text: "Stock prices",
    },
    series:
      {
        text: "Close",
        data: priceArray,
      },
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
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Stock;