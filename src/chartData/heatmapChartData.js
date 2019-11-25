const heatmapChartData = {
  title: 'Age Group vs. Occupation',
  series: [
    // {
    //   name: 'All Computer Occupations',
    //   data: [
    //     { x: '16 - 19', y: 5126 },
    //     { x: '20 - 24', y: 14051 },
    //     { x: '25 - 34', y: 35324 },
    //     { x: '35 - 44', y: 32616 },
    //     { x: '45 - 54', y: 32373 },
    //     { x: '55 - 64', y: 26565 },
    //     { x: '65+', y: 9705 }
    //   ]
    // },
    // {
    //   name: 'Computer and InfoSys Managers',
    //   data: [
    //     { x: '16 - 19', y: 1 },
    //     { x: '20 - 24', y: 15 },
    //     { x: '25 - 34', y: 19 },
    //     { x: '35 - 44', y: 35 },
    //     { x: '45 - 54', y: 48 },
    //     { x: '55 - 64', y: 45 },
    //     { x: '65+', y: 9 }
    //   ]
    // },
    {
      name: 'Systems Analysts',
      data: [
        { x: '16 - 19', y: 2 },
        { x: '20 - 24', y: 38 },
        { x: '25 - 34', y: 193 },
        { x: '35 - 44', y: 162 },
        { x: '45 - 54', y: 136 },
        { x: '55 - 64', y: 92 },
        { x: '65+', y: 29 }
      ]
    },
    {
      name: 'Programmers',
      data: [
        { x: '16 - 19', y: 3 },
        { x: '20 - 24', y: 28 },
        { x: '25 - 34', y: 117 },
        { x: '35 - 44', y: 111 },
        { x: '45 - 54', y: 126 },
        { x: '55 - 64', y: 73 },
        { x: '65+', y: 18 }
      ]
    },
    {
      name: 'Software Developers',
      data: [
        { x: '16 - 19', y: 1 },
        { x: '20 - 24', y: 99 },
        { x: '25 - 34', y: 595 },
        { x: '35 - 44', y: 462 },
        { x: '45 - 54', y: 291 },
        { x: '55 - 64', y: 200 },
        { x: '65+', y: 34 }
      ]
    },
    {
      name: 'Web Developers',
      data: [
        { x: '16 - 19', y: 3 },
        { x: '20 - 24', y: 11 },
        { x: '25 - 34', y: 74 },
        { x: '35 - 44', y: 61 },
        { x: '45 - 54', y: 33 },
        { x: '55 - 64', y: 23 },
        { x: '65+', y: 4 }
      ]
    }
  ],
  categories: [ '16 - 19', '20 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+' ],
  sources: [
    { name: '2019 Bureau of Labor Statistics', link: 'https://www.bls.gov/cps/cpsaat11b.htm' }
  ]
}

export default heatmapChartData