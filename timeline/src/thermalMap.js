import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord } from 'bizcharts'

class ThermalMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render () {
    const cols = {
      day: {
        type: 'cat',
        values: ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']
      },
      week: {
        type: 'cat'
      },
      commits: {
        sync: true
      }
    }
    const padding = [window.innerHeight / 3, 20, window.innerHeight / 3, 100]
    const {data} = this.state
    return (
      <div className='App'>

        <Chart height={400} data={data} scale={cols} forceFit padding={padding}>
          <Tooltip title='date' />
          <Axis name='week'position='top' tickLine={null} line={null} label={
            {
              offset: 12,
              textStyle: {
                fontSize: 12,
                fill: '#666',
                textBaseline: 'top'
              },
              formatter: val => {
                if (val === '2') {
                  return 'MAY'
                } else if (val === '6') {
                  return 'JUN'
                } else if (val === '10') {
                  return 'JUL'
                } else if (val === '15') {
                  return 'AUG'
                } else if (val === '19') {
                  return 'SEP'
                } else if (val === '24') {
                  return 'OCT'
                }
                return ''
              }
            }}
          />
          <Axis name='day' grid={null} />
          <Geom type='polygon' position='week*day*date' shape='boundary-polygon' color={['commits', '#BAE7FF-#1890FF-#0050B3']} />
          <Coord reflect='y' />
        </Chart>
      </div>
    )
  }
}

export default ThermalMap
