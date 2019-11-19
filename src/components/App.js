import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import mixedChartData from '../data/mixedChartData';
import candyCaneChartData from '../data/candyCaneChartData';
import radialChartData from '../data/radialChartData';
import radarChartData from '../data/radarChartData';
import MixedChart from './MixedChart'
import RadialChart from './RadialChart';
import CandyCaneChart from './CandyCaneChart';
import RadarChart from './RadarChart';
import StackedBarChart from './StackedBarChart';
import stackedBarChartData from '../data/stackedBarChartData';
import heatmapChartData from '../data/heatmapChartData';
import HeatmapChart from './HeatmapChart';

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
      heatmapChart: heatmapChartData
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Industry Stats
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sources
        </a>
          <div>
            <div className="row">
              <div className="col mixed-chart">
                <MixedChart chartContent={this.state.mixedChart} updateCharts={this.updateCharts} type="line" width="500" />
              </div>

              <div className="col">
                <RadarChart chartContent={this.state.radarChart} updateCharts={this.updateCharts} />
              </div>

              <div className="col radial-chart">
                <RadialChart chartContent={this.state.radialChart} updateCharts={this.updateCharts} type="radialBar" width="280" />
              </div>
            </div>

            <div className="row">
              <div className="col bar-chart">
                <StackedBarChart chartContent={this.state.stackedBarChart} updateCharts={this.updateCharts} />
              </div>

              <div className="col">
                <HeatmapChart chartContent={this.state.heatmapChart} updateCharts={this.updateCharts} />
              </div>
            </div>

            <div className="row">
              <div className="col percentage-chart">
                <CandyCaneChart chartContent={this.state.candyCaneChart} updateCharts={this.updateCharts} />
              </div>

              <p className="col">
                <button onClick={this.updateCharts}>Update!</button>
              </p>
            </div>
          </div>
        </header>
      </div >
    )
  }
}

export default App;
