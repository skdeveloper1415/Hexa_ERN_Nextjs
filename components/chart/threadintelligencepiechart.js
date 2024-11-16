import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Threadintelligencepiechart() {
  const option = {
    color:["#8a1319","#961a5e","#a17e1f",],
  
 
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '90%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
           itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 0.2
          },
          label: {
            show: false,
            position: 'center'
          },
         
         
          data: [
            { value: 584, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#9c031a' },   // Middle color
                  { offset: 1, color: '#9c031a' }      // End color
                ]
              }
            } },
            { value: 64, name: 'Union Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8f1426' },   // Middle color
                  { offset: 1, color: '#9c031a' }      // End color
                ]
              }
            } },
            { value: 44, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8c0710' },   // Middle color
                  { offset: 1, color: '#8c0710' }      // End color
                ]
              }
            } },
            { value:74, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8c0710' },   // Middle color
                  { offset: 1, color: '#8c0710' }      // End color
                ]
              }
            } },
            { value:81, name: 'Union Ads' },
            { value: 54, name: 'Union Ads' },
            { value: 124, name: 'Union Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8f1426' },   // Middle color
                  { offset: 1, color: '#820911' }      // End color
                ]
              }
            }},
             { value: 54, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8a1319' },   // Middle color
                  { offset: 1, color: '#820911' }      // End color
                ]
              }
            } },
             { value: 124, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8a1319' },   // Middle color
                  { offset: 1, color: '#820911' }      // End color
                ]
              }
            } },
              { value: 94, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#8a1319' },   // Middle color
                  { offset: 1, color: '#75072a' }      // End color
                ]
              }
            }
           },
            { value: 3500, name: 'Union Ads' , itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a1050f' },     // Start color
                  { offset: 0.5, color: '#91161e' },   // Middle color
                  { offset: 1, color: '#2e000f' }      // End color
                ]
              }
            }
          }, 
             { value: 54, name: 'Union Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#8a1319' },     // Start color
                  { offset: 0.5, color: '#8a1319' },   // Middle color
                  { offset: 1, color: '#75072a' }      // End color
                ]
              }
            } },
                { value: 34, name: 'Union Ads' },
                 { value: 34, name: 'Union Ads' },
                 { value: 44, name: 'Union Ads' },
            { value: 590, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#ad0c65' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#700440' }      // End color
                ]
              }
            }  },
          { value: 40, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#940352' }      // End color
                ]
              }
            } },
          { value: 30, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#940352' }      // End color
                ]
              }
            } },
          { value: 50, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#940352' }      // End color
                ]
              }
            }  },
          { value: 30, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#940352' }      // End color
                ]
              }
            } },
            { value: 30, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#940352' }      // End color
                ]
              }
            }  },
             { value: 60, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#960856' }      // End color
                ]
              }
            } },
              { value: 50, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#960856' },     // Start color
                  { offset: 0.5, color: '#960856' },   // Middle color
                  { offset: 1, color: '#960856' }      // End color
                ]
              }
            } },
               { value: 30, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#a6025c' },     // Start color
                  { offset: 0.5, color: '#a6025c' },   // Middle color
                  { offset: 1, color: '#a6025c' }      // End color
                ]
              }
            }},
            { value: 90, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#66093c' },     // Start color
                  { offset: 0.5, color: '#a6025c' },   // Middle color
                  { offset: 1, color: '#a6025c' }      // End color
                ]
              }
            }},
            { value:60, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#66093c' },     // Start color
                  { offset: 0.5, color: '#a6025c' },   // Middle color
                  { offset: 1, color: '#a6025c' }      // End color
                ]
              }
            }},
            { value: 30, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#66093c' },     // Start color
                  { offset: 0.5, color: '#a6025c' },   // Middle color
                  { offset: 1, color: '#a6025c' }      // End color
                ]
              }
            }},
            { value: 2900, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#38011f' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#a6025c' }      // End color
                ]
              }
            } },
            { value:70, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#961a5e' }      // End color
                ]
              }
            }},
            { value: 100, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#570230' }      // End color
                ]
              }
            }},
              { value: 70, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            }},
            { value: 60, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            }},
            { value: 50, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            } },
            { value: 40, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            }},
             { value: 40, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            }},
            { value: 60, name: 'Video Ads',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#30021b' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            } },
            { value: 40, name: 'Video Ads' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#38011f' },     // Start color
                  { offset: 0.5, color: '#5e0134' },   // Middle color
                  { offset: 1, color: '#470328' }      // End color
                ]
              }
            } },
             { value: 420, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#5e470a' },     // Start color
                  { offset: 0.5, color: '#5c470f' },   // Middle color
                  { offset: 1, color: '#a17c1b' }      // End color
                ]
              }
            } }, 
             { value: 40, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#5c470f' },     // Start color
                  { offset: 0.5, color: '#73570e' },   // Middle color
                  { offset: 1, color: '#a17c1b' }      // End color
                ]
              }
            } },
            { value: 30, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#5c470f' },     // Start color
                  { offset: 0.5, color: '#73570e' },   // Middle color
                  { offset: 1, color: '#a17c1b' }      // End color
                ]
              }
            } },
             { value: 40, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#5c470f' },     // Start color
                  { offset: 0.5, color: '#73570e' },   // Middle color
                  { offset: 1, color: '#a17c1b' }      // End color
                ]
              }
            } },
              { value: 60, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#73570e' },     // Start color
                  { offset: 0.5, color: '#5c470f' },   // Middle color
                  { offset: 1, color: '#a17c1b' }      // End color
                ]
              }
            }},
              { value: 510, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#73570e' },     // Start color
                  { offset: 0.5, color: '#73570e' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            } },
              { value:600, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#73570e' },     // Start color
                  { offset: 0.5, color: '#73570e' },   // Middle color
                  { offset: 1, color: '#9c7816' }      // End color
                ]
              }
            }},
             { value: 390, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#73570e' },     // Start color
                  { offset: 0.5, color: '#8c6908' },   // Middle color
                  { offset: 1, color: '#a37f1c' }      // End color
                ]
              }
            } },
             { value: 40, name: 'Email',itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#73570e' },     // Start color
                  { offset: 0.5, color: '#a37f1c' },   // Middle color
                  { offset: 1, color: '#a37f1c' }      // End color
                ]
              }
            } },
             { value: 50, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#80600e' },     // Start color
                  { offset: 0.5, color: '#a37f1c' },   // Middle color
                  { offset: 1, color: '#a37f1c' }      // End color
                ]
              }
            }},
             { value: 430, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#80600e' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
               { value: 60, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
                { value: 50, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
                 { value: 80, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }}, 
                 { value: 80, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
                  { value: 70, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
                   { value: 70, name: 'Email' ,itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#96710b' },     // Start color
                  { offset: 0.5, color: '#96710b' },   // Middle color
                  { offset: 1, color: '#96710b' }      // End color
                ]
              }
            }},
                  
            
          ]
        }  ]
    };
    
  return (
    
      
      <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
    
  )
}
