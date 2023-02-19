export interface IDefaultChartConfig {
    data: any[];
    view: any[];
    legend: boolean;
    showLabels: boolean;
    animations: boolean;
    xAxis: boolean;
    yAxis: boolean;
    showYAxisLabel: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    timeline?: boolean;
    legendTitle?: string;
    colorScheme: any;
    customColors?: any[],
    legendData?: any[];
    colors?: any;
    customLegend?: boolean;
    onSelect(data: any);
    onActivate(data: any);
    onDeactivate(data: any);

}