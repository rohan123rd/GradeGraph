const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Semester-1', 'Semester-2', 'Semester-3', 'Semester-4', 'Semester-5', 'Semester-6', 'Semester-7', 'Semester-8'],
    datasets: [{
      label: 'SGPA',
      data: [5.93, 6.98, 7.56, 7, 8.2, 7.6, 8.2, 9.1],
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