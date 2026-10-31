const ctx2 = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Attendance',
      data: [82, 76, 83, 93, 65, 72, 90, 56, 0, 50, 76, 64],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(22, 138, 173, 0.2)',
        'rgba(181, 228, 140, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(22, 138, 173, 1)',
        'rgba(181, 228, 140, 1)'
      ],
      borderWidth: 1
    }]
  },

  options: {
    plugins: {
      legend: null
    }
  }
});