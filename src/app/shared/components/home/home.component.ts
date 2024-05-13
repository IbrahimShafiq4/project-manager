import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tasksChart = new Chart({
    chart: {
      type: 'pie',
      width: 500,
      height: 300,
    },
    title: {
      text: 'Tasks',
      floating: true,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.point.name + '</b>: ' + this.point.y;
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Progress', y: 7, color: '#000' },
          { name: 'Tasks Number', y: 3, color: '#393e64' },
          { name: 'Project Number', y: 1, color: '#00adb5' },
        ],
      },
    ],
  });

  usersChart = new Chart({
    chart: {
      type: 'pie',
      width: 500,
      height: 300,
    },
    title: {
      text: 'Users',
      floating: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.point.name + '</b>: ' + this.point.y;
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Active', y: 7, color: '#000' },
          { name: 'inactive', y: 2, color: '#393e64' },
        ],
      },
    ],
  });
}
