'use client'; // This directive is used in Next.js to indicate a client component

import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const MyBarChart = () => {
  useEffect(() => {
    // Get the canvas element
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;

    // Check if the canvas element exists
    if (canvas) {
      // Get the canvas context
      const ctx = canvas.getContext('2d');

      // Check if the context exists
      if (ctx) {
        // Create the chart
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              data: [678, 823, 512, 645, 999, 754, 890, 610, 456, 999, 710, 800],
              backgroundColor: '#8576FF',
              borderColor: '#8576FF',
              borderWidth: 0,
            }]
          },
          options: {
            responsive: false, // Set to false to use the specified height and width
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 200, // Set the step size to 200
                },
              },
              
            },
            plugins: {
              legend: {
                display: false, // Hide the legend
              },
            },
          },
        });

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          myChart.destroy();
        };
      } else {
        console.error('Canvas context not found');
      }
    } else {
      console.error('Canvas element not found');
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className='border-[1px] small-screen-only rounded-md border-[#F2F2F7] md:h-[320px] p-[40px]'>
      <canvas id="myChart" width="474" height="240"></canvas>
    </div>
  );
};

export default MyBarChart;