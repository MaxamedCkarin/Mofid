// Show Charts 
const xlabel = [];
const ylabel = [];
showChart();
async function showChart() {
  await getData()
  const ctx = document.getElementById('our-chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabel,
      datasets: [{
        label: 'Covid 19 data',
        data: ylabel,
        backgroundColor: 'rgba(99, 161, 255, 0.66)',
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Fetching data
getData()
async function getData(){
  const api = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
  const response = await fetch(api);
  const datas = await response.json();
  datas.forEach(data => {
    const {country, infected} = data
    xlabel.push(country);
    ylabel.push(infected);
  });
}