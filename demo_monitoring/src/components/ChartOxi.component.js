import React, { Component } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', 
    },
    title: {
      display: true,
      text: 'oxi (%)',
    },
  },
  legend: {
    display: true,
    position: "center",
    align: "center",
    fontFamily: "Allianz-Neo",
    textDirection: 'ltr',
      labels: {
        usePointStyle: true,
        fontColor: "#006192",
      }
  }
};

const plugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 200).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "Oxi%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]


export const data = {
  datasets: [
    {
      label: '',
      data: [95, 5],
      backgroundColor: [
        '#B8F1B0',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        '#B8F1B0',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default class ChartOxi extends Component {
  render() {
    const mystyle = {
      width: "50%",
      height: "50",
      color: "white",
      fontFamily: "Arial"
    };
    return (
      <center>
      <div style={mystyle} >
      <Doughnut  data={data} options={options}  plugins={plugins}  />
      </div>
      </center>
    )
  }
}
