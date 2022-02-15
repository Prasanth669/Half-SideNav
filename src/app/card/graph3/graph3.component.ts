import { Component, OnInit } from '@angular/core';
//import { Chart } from 'node_modules/chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.scss']
})
export class Graph3Component implements OnInit {
  public chart1: any;
  constructor() { }

  ngOnInit(): void {

    this.chart1 = new Chart('canvas1', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Tesla Model S',
            data: [550, 420, 320, 780, 560, 470, 350, 430, 570, 600, 780, 900],
            backgroundColor: '#23CCEF'
          },
          {
            label: 'BMW 5 Series',
            data: [410, 220, 290, 590, 460, 380, 300, 380, 480, 400, 630, 700],
            backgroundColor: '#FB404B'
          },
        ],
      },
      options: {
        maintainAspectRatio: false
      }
    });

  }

}
