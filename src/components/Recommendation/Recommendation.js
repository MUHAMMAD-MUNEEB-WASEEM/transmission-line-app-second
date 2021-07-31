import React from 'react'
import './Recommendation.css'
import { Line} from 'react-chartjs-2';
import { Scale } from 'chart.js';

function Recommendation() {
    return (
        <div className="recommendation">
           <h1 className="recommendation__heading">Recommendation section</h1> 

            <div className="recommendation__charts"> 
                <Line 
                data={{
                    labels: ['jan', 'feb', 'march', 'april', 'may', 'june'],
                    datasets: [{
                        data: [10, 20, 30, 40, 50, 60],
                        label: 'Label 1',
                        borderColor: 'rgba(250, 126, 10, 1)',
                        backgroundColor: 'rgba(250, 126, 10, 0.59)',
                        fill: true,
                        borderWidth: 7

                    }, {
                        data: [5, 10, 15, 20, 25, 30],
                        label: 'Label 2',
                        borderColor: 'rgba(228, 12, 12, 1)',
                        backgroundColor: 'rgba(228, 12, 12, 0.59)',
                        fill: true,
                        borderWidth: 7

                    }],
                }}
                options={{
                    legend: {display:true, position:'right'},
                    title:{ 
                        display:true, 
                        text:'Recommendation 1',
                        fontColor: "#000",
                        fontSize: 20,
                    },
                    scaleFontColor: 'red',

                }
            }
            />

                  <Line 
                    data={{
                    labels: ['jan', 'feb', 'march', 'april', 'may', 'june'],
                    datasets: [{
                        data: [10, 20, 30, 40, 50, 60],
                        label: 'Label 1',
                        borderColor: 'rgba(250, 126, 10, 1)',
                        backgroundColor: 'rgba(250, 126, 10, 0.59)',
                        fill: true,
                        borderWidth: 7

                    }, {
                        data: [5, 10, 15, 20, 25, 30],
                        label: 'Label 2',
                        borderColor: 'rgba(228, 12, 12, 1)',
                        backgroundColor: 'rgba(228, 12, 12, 0.59)',
                        fill: true,
                        borderWidth: 7

                    }],
                }}
                options={{
                    legend: {display:true, position:'right'},
                    title:{ 
                        display:true, 
                        text:'Recommendation 1',
                        fontColor: "#000",
                        fontSize: 20,
                    },
                    scaleFontColor: 'red',
                    

                }}
            />
        </div>
        </div>
    )
}

export default Recommendation
