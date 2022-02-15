import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.scss']
})
export class Graph2Component implements OnInit {
  public chart2: any;
  constructor() { }

  ngOnInit(): void {

    this.chart2 = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: ['9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM', '12:00AM', '3:00AM', '6:00AM'],
        datasets: [
          {
            label: 'Open',
            data: [12, 19, 3, 5, 2, 3, 16, 25],
            backgroundColor: '#FFA534',
            borderColor: '#FFA534',
          },
          {
            label: 'click',
            data: [16, 23, 7, 9, 6, 7, 20, 29],
            backgroundColor: '#FB404B',
            borderColor: '#FB404B',
          },
          {
            label: 'Click Second Time',
            data: [26, 33, 17, 19, 16, 17, 30, 39],
            backgroundColor: '#23CCEF',
            borderColor: '#23CCEF',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  }

}
