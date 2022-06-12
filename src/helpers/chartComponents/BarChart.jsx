import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({
  CE_Data,
  PE_Data,
  strikePrice,
  ATM,
  title,
  height,
  width,
  condition,
}) => {
  return (
    <>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={
          condition
            ? [{ name: "", data: [CE_Data, PE_Data] }]
            : [
                { name: "CE_Data", data: CE_Data },
                { name: "PE_Data", data: PE_Data },
              ]
        }
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            background: "#000",
          },
          plotOptions: {
            bar: {
              distributed : condition ? true : false,
              columnWidth:  '80%',
              endingShape: 'rounded',
              dataLabels: {
                position: "top",
              },
            },
          },
          stroke: {
            show: true,
            // width: 10,
            colors: ['transparent']
          },
          colors: ["#d90429", "#8ac926"],
          tooltip: {
            followCursor: true,
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            tickAmount: condition ? 4 : 6,
            title: {
              text: title,
            },
          },
          xaxis: {
            tickAmount: condition ? 2 : 10,
            tickPlacement:"on",
            categories: condition ? ["CE_chg", "PE_chg"] : strikePrice,
            title: {
              text: condition ? "" : "Strike Price",
              style: {
                fontSize: 15,
              },
            },
          },

          legend: { show: condition ? false : true },
          title: {
            style: {
              fontSize: 30,
            },
          },
          grid: {
            borderColor: "#000",
          },
          annotations: {
            xaxis: [
              {
                x: 16650,
                borderColor: "#a2d2ff",
                label: {
                  style: {
                    color: "#000",
                  },
                  borderColor: "#00E396",
                  orientation: "horizontal",
                  text: `ATM Strike ${ATM}`,
                },
              },
            ],
          },
        }}
      ></Chart>
    </>
  );
};

export default BarChart;
