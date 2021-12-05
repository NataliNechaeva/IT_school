import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, BarElement,
  LinearScale, Tooltip, Legend, Title, } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale,
  LinearScale, Tooltip, Legend, BarElement, Title);

export const data = {
  labels: ['Health', 'Happiness', 'Journey', 'Baby', 'Love', 'Wedding'],
  datasets: [
    {
      label: '# of Votes',
      data: [64, 7, 8, 3, 2, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'The most desired gifts for New Year',
    },
  },
};


export function App() {
  return <Pie
   data={data}
  options={options}
  />;
}
