import { useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import React from 'react'

const data = [
  {
    "id": "saudi_arabia",
    "color": "hsl(5, 70%, 50%)",
    "data": [
      {
        "x": "crude_oil",
        "y": 162
      },
      {
        "x": "natural_gas",
        "y": 174
      },
      {
        "x": "refined_oil",
        "y": 213
      },
      {
        "x": "petrochemicals",
        "y": 108
      },
      {
        "x": "oil_products",
        "y": 179
      },
      {
        "x": "gasoline",
        "y": 222
      },
      {
        "x": "jet_fuel",
        "y": 243
      },
      {
        "x": "diesel",
        "y": 69
      },
      {
        "x": "LNG",
        "y": 189
      },
      {
        "x": "LPG",
        "y": 47
      },
      {
        "x": "kerosene",
        "y": 155
      },
      {
        "x": "others",
        "y": 29
      }
    ]
  },
  {
    "id": "russia",
    "color": "hsl(310, 70%, 50%)",
    "data": [
      {
        "x": "crude_oil",
        "y": 249
      },
      {
        "x": "natural_gas",
        "y": 28
      },
      {
        "x": "refined_oil",
        "y": 123
      },
      {
        "x": "petrochemicals",
        "y": 242
      },
      {
        "x": "oil_products",
        "y": 95
      },
      {
        "x": "gasoline",
        "y": 177
      },
      {
        "x": "jet_fuel",
        "y": 160
      },
      {
        "x": "diesel",
        "y": 83
      },
      {
        "x": "LNG",
        "y": 99
      },
      {
        "x": "LPG",
        "y": 76
      },
      {
        "x": "kerosene",
        "y": 244
      },
      {
        "x": "others",
        "y": 103
      }
    ]
  },
  {
    "id": "usa",
    "color": "hsl(334, 70%, 50%)",
    "data": [
      {
        "x": "crude_oil",
        "y": 163
      },
      {
        "x": "natural_gas",
        "y": 287
      },
      {
        "x": "refined_oil",
        "y": 25
      },
      {
        "x": "petrochemicals",
        "y": 220
      },
      {
        "x": "oil_products",
        "y": 192
      },
      {
        "x": "gasoline",
        "y": 201
      },
      {
        "x": "jet_fuel",
        "y": 148
      },
      {
        "x": "diesel",
        "y": 33
      },
      {
        "x": "LNG",
        "y": 29
      },
      {
        "x": "LPG",
        "y": 145
      },
      {
        "x": "kerosene",
        "y": 33
      },
      {
        "x": "others",
        "y": 86
      }
    ]
  },
  {
    "id": "iran",
    "color": "hsl(174, 70%, 50%)",
    "data": [
      {
        "x": "crude_oil",
        "y": 25
      },
      {
        "x": "natural_gas",
        "y": 67
      },
      {
        "x": "refined_oil",
        "y": 287
      },
      {
        "x": "petrochemicals",
        "y": 179
      },
      {
        "x": "oil_products",
        "y": 193
      },
      {
        "x": "gasoline",
        "y": 260
      },
      {
        "x": "jet_fuel",
        "y": 50
      },
      {
        "x": "diesel",
        "y": 32
      },
      {
        "x": "LNG",
        "y": 149
      },
      {
        "x": "LPG",
        "y": 127
      },
      {
        "x": "kerosene",
        "y": 81
      },
      {
        "x": "others",
        "y": 188
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(93, 70%, 50%)",
    "data": [
      {
        "x": "crude_oil",
        "y": 186
      },
      {
        "x": "natural_gas",
        "y": 47
      },
      {
        "x": "refined_oil",
        "y": 57
      },
      {
        "x": "petrochemicals",
        "y": 235
      },
      {
        "x": "oil_products",
        "y": 263
      },
      {
        "x": "gasoline",
        "y": 192
      },
      {
        "x": "jet_fuel",
        "y": 254
      },
      {
        "x": "diesel",
        "y": 157
      },
      {
        "x": "LNG",
        "y": 70
      },
      {
        "x": "LPG",
        "y": 103
      },
      {
        "x": "kerosene",
        "y": 182
      },
      {
        "x": "others",
        "y": 284
      }
    ]
  }
];


const Line = () => {

const theme = useTheme()

  const MyResponsiveLine = () => (
    <ResponsiveLine
    theme={{
  
      "text": {
          "fontSize": 11,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "axis": {
          "domain": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              }
          },
          "legend": {
              "text": {
                  "fontSize": 12,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "ticks": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              },
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "grid": {
          "line": {
              "stroke": "#dddddd",
              "strokeWidth": 0
          }
      },
      "legends": {
          "title": {
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.secondary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "ticks": {
              "line": {},
              "text": {
                  "fontSize": 10,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "annotations": {
          "text": {
              "fontSize": 13,
              "fill": theme.palette.text.primary,
              "outlineWidth": 2,
              "outlineColor": theme.palette.text.secondary,
              "outlineOpacity": 1
          },
          "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": theme.palette.text.secondary,
              "outlineOpacity": 1
          },
          "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": theme.palette.text.secondary,
              "outlineOpacity": 1
          },
          "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": theme.palette.text.secondary,
              "outlineOpacity": 1
          }
      },
      "tooltip": {
          "wrapper": {},
          "container": {
              "background": theme.palette.background.default,
              "color": "theme.palette.text.primary",
              "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
      }
  }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

  return (
    <MyResponsiveLine/>
  )
}

export default Line