import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};

export type LineChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})

export class StatisticsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  @ViewChild("linechart") linechart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public lineChartOptions: Partial<LineChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [40,60],
      chart: {
        width: 550,
        type: "pie"
      },
      labels: ['changed', 'same'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.lineChartOptions = {
      series: [
        {
          name: 'firstDuration',
          data: [13, 10, 11, 10, 11]
        },
        {
          name: 'secondDuration',
          data: [5, 8, 10, 12, 8]
        }
      ],
      chart: {
        width: 600,
        type: "line"
      },
    };
  }
}
