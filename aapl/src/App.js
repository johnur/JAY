import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./App.css";

const App = () => {
  const useEffectBlocker = ''
  const [state, setState] = useState({ data: "" });

  const getDateArray = () => {
    if (state.data) {
      return Object.entries(state.data["Time Series (Daily)"]).map((date) =>
        date[0].replace(/-/gi, ".")
      ).reverse();
    }
    return ["Loading..."];
  };

  const getPriceArray = () => {
    if (state.data) {
      return Object.entries(state.data["Time Series (Daily)"]).map((date) =>
        parseFloat(date[1]["4. close"])
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
    series: [
      {
        data: priceArray,
      },
    ],
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

export default App;
