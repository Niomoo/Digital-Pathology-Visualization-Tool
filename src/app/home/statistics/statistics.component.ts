import { RecordArray } from './../../@models/record.model';
import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import { JudgementAPIService } from 'src/app/@services/judgement-api.service';
import { RecordService } from 'src/app/@services/record.service';

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
  public chartOptions!: Partial<ChartOptions>;
  public lineChartOptions!: Partial<LineChartOptions>;

  recordData : RecordArray = [];
  same: number = 0;
  changed: number = 0;
  firstDuration: Array<number> = [];
  secondDuration: Array<number> = [];

  constructor(
    private recordService: RecordService,
    private judgementAPIService: JudgementAPIService
  ) {
    this.judgementAPIService.getJudgement(this.recordService.u_id).subscribe({
      next: (data) => {
        this.recordData = data;
        console.log(this.recordData);
        for(let r = 0; r < this.recordData.length; r++) {
          if(this.recordData[r].firstJudge == this.recordData[r].secondJudge) this.same++;
          else this.changed++;
          this.firstDuration.push(this.convertSeconds(this.recordData[r].firstDuration));
          this.secondDuration.push(this.convertSeconds(this.recordData[r].secondDuration));
        }
        this.chartOptions = {
          series: [this.changed, this.same],
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
              data: this.firstDuration
            },
            {
              name: 'secondDuration',
              data: this.secondDuration
            }
          ],
          chart: {
            width: 600,
            type: "line"
          },
        };
      }
    })
  }

  convertSeconds(timeString: string): number {
    let timeArr = timeString.split(":");
    let seconds = 0;
    seconds += Number(timeArr[0]) * 60 * 60;
    seconds += Number(timeArr[1]) * 60;
    seconds += Number(timeArr[2]);
    return seconds;
  }
}
