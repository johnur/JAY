// import React, { Component } from "react";
// import { render } from "react-dom";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { data: "" };
//     if (this.state.data) {
//       this.dateArray = Object.entries(
//         this.state.data["Time Series (Daily)"]
//       ).map((date) => date[0].replace(/-/gi, "."));

//       this.priceArray = Object.entries(
//         this.state.data["Time Series (Daily)"]
//       ).map((date) => parseFloat(date[1]["4. close"]));
//       console.log(priceArray);
//       // .map((date) => date['4. close']);

//       const options = {
//         chart: {
//           type: "spline",
//         },
//         xAxis: {
//           categories: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//         },
//         title: {
//           text: "My chart",
//         },
//         series: [
//           {
//             data: [1, 2, 1, 4, 3, 6],
//           },
//         ],
//       };
//     }
//   }

//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res["Time Series (Daily)"]);
//         this.setState({ data: res });
//       })
//       .catch((err) => err);
//   }

//   componentDidMount() {
//     this.callAPI();
//   }
//   render() {
//     return (
//       <div className="App">
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={() => {
//             if (options) return options;
//           }}
//         />

//         {/* <p className="App-intro">{this.state.apiResponse}</p> */}
//       </div>
//     );
//   }
// }

// export default App;
