let convertToDegrees = (arr) => {
  let ret = []
  for (let a=0; a<arr.length; a++) {
    ret.push(arr[a]/2000)
  }
  return ret
}

const ringChartData = {
  title: 'Top Company Salaries (2019)',
  series: convertToDegrees([ 151880, 151709, 147783, 140517, 103620 ]),
  categories: [ 'Apple', 'Cap. One', 'Cisco', 'Intuit', 'US Avg' ]
}

export default ringChartData