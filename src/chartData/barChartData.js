const barChartData = {
  title: 'Average Salary by Years\' Experience',
  series: [ {
    name: 'Avg. Salary',
    data: [ 68242, 87583, 108648, 130759, 148468 ]
  } ],
  categories: [
    '0 - 2',
    '2 - 4',
    '4 - 7',
    '7 - 10',
    '10+'
  ],
  sources: [
    { name: '2019 Salary.com', link: 'https://www.salary.com/research/salary/general/software-engineer-salary?view=detail' }
  ]
}

export default barChartData