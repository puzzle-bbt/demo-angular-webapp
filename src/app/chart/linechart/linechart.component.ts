import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js/auto';
Chart.register(...registerables);


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinechartComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {



    new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          pointStyle: 'circle',
          pointRadius:10 ,
          backgroundColor: ['black'],
          borderColor: ['black'],
          borderWidth: 2,

        }]
      },
      options: {
        responsive: true,
        animation: false,
        plugins: {legend:{display: false}, tooltip:{enabled: true}},
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}




