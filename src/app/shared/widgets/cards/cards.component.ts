import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts  from 'highcharts';
import * as HC_customEvents from 'highcharts-custom-events';

@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;

  constructor() { }

  Highcharts=Highcharts;
  chartOptions={}


  ngOnInit() {
    this.chartOptions={

      chart: {
        type: 'area',
        backgroundcolor:null,
        borderwidth:0,
        margin:[2,2,2,2],
        height:60
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
        split: true,
        outside:true
    },
    legends:{
      enabled:true
    },
    credits:{
      enabled:false
    },
    exporting:{
      enabled:false
    },
    xAxis:{
      labels:{
        enabled:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    yAxis:{

      labels:{
        enabled:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    series: [{
      data:[71,78,39,60]
    }]
    }
  }

}
