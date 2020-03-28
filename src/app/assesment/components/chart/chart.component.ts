import { Component, OnInit, Input } from '@angular/core';

import 'chartjs-plugin-datalabels';
import { AuthService } from 'src/app/services/auth/auth.service';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


chartType: String = 'doughnut';
chartData: any ;
@Input() inputData: Array<Array<number>> ;
options: any;
resultChartOptions: any;
public resultChartData: any;
private labels: Array<string> = [
  'LEADERSHIP',
  'SIMPLE PLANS',
  'SHARED PURPOSE',
  'PRODUCTS/SERVICES',
  'WHAT AND HOW',
  'DESIRED CUSTOMERS / MARKET',
  '€ IN',
  '€ TO INVEST',
  'FACTUAL DATA',
  'EYES ON THE ROAD',
  'ASSIGNED OWNERSHIP',
  '€ OUT',
  'CLEAR DIRECTIONS',
  'COUNT ON ME!',
  'FUN-FAIL LEARN GROW',
  'MEANINGFUL CONTRIBUTION',
  'EFFECTIVE USE OF TALENTS',
  'FOCUS ON PRIMARY PROCESS',
  'COUNT ON US!',
  'STEP BY STEP ACHIEVEMENTS',
  'WE COUNT ON EACH OTHER!',
  'PARTNERSHIP'
] ;

public colors = [{}];  // just empty intialization

public resultColors = []; //for tables only


  constructor(public auth: AuthService) {}

  ngOnInit() {

    this.translateColor()
    .then(this.createConfig)
    .then(this.createResultChartConfig)
    .then(results => {
      this.chartData = results['chartData'];
      this.resultChartData = results['resultChartData'];
    })
    .catch((err) => console.log(err));

  }





  private translateColor = () => {

return new Promise((resolve,reject) => {

      const colors = [];

      this.inputData.forEach((a1 , index) => {

       a1 = a1.map(Number);

        if (a1.length < 3) { return; }

        if (index === 5 ) {

          a1[1] = (a1[1] === 1  ? 0 : 1);

        }

        if (index === 8) {

          a1[0] = (a1[0] === 1   ? 0 : 1);

        }

        const sum = a1.reduce((a, b) => a + b);

        let color = '';

        if (sum <= 1) { color = 'green'; }

        if (sum === 2) { color = '#FF9999'; }

        if (sum === 3) { color = 'red'; }

        if (sum > 3 ) { color = 'lightgrey'; }

       colors.push(color);

      });

  this.resultColors = colors;
  resolve(colors);

});

  }



private createConfig = (colors: [string]) => {

  return new Promise((resolve,reject) => {

const backgroundColors = [];
const labels = [];



backgroundColors[0] = colors.slice(0, 6);
backgroundColors[1] = colors.slice(6, 12);
backgroundColors[2] = colors.slice(12, 22);


this.options = {
  responsive: false,
  cutoutPercentage: 10,
  rotation: 361.26,
  plugins: {

    datalabels: {
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderColor: 'white',
      borderRadius: 25,
      borderWidth: 2,
      color: 'white',
      display: function(context) {
        return true;
      },
      font: {
        weight: 'bold',
        fontsize:'10px'
      },
      formatter: function(value, context) {
        const data = [
          [13,14,15,16,17,18,19,20,21,22],
        [7,8,9,10,11,12],
          [1,2,3,4,5,6]
          
        ]
                      return data[context.datasetIndex][context.dataIndex];
     }
    
    }
  },
  tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const index = tooltipItem.index;
          return ' ' + dataset.labels[index] ;
        }
      }
    }
  } ;


  


  labels[0] = this.labels.slice(0, 6);
  labels[1] = this.labels.slice(6, 12);
  labels[2] = this.labels.slice(12, 22);


const chartData = [{
  data: [
      16.66, // 1 single
      8.3, // 2 double
      8.3, // double
      16.66, // single
      8.3, // double
      8.3, // double
        8.3, // double
        8.3, // double
        8.3, // double
        8.3 // double


  ],
  backgroundColor: backgroundColors[2] ,

  labels: labels[2]



}, {
  data: [
    16.66,
    16.66,
    16.66,
    16.66,
    16.66,
    16.66

  ],
  backgroundColor: backgroundColors[1],
  labels: labels[1]

}, {
  data: [
    16.66,
    16.66,
    16.66,
    16.66,
    16.66,
    16.66

  ],
  backgroundColor: backgroundColors[0],
  labels: labels[0]

}];


resolve(chartData);
  });


}

private createResultChartConfig = (chartData: any) => {
  
  return new Promise((resolve,reject) => {

    this.resultChartOptions = {
      responsive: false,
      cutoutPercentage: 10,
      rotation: 361.26,
       tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const index = tooltipItem.index;
              return ' ' + dataset.labels[index] ;
            }
          }
        }
      } ;
 
    const resultChartData = [];

    for (let i = 21; i >= 0; i--) {

   const a = {
      data: [
          100
       ],
      backgroundColor: this.resultColors[i] ,
      labels: this.labels[i]

    };

    resultChartData.push(a);

  }


resolve({chartData: chartData, resultChartData: resultChartData});


});


}

}
