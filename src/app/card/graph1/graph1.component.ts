import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.scss']
})
export class Graph1Component implements OnInit {
  public chart4: any;
  constructor() { }

  ngOnInit(): void {

    this.chart4 = new Chart('canvas4', {
      type: 'pie',
      data: {
        labels: ['Open', 'Bounce', 'Unsubscribe'],
        datasets: [
          {
            label: '# of Votes',
            data: [62, 32, 6],
            backgroundColor: [
              '#23CCEF',
              '#FB404B',
              '#FFA534'
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });

  }

}
