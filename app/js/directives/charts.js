(function () {
    'use strict';

    // Directive for Barchart
    app.directive('dtBarChart', function() {
            var barChart =  '<div class="row">'+
                                '<div class="col-xs-12">'+
                                    '<div class="padding-15">'+
                                        '<h5 class="text-dark">{{name}}</h5>'+
                                        '<p>'+
                                            '<span class="label label-success margin-right-10">{{percentage}}%</span><span class="text-bold text-extra-small">{{extraText}}</span>'+
                                        '</p>'+
                                        '<p>'+
                                            '<span class="text-small"> ({{count}} of {{totalCount}})</span>'+
                                        '</p>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-xs-12">'+                                          
                                        '<canvas class="chart chart-bar height-65" chart-data="data" chart-options="options" chart-labels="labels" chart-series="series" chart-colours="colors"></canvas>'+
                                '</div>'+
                            '</div>';
        var directive = {
            restrict: 'E',
            template: barChart,
            replace: true,
            scope: {
                name: "@name",
                percentage: "@percentage",
                extraText: "@extraText",
                labels: "=",
                data: "=",
                colors: "=",
                count: "@count",
                totalCount: "@totalCount"
            },
            link: function ($scope, $element, $attrs) {   
                $scope.series = ['dataset'];
                $scope.options = {
                    maintainAspectRatio: false,
                    showScale: false,
                    barDatasetSpacing: 0,
                    tooltipFontSize: 11,
                    tooltipFontFamily: "'Helvetica', 'Arial', sans-serif",
                    responsive: true,
                    scaleBeginAtZero: true,
                    scaleShowGridLines: false,
                    scaleLineColor: 'transparent',
                    barShowStroke: false,
                    barValueSpacing: 5
                };
            }
        };

        return directive;
    }); 



// Directive for Linechart
    app.directive('dtLineChart', function() {
        var LineChart =  '<div class="row">'+
                            '<div class="col-xs-12">'+
                                '<div class="padding-15">'+
                                    '<h5 class="text-dark">{{name}}</h5>'+
                                    '<p>'+
                                        '<i class="fa fa-circle text-azure margin-right-5"></i><span class="text-bold text-extra-small">{{extraText}}</span>'+
                                    '</p>'+
                                    '<p>'+
                                        '<span class="text-small"> {{percentage}}%</span>'+
                                    '</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-xs-12">'+
                                '<div class="margin-negative-5">'+
                                    '<canvas class="chart chart-line height-75" chart-data="data" chart-options="options" chart-labels="labels" chart-series="series" chart-colours="colors"></canvas>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        var directive = {
            restrict: 'E',
            template: LineChart,
            replace: true,
            scope: {
                name: "@name",
                percentage: "@percentage",
                extraText: "@extraText",
                labels: "=",
                data: "=",
                colors: "=",
                series: "="               
            },
            link: function ($scope, $element, $attrs) {    
                $scope.options = {
                    maintainAspectRatio: false,
                    showScale: false,
                    scaleLineWidth: 0,
                    responsive: true,
                    scaleFontFamily: "'Helvetica', 'Arial', sans-serif",
                    scaleFontSize: 11,
                    scaleFontColor: "#aaa",
                    scaleShowGridLines: true,
                    tooltipFontSize: 11,
                    tooltipFontFamily: "'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontFamily: "'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 12,
                    scaleGridLineColor: 'rgba(0,0,0,.05)',
                    scaleGridLineWidth: 1,
                    bezierCurve: true,
                    bezierCurveTension: 0.5,
                    scaleLineColor: 'transparent',
                    scaleShowVerticalLines: false,
                    pointDot: false,
                    pointDotRadius: 4,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: true,
                    datasetStrokeWidth: 2,
                    datasetFill: true,
                    animationEasing: "easeInOutExpo"
                };
            }
        };

        return directive;
    }); 




    // Directive for Linechart
    app.directive('dtMultiLineChart', function() {
        var LineChart = '<div>'+
                        '<div class="block">'+
                                '<div class="pull-left">'+
                                    '<h3 class="inline-block text-red text-bold"> {{count}} </h3>'+
                                    '<span class="inline-block text-extra-small text-green">{{percentage}} %</span>'+
                                '</div>'+
                                '<div class="text-right">'+
                                    '<button class="btn btn-xs btn-grey">'+
                                        'Hourly'+
                                    '</button>'+
                                    '<button class="btn btn-xs btn-grey">'+
                                        'Day'+
                                    '</button>'+
                                    '<button class="btn btn-xs btn-grey">'+
                                        'Week'+
                                    '</button>'+
                                    '<button class="btn btn-xs btn-grey active">'+
                                        'Month'+
                                    '</button>'+
                                '</div>'+
                            '</div>                              '+
                            '<div>'+
                                '<canvas class="chart chart-line height-300" chart-data="data" chart-options="options" chart-labels="labels" chart-series="series" chart-colours="colors"></canvas>'+
                            '</div>'+
                            '<div class="row padding-top-25">'+
                                '<div class="col-xs-4 text-center"  ng-repeat="l in legends">'+
                                    '<div class="margin-bottom-10">'+
                                        '<letter-icon data="{{l.data}}" color="{{l.color}}" size="sm" class="margin-right-10"></letter-icon><span class="text-extra-large text-bold">{{l.percentage}} %</span>'+
                                    '</div>'+
                                    '{{l.data}}'+
                                '</div>'+                                
                            '</div>'+
                        '</div>';
        var directive = {
            restrict: 'E',
            template: LineChart,
            replace: true,
            scope: {
                name: "@name",
                percentage: "@percentage",
                count: "@count",
                labels: "=",
                data: "=",
                colors: "=",
                series: "=",
                legends: "="               
            },
            link: function ($scope, $element, $attrs) {    
                // Chart.js Options - complete list at http://www.chartjs.org/docs/
                $scope.options = {
                    maintainAspectRatio: false,
                    responsive: true,
                    scaleFontFamily: "'Helvetica', 'Arial', sans-serif",
                    scaleFontSize: 11,
                    scaleFontColor: "#aaa",
                    scaleShowGridLines: true,
                    tooltipFontSize: 11,
                    tooltipFontFamily: "'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontFamily: "'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 12,
                    scaleGridLineColor: 'rgba(0,0,0,.05)',
                    scaleGridLineWidth: 1,
                    bezierCurve: false,
                    bezierCurveTension: 0.4,
                    scaleLineColor: 'transparent',
                    scaleShowVerticalLines: false,
                    pointDot: false,
                    pointDotRadius: 4,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: true,
                    tooltipXPadding: 20,
                    datasetStrokeWidth: 2,
                    datasetFill: true,
                    animationEasing: "easeInOutExpo"
                };
            }
        };

        return directive;
    }); 
















   // Directive for Single Linechart
    app.directive('dtLineChartBlock', function() {
        var LineChart =  '<div>'+
                            '<div class="space10 padding-15">'+
                                '<h5 class="text-bold text-extra-small text-dark-transparent text-uppercase no-margin">{{name}} <i class="fa fa-arrow-circle-o-right"></i></h5>'+
                                '<h2 class="text-white margin-top-15 margin-bottom-10">{{price}}</h2>'+
                                '<span class="label background-light text-dark margin-top-10 margin-right-5">{{increment}}</span><span class="text-extra-small">{{percentage}}%</span>'+
                            '</div>'+
                            '<div >'+
                                '<canvas class="chart chart-line height-80" chart-data="data" chart-options="options" chart-labels="labels" chart-series="series" chart-colours="colors"></canvas>'+
                            '</div>'+
                          '</div>';
        var directive = {
            restrict: 'E',
            template: LineChart,
            replace: true,
            scope: {
                name: "@name",
                percentage: "@percentage",
                price: "@price",
                increment: "@increment",
                labels: "=",
                data: "=",
                colors: "="            
            },
            link: function ($scope, $element, $attrs) {
                   $scope.series = ['dataset'];    
               // Chart.js Options - complete list at http://www.chartjs.org/docs/
                    $scope.options = {
                        maintainAspectRatio: false,
                        showScale: false,
                        scaleLineWidth: 0,
                        responsive: true,
                        scaleFontFamily: "'Helvetica', 'Arial', sans-serif",
                        scaleFontSize: 11,
                        scaleFontColor: "#aaa",
                        scaleShowGridLines: true,
                        tooltipFontSize: 11,
                        tooltipFontFamily: "'Helvetica', 'Arial', sans-serif",
                        tooltipTitleFontFamily: "'Helvetica', 'Arial', sans-serif",
                        tooltipTitleFontSize: 12,
                        scaleGridLineColor: 'rgba(0,0,0,.05)',
                        scaleGridLineWidth: 1,
                        bezierCurve: false,
                        bezierCurveTension: 0.2,
                        scaleLineColor: 'transparent',
                        scaleShowVerticalLines: false,
                        pointDot: true,
                        pointDotRadius: 4,
                        pointDotStrokeWidth: 1,
                        pointHitDetectionRadius: 20,
                        datasetStroke: true,
                        datasetStrokeWidth: 2,
                        datasetFill: true,
                        animationEasing: "easeInOutExpo"
                    };
            }
        };

        return directive;
    });




    // Directive for Bar chart
    app.directive('dtBarChartBlock', function() {
        var BarChart =  '<div>'+
                           '<div class="space10 padding-15">'+
                                '<h5 class="text-bold text-extra-small text-dark-transparent text-uppercase no-margin">{{name}} <i class="fa fa-arrow-circle-o-right"></i></h5>'+
                                '<h2 class="text-white margin-top-15 margin-bottom-10">$30.6M</h2>'+
                                '<span class="label background-light text-dark margin-top-10 margin-right-5">+15.3K</span><span class="text-extra-small">+0.05%</span>'+
                            '</div>'+
                            '<div >'+
                                '<canvas class="chart chart-bar height-80" chart-data="data" chart-options="options" chart-labels="labels" chart-series="series" chart-colours="colors"></canvas>'+
                            '</div>'+
                          '</div>';
        var directive = {
            restrict: 'E',
            template: BarChart,
            replace: true,
            scope: {
                name: "@name",
                percentage: "@percentage",
                price: "@price",
                increment: "@increment",
                labels: "=",
                data: "=",
                colors: "="            
            },
            link: function ($scope, $element, $attrs) {
                   $scope.series = ['dataset'];    
                    // Chart.js Options - complete list at http://www.chartjs.org/docs/
                    $scope.options = {
                        maintainAspectRatio: false,
                        showScale: false,
                        barDatasetSpacing: 0,
                        tooltipFontSize: 11,
                        tooltipFontFamily: "'Helvetica', 'Arial', sans-serif",
                        responsive: true,
                        scaleBeginAtZero: true,
                        scaleShowGridLines: false,
                        scaleLineColor: 'transparent',
                        barShowStroke: false,
                        barValueSpacing: 5
                    };
            }
        };

        return directive;
    });



     // Directive for Single Bar chart
    app.directive('dtProgressBarBlock', function() {
        var BarChart =  '<div>'+
                           '<div class="space10 padding-15">'+
                                '<h5 class="text-bold text-extra-small text-dark-transparent text-uppercase no-margin">{{name}} <i class="fa fa-arrow-circle-o-right"></i></h5>'+
                                '<h2 class="text-white margin-top-15 margin-bottom-10">{{total}}</h2>'+
                                '<span class="label background-light text-dark margin-top-10 margin-right-5">{{percentage}}%</span><span class="text-extra-small">{{extraText}}</span>'+
                            '</div>'+
                            '<div class="min-height-80">'+
                                '<div class="padding-top-20">'+
                                    '<uib-progressbar value="progress" class="progress-xs no-radius background-dark no-margin" type="white"></uib-progressbar>'+
                                '</div>'+
                            '</div>'+
                          '</div>';
        var directive = {
            restrict: 'E',
            template: BarChart,
            replace: true,
            scope: {
                name: "@name",
                total: "@total",
                percentage: "@percentage",
                extraText: "@extraText",
                progress: "@progress"           
            }           
        };

        return directive;
    });

})();
