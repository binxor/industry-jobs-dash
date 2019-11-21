let convertToDegrees = (arr) => {
  let ret = []
  for (let a=0; a<arr.length; a++) {
    // Calculate % of ring to fill from series max value
    ret.push(100*arr[a]/Math.max(...arr))
  }
  return ret
}

const ringChartData = {
  title: 'Top Company Salaries (2019)',
  series: convertToDegrees([ 151880, 151709, 147783, 140517, 103620 ]),
  categories: [ 'Apple', 'Cap. One', 'Cisco', 'Intuit', 'US Avg' ],
  yMax: Math.max(...[ 151880, 151709, 147783, 140517, 103620 ]),
  sources: [
    { name: '2019 Indeed.com', link: 'https://www.indeed.com/career/software-engineer/salaries' }
  ]
}

export default ringChartData