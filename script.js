const dataInput = document.getElementById('dataInput');
const chartTypeSelect = document.getElementById('chartType');
const ctx = document.getElementById('myChart').getContext('2d');

let chart = null; // Store the chart object

function updateChart() {
  // Clear any existing chart
  if (chart) {
    chart.destroy();
  }

  const dataString = dataInput.value;
  const chartType = chartTypeSelect.value;

  const data = dataString.split(',').map(Number);

  // Chart configuration based on the selected type
  const chartConfig = {
    type: chartType,
    data: {
      labels: Array.from({ length: data.length }, (_, i) => i + 1), // Labels for data points
      datasets: [{
        label: 'My Data',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }]
    },
    options: {
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
      scales: {
        yAxes:  [{ 
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  };

  // Create a new chart instance
  chart = new Chart(ctx, chartConfig);
}
// Update the chart on data input change or chart type selection
dataInput.addEventListener('change', updateChart);
chartTypeSelect.addEventListener('change', updateChart);

// Call updateChart to create the initial chart (empty)
updateChart();