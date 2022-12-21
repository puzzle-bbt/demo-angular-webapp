import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, ChartItem, registerables} from 'chart.js/auto';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import backgroundColor = _default.defaults.backgroundColor;
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

    const plugin = {
      id: 'chart_area_background_color',
      beforeDraw: (chart: { width?: any; height?: any; ctx?: any; }, args: any, options: { color: any; }) => {
        const {ctx} = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color;
        ctx.fillRect(27, 10, chart.width - 35, chart.height - 20);
        ctx.restore();
      },
      defaults: {
        color: 'lightgray'
      }
    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    new Chart("myChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          pointStyle: 'circle',
          pointRadius:5 ,
          backgroundColor: ['black'],
          borderColor: ['black'],
          borderWidth: 2,

        }]
      },
      options: {
        backgroundColor: '#FE242422',
        animation: false,
        plugins: {legend:{display: false}, tooltip:{enabled: true}, chart_area_background_color: {}},

        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            display: false
          }
        },
        responsive: true,

      },
      plugins: [plugin],
    });
  }


}




