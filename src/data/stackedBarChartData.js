const stackedBarChartData = {
  title: 'Age Distribution in Occupation',
  series: [ {
    name: 'Age 16 - 19',
    data: [ 1 , 2, 3, 1, 3, 5126]
  }, {
    name: 'Age 20 - 24',
    data: [ 15, 38, 28, 99, 11, 14051 ]
  }, {
    name: 'Age 25 - 34',
    data: [ 19, 193, 117, 595, 74, 35324 ]
  }, {
    name: 'Age 35 - 44',
    data:  [ 35, 162, 111, 462, 61, 32616 ]
  }, {
    name: 'Age 45 - 54',
    data: [ 48, 136, 126, 291, 33, 32373 ]
  }, {
    name: 'Age 55 - 64',
    data: [ 45, 92, 73, 200, 23, 26565 ]
  }, {
    name: 'Age 65+',
    data: [ 9, 29, 18, 34, 4, 9705 ]
  } ],
  categories: [ 'Computer and InfoSys Managers', 'Computer Systems Analysts', 'Computer Programmers', 'Software Developers, Applications, and Systems Software', 'Web Developers', 'All Computer Occupations' ]
}

export default stackedBarChartData

