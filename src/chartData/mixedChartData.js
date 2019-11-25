const mixedChartData = { // Median hourly U.S. wages by job title, 2008 - 2018 - https://www.statista.com/statistics/199928/hourly-wages-of-the-largest-occupations-regarding-software-publishers-in-the-us/
  title: 'Local Vs. National Salary for Software Engineers',
  series:
    [ {
      name: 'National (2018)',
      type: 'area',
      data: [ 61660, 79340, 103620, 130460, 161290 ]
    },{
      name: 'Vancouver, WA (2018)',
      type: 'bar',
      data: [ 65750, 84000, 105220, 127870, 152730 ]
    } ],
  categories: [ '10th', '25th', '50th (Avg)', '75th', '90th' ],
  sources: [
    { name: '2019 Bureau of Labor Statistics', link: 'https://www.bls.gov/oes/current/oes151132.htm#nat' },
    { name: '2018 Bureau of Labor Statistics', link: 'https://data.bls.gov/oes/#/occGeo/One%20occupation%20for%20multiple%20geographical%20areas' },
  ]
}

export default mixedChartData