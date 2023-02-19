import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApexOptions } from 'ng-apexcharts';
import { Subject } from 'rxjs';

//example
const exampleData = {
    labels: ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"],
    series: [
        {
            name: "Inflation",
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
    ]
}
export interface ChartOptions extends ApexOptions {
    titleAtChartUpper?: string;
}

export interface ChartData {
    labels: any[];
    series: any;
}

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

    // chartOptions: ChartOptions = {};
    // data: ChartData = exampleData;
    @Input() chartOptions: ChartOptions;
    @Input() data: ChartData;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _router: Router
    ) {

    }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    ngAfterViewInit(): void {


        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    }
                }
            }
        };
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    private _fixSvgFill(element: Element): void {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) => {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */


    //example data
    private _prepareChartData(): void {
        //     this.chartOptions = {
        //         series: this.data.series,
        //         chart: {
        //             height: 350,
        //             type: "bar"
        //         },
        //         plotOptions: {
        //             bar: {
        //                 dataLabels: {
        //                     position: "top" // top, center, bottom
        //                 }
        //             }
        //         },
        //         dataLabels: {
        //             enabled: true,
        //             formatter: function (val) {
        //                 return val + "%";
        //             },
        //             offsetY: -20,
        //             style: {
        //                 fontSize: "12px",
        //                 colors: ["#304758"]
        //             }
        //         },

        //         xaxis: {
        //             categories: this.data.labels,
        //             position: "top",
        //             labels: {
        //                 offsetY: -18
        //             },
        //             axisBorder: {
        //                 show: false
        //             },
        //             axisTicks: {
        //                 show: false
        //             },
        //             crosshairs: {
        //                 fill: {
        //                     type: "gradient",
        //                     gradient: {
        //                         colorFrom: "#D8E3F0",
        //                         colorTo: "#BED1E6",
        //                         stops: [0, 100],
        //                         opacityFrom: 0.4,
        //                         opacityTo: 0.5
        //                     }
        //                 }
        //             },
        //             tooltip: {
        //                 enabled: true,
        //                 offsetY: -35
        //             }
        //         },
        //         fill: {
        //             type: "gradient",
        //             gradient: {
        //                 shade: "light",
        //                 type: "horizontal",
        //                 shadeIntensity: 0.25,
        //                 gradientToColors: undefined,
        //                 inverseColors: true,
        //                 opacityFrom: 1,
        //                 opacityTo: 1,
        //                 stops: [50, 0, 100, 100]
        //             }
        //         },
        //         yaxis: {
        //             axisBorder: {
        //                 show: false
        //             },
        //             axisTicks: {
        //                 show: false
        //             },
        //             labels: {
        //                 show: false,
        //                 formatter: function (val) {
        //                     return val + "%";
        //                 }
        //             }
        //         },
        //         title: {
        //             text: "Monthly Inflation in Argentina, 2002",
        //             offsetY: 320,
        //             align: "center",
        //             style: {
        //                 color: "#444"
        //             }
        //         }
        //     };
        // }
    }
}
