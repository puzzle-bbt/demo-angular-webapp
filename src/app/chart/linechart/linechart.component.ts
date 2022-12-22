import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, ChartItem, registerables} from 'chart.js/auto';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import 'chartjs-adapter-moment'

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
        ctx.fillRect(27, 10, chart.width - 39, chart.height - 39);
        ctx.restore();
      },
      defaults: {
        color: 'lightgray'
      }
    }

    const labels = ['Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    new Chart("myChart", {
      type: 'scatter',
      data: {
        // labels: labels,
        datasets: [{
          backgroundColor: ['black'],
          borderColor: ['black'],
          borderWidth: 2,
          data: [
          { x: '2020/09/02', y: 15 },
          { x: '2020/11/03', y: 16},
          { x: '2020/11/04', y: 19},
          { x: '2020/11/07', y: 22},
          { x: '2020/11/08', y: 25},
          { x: '2020/12/09', y: 25},


        ],
          pointRadius: 5,
          pointStyle: 'circle',

        }]
      },
      options: {
        showLine: true,
        backgroundColor: '#FE242422',
        animation: false,
        spanGaps: true,
        plugins: {legend: {display: false}, tooltip: {enabled: true}, chart_area_background_color: {}},

        scales: {
          x: {
            type: 'time',
            // min: Date.now() - (24 * 60 * 60 * 1000),
            // max: Date.now() + (24 * 60 * 60 * 1000),
            ticks: {
              source: 'auto',
            },
            time: {
              unit: 'day', //second
              displayFormats: {
                hour: "dd/MM/yyyy" //second = 'dd/MM/yyyy HH:mm:ss'
              },
              tooltipFormat: "dd/MM/yyyy",
            },
          },
          y: {
            min: 0,

          },
        },
        responsive: true,
      },
      plugins: [plugin],
    });
  }


}




