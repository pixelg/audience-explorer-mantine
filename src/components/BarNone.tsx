import { ResponsiveBar } from '@nivo/bar'
import { BarDatum } from "@/types/BarDatum.ts";

interface BarProps {
  data: readonly BarDatum[];
}

const theme = {
  tooltip: {
    container: {
      background: '#333', // dark background for the tooltip container
      color: 'white'
    }
  },
  axis: {
    ticks: {
      line: {
        stroke: 'white'
      },
      text: {
        fill: 'white'
      }
    },
    legend: {
      text: {
        fill: 'white'
      }
    },
    legends: {
      text: {
        fill: 'white'
      }
    },
  }
};

const MyResponsiveBar = ({ data } : BarProps) => (
  <ResponsiveBar
    data={data}
    keys={[
      'hot dog',
      'burger',
      'sandwich',
      'kebab',
      'fries',
      'donut'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    theme={theme}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
      truncateTickAt: 0
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [
        [
          'brighter',
          2
        ]
      ]
    }}
    legends={[
      {
        itemTextColor: 'white',
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
  />
)

export default MyResponsiveBar;