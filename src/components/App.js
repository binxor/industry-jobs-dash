import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import mixedChartData from '../chartData/mixedChartData';
import candyCaneChartData from '../chartData/candyCaneChartData';
import radialChartData from '../chartData/radialChartData';
import radarChartData from '../chartData/radarChartData';
import MixedChart from './MixedChart'
import RadialChart from './RadialChart';
import CandyCaneChart from './CandyCaneChart';
import RadarChart from './RadarChart';
import RingChart from './RingChart';
import StackedBarChart from './StackedBarChart';
import stackedBarChartData from '../chartData/stackedBarChartData';
import heatmapChartData from '../chartData/heatmapChartData';
import HeatmapChart from './HeatmapChart';
import BarChart from './BarChart';
import barChartData from '../chartData/barChartData';
import ringChartData from '../chartData/ringChartData';
import SourceLink from './SourceLink';

class App extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this)

    this.state = {
      mixedChart: mixedChartData,
      radialChart: radialChartData,
      candyCaneChart: candyCaneChartData,
      radarChart: radarChartData,
      stackedBarChart: stackedBarChartData,
      heatmapChart: heatmapChartData,
      barChart: barChartData,
      ringChart: ringChartData
    }
  }

  updateCharts () {
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
    const newCandyCaneSeries = [];

    this.state.mixedChart.series.map((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      newMixedSeries.push({ data: data, type: s.type })
    })

    this.state.candyCaneChart.series.map((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min
      })
      newCandyCaneSeries.push({ data, name: s.name })
    })

    this.setState({
      mixedChart: { series: newMixedSeries },
      candyCaneChart: { series: newCandyCaneSeries },
      radialChart: { series: [ Math.floor(Math.random() * (90 - 50 + 1)) + 50 ] }
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Industry Stats  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sources
              </a>
          </p>
          <div>
            <div className="row">
              <div className="col">
                <MixedChart chartContent={this.state.mixedChart} updateCharts={this.updateCharts} type="line" width="500" />
                <SourceLink sources={this.state.mixedChart.sources}></SourceLink>
              </div>

              <div className="col">
                <RadarChart chartContent={this.state.radarChart} updateCharts={this.updateCharts} />
                <SourceLink sources={this.state.radarChart.sources}></SourceLink>
              </div>

              <div className="col">
                <RadialChart chartContent={this.state.radialChart} updateCharts={this.updateCharts} type="radialBar" width="280" />
                <SourceLink sources={this.state.radialChart.sources}></SourceLink>
              </div>
            </div>

            <div className="row">
              {/* <div className="col">
                <StackedBarChart chartContent={this.state.stackedBarChart} updateCharts={this.updateCharts} />
              </div> */}

              <div className="col">
                <BarChart chartContent={this.state.barChart} updateCharts={this.updateCharts} />
                <SourceLink sources={this.state.barChart.sources}></SourceLink>
              </div>

              <div className="col">
                <HeatmapChart chartContent={this.state.heatmapChart} updateCharts={this.updateCharts} />
                <SourceLink sources={this.state.heatmapChart.sources}></SourceLink>
              </div>

              <div className="col">
                <RingChart chartContent={this.state.ringChart} updateCharts={this.updateCharts} />
                <SourceLink sources={this.state.ringChart.sources}></SourceLink>
              </div>
            </div>

            {/* <div className="row">
              <div className="col percentage-chart">
                <CandyCaneChart chartContent={this.state.candyCaneChart} updateCharts={this.updateCharts} />
              </div>

              <p className="col">
                <button onClick={this.updateCharts}>Update!</button>
              </p>
            </div> */}
          </div>
        </header>
      </div >
    )
  }
}

export default App;
