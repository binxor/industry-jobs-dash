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
            Software Engineering Industry Stats 2018-2019
          </p>
          <div className="dashboard">
            <div className="row">
              <div className="card">
                <MixedChart chartContent={this.state.mixedChart} updateCharts={this.updateCharts} type="line" width="450" />
                <SourceLink sources={this.state.mixedChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.mixedChart.title}
                </div>
              </div>

              <div className="card">
                <RadarChart chartContent={this.state.radarChart} updateCharts={this.updateCharts} width={450} />
                <SourceLink sources={this.state.radarChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.radarChart.title}
                </div>
              </div>

              <div className="card">
                <RadialChart chartContent={this.state.radialChart} updateCharts={this.updateCharts} type="radialBar" height="385" />
                <SourceLink sources={this.state.radialChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.radialChart.title}
                </div>
              </div>

            </div>

            <div className="row">
              {/* <div className="card">
                <StackedBarChart chartContent={this.state.stackedBarChart} updateCharts={this.updateCharts} />
              </div> */}

              <div className="card">
                <BarChart chartContent={this.state.barChart} updateCharts={this.updateCharts} />
                <SourceLink sources={this.state.barChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.barChart.title}
                </div>
              </div>

              <div className="card">
                <HeatmapChart chartContent={this.state.heatmapChart} updateCharts={this.updateCharts} height="350" width="450"/>
                <SourceLink sources={this.state.heatmapChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.heatmapChart.title}
                </div>
              </div>

              <div className="card">
                <RingChart chartContent={this.state.ringChart} updateCharts={this.updateCharts} height="500"  />
                <SourceLink sources={this.state.ringChart.sources}></SourceLink>
                <div className="card-title">
                  {this.state.ringChart.title}
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col percentage-chart">
                <CandyCaneChart chartContent={this.state.candyCaneChart} updateCharts={this.updateCharts} />
              </div>

              <p className="card">
                <button onClick={this.updateCharts}>Update!</button>
              </p>
            </div> */}
          </div>
        </header>
      </div>
    )
  }
}

export default App;
