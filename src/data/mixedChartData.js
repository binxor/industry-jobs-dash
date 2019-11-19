const mixedChartData = { // Median hourly U.S. wages by job title, 2008 - 2018 - https://www.statista.com/statistics/199928/hourly-wages-of-the-largest-occupations-regarding-software-publishers-in-the-us/
  title: 'Salary Year Over Year',
  series:
    [ {
      name: 'Software Managers',
      type: 'line',
      data: [ 60.98, 63.08, 64.47, 65.74, 67.85, 70.49, 71.72, 72.55, 73.57 ]
    }, {
      name: 'Software developers, system software',
      type: 'column',
      data: [ 45, 46.08, 47.16, 47.96, 50.18, 49.76, 50.99, 50.02, 52.22 ]
    }, {
      name: 'Software developers, applications',
      type: 'column',
      data: [ 42.17, 44.9, 46.1, 46.6, 50.68, 51.63, 52.73, 53.48, 53.96 ]
    }, {
      name: 'Computer programmers',
      type: 'column',
      data: [ 39.32, 38.38, 38.61, 39.88, 46.38, 47.87, 48.17, 44.9, 46.81 ]
    }, {
      name: 'Computer systems analysts',
      type: 'column',
      data: [ 38.18, 38.1, 39.3, 40.34, 39.68, 40.14, 40.98, 42.3, 43.66 ]
    } ],
  categories: [ '2008', '2010', '2011', '2012', '2013', '2014', '2015', '2017', '2018' ]
}

export default mixedChartData