<%@ include file="/WEB-INF/jsp/site/taglib.jsp"%>

<%@ attribute name="id" required="true" %>
<%@ attribute name="dataUrl" required="true" %>
<%@ attribute name="columnNames" rtexprvalue="true" required="true" type="java.util.Collection" %>
<%@ attribute name="dataNames" rtexprvalue="true" required="true" type="java.util.Collection" %>


<!-- multiline.css -->

<style>

/* Once the JavaScript is stable and possible for implementation, the folling CSS should be transfered to all theme files. */

.chart-wrapper {
    max-width: 950px;
    min-width: 104px;
    margin: 0 auto;
    background-color: #fff;
}

.chart-wrapper .inner-wrapper {
    position: relative;
    padding-bottom: 50%;
    width: 100%;
}

.chart-wrapper .outer-box {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
}

.chart-wrapper .inner-box {
    width: 100%;
    height: 100%;
}

.chart-wrapper text {
  font-family: sans-serif;
  font-size: 11px;
  fill: #000;
}

.legend p {
	color: #1c1c1c;
}

.chart-wrapper p {
    font-size: 16px;
    margin-top:5px;
    margin-bottom: 40px;
}

.chart-wrapper .axis path,
.chart-wrapper .axis line {
    fill: none;
    stroke: #1F1F2E;
    stroke-opacity: 0.7;
    shape-rendering: crispEdges;

}
.chart-wrapper .axis path {
  stroke-width: 2px;
}

.chart-wrapper .line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}

.chart-wrapper .legend  {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 16px;
    padding: 10px 20px 0 20px;
}
.chart-wrapper .legend > div {
    margin: 0px 25px 10px 0px;
    flex-grow: 0;
}
.chart-wrapper .legend p {
    display:inline;
    font-size: 0.7em;
    font-family: sans-serif;
    font-weight: 600;
}
.chart-wrapper .legend .series-marker {
    height: 1em;
    width: 1em;
    border-radius: 35%;
    background-color: crimson;
    display: inline-block;
    margin-right: 4px;
    margin-bottom: -0.16rem;
}

.chart-wrapper .overlay {
  fill: none;
  pointer-events: all;
}

.chart-wrapper .focus circle {
  fill: crimson;
  stroke: crimson;
  stroke-width: 2px;
  fill-opacity: 15%;
}
.chart-wrapper .focus rect {
    fill: lightblue;
    opacity: 0.4;
    border-radius: 2px;
}
.chart-wrapper .focus.line {
    stroke: steelblue;
    stroke-dasharray: 2,5;
    stroke-width: 2;
    opacity: 0.5;
}
@media (max-width:500px){
    .chart-wrapper .line {stroke-width: 3px;}
    .chart-wrapper .legend {font-size: 14px;}
}

.label {
	padding: 20px;
}

</style>
<div class="chart-wrapper" id="${id}-line-chart-container">
	<svg id="${id}-line-chart"></svg>
</div>
<script src="<c:url value="/js/libs/d3v4/d3.v4.min.js"/>"></script>
<script src="<c:url value="/js/libs/d3v4/d3-scale-chromatic.v1.min.js"/>"></script>
<script src="<c:url value="/js/libs/d3v4/topojson.v2.min.js"/>"></script>
<script src="https://d3js.org/d3-axis.v1.min.js"></script>


<!-- index.html -->

<script type="text/javascript">
    //d3.csv('${contextRoot}/multiline_data_days_small.csv', function(error, data) {
   	d3.json('${dataUrl}', function(error, data) {
        data.forEach(function (d) {
            d.day = +d.day;
            d['${dataNames[0]}'] = +d['${dataNames[0]}'];
            d['${dataNames[1]}'] = +d['${dataNames[1]}'];
   
        });
        var chart = makeLineChart(data, 'day', {
//         	'${columnNames[0]}': {column: 'cardholdersEnrolled'},
//         	'${columnNames[1]}': {column: 'cardholdersRegistered'}
			'${columnNames[0]}': {column: '${dataNames[0]}'},
        		'${columnNames[1]}': {column: '${dataNames[1]}'}
            
        }, {xAxis: 'Days', axisLeft: 'Amount'});
    		chart.bind("#${id}-line-chart-container");
    		chart.render();
	});
</script>


<!-- multiline.js -->

<script type="text/javascript">

function makeLineChart(dataset, xName, yObjs, axisLabels) {
    var chartObj = {};
    var color = d3.scaleOrdinal(d3.schemeSet1);
    var parseTime = d3.timeParse("%Y%m%d");
    var formatTime = d3.timeFormat("%Y-%m-%d");
    chartObj.xAxisLabel = axisLabels.xAxis;
    chartObj.yAxisLeftLabel = axisLabels.axisLeft;
    chartObj.yAxisRightLabel = axisLabels.axisRight;
    /*
     yObjsects format:
     {y1:{column:'',name:'name',color:'color'},y2}
     */

    chartObj.data = dataset;
    chartObj.margin = {top: 15, right: 60, bottom: 35, left: 50};
    chartObj.width = 650 - chartObj.margin.left - chartObj.margin.right;
    chartObj.height = 480 - chartObj.margin.top - chartObj.margin.bottom;

    // So we can pass the x and y as strings when creating the function
    chartObj.xFunct = function (d) {  	
        return parseTime(d[xName]);
    };

    // For each yObjs argument, create a yFunction
    function getYFn(column) {
        return function (d) {       	
            return d[column];
        };
    }

    // Object instead of array
    chartObj.yFuncts = [];
    for (var y in yObjs) {
        yObjs[y].name = y;
        yObjs[y].yFunct = getYFn(yObjs[y].column); //Need this  list for the ymax function        
        chartObj.yFuncts.push(yObjs[y].yFunct);
    }
    
/* Replace with above... */
/*  yObjs[0].name = yObjs[0].column;
    yObjs[0].yFunct = getYFn(yObjs[0].column); //Need this  list for the ymax function        
    chartObj.yFuncts.push(yObjs[0].yFunct);
    
    yObjs[1].name = yObjs[1].column;
    yObjs[1].yFunct = getYFn(yObjs[1].column); //Need this  list for the ymax function        
    chartObj.yFuncts.push(yObjs[1].yFunct); */
    

    //Formatter functions for the axes
    chartObj.formatAsNumber = d3.format(".0f");
    chartObj.formatAsDecimal = d3.format(".2f");
    chartObj.formatAsCurrency = d3.format("$.2f");
    chartObj.formatAsFloat = function (d) {
        if (d % 1 !== 0) {
            return d3.format(".2f")(d);
        } else {
            return d3.format(".0f")(d);
        }

    };
    chartObj.formatAsDate = function(d){
    	return formatTime(d);
    }

    chartObj.xFormatter = chartObj.formatAsDate;
    chartObj.yFormatter = chartObj.formatAsFloat;
    chartObj.bisectDay = d3.bisector(chartObj.xFunct).left; //< Can be overridden in definition

    //Create scale functions
//     chartObj.xScale = d3.scaleLinear().range([0, chartObj.width]).domain(d3.extent(chartObj.data, chartObj.xFunct)); //< Can be overridden in definition
	chartObj.xScale = d3.scaleTime()
		.domain(d3.extent(chartObj.data, function(d) {
//		console.log("day: "+d.day+", parse: "+parseTime(d.day));    
			return parseTime(d.day);
		}))
		.range([0, width]);

    // Get the max of every yFunct
    chartObj.max = function (fn) {
        return d3.max(chartObj.data, fn);
    };
    
    var myvar = chartObj.yFuncts.map(chartObj.max);
    console.log('myvar: '+myvar);
    
    var myval0 = d3.max(chartObj.data, yObjs["${columnNames[0]}"].yFunct);
    var myval1 = d3.max(chartObj.data, yObjs["${columnNames[1]}"].yFunct);
    
//	chartObj.yScaleLeft = d3.scaleLinear().range([chartObj.height, 0]).domain([0, d3.max(chartObj.yFuncts.map(chartObj.max))]);
//	chartObj.yScaleRight = d3.scaleLinear().range([chartObj.height, 0]).domain([0, d3.max(chartObj.yFuncts.map(chartObj.max))]);

    chartObj.yScaleLeft = d3.scaleLinear().range([chartObj.height, 0]).domain([0, myval0]);
    chartObj.yScaleRight = d3.scaleLinear().range([chartObj.height, 0]).domain([0, myval1]);
    
    // Create axis
    chartObj.xAxis = d3.axisBottom().scale(chartObj.xScale).tickFormat(chartObj.xFormatter).ticks(5); //< Can be overridden in definition
    chartObj.axisLeft = d3.axisLeft().scale(chartObj.yScaleLeft).tickFormat(chartObj.yFormatter).ticks(5); //< Can be overridden in definition
    chartObj.axisRight = d3.axisRight().scale(chartObj.yScaleRight).tickFormat(chartObj.yFormatter).ticks(5); //< Can be overridden in definition

    // Build line building functions
    function getYScaleFn(yObj) {
        return function (d) {
            return chartObj.yScaleRight(yObjs[yObj].yFunct(d));
        };
    }
    for (var yObj in yObjs) {
        yObjs[yObj].line = d3.line()
   						.curve(d3.curveCardinal)
   						.x(function (d) {
			            	return chartObj.xScale(chartObj.xFunct(d));
				        })
				        .y(getYScaleFn(yObj));
    }
    
    

    function getYScaleFn2(yObj) {
        return function (d) {
            return chartObj.yScaleRight(yObjs[yObj].yFunct(d));
        };
    }
    for (var yObj in yObjs) {
        yObjs[yObj].line = d3.line()
   						.curve(d3.curveCardinal)
   						.x(function (d) {
			            	return chartObj.xScale(chartObj.xFunct(d));
				        })
				        .y(getYScaleFn2(yObj));
    }

    chartObj.svg;

    // Change chart size according to window size
    chartObj.update_svg_size = function () {
        chartObj.width = parseInt(chartObj.chartDiv.style("width"), 10) - (chartObj.margin.left + chartObj.margin.right);
        chartObj.height = parseInt(chartObj.chartDiv.style("height"), 8) - (chartObj.margin.top + chartObj.margin.bottom);

        /* Update the range of the scale with new width/height */
        chartObj.xScale.range([0, chartObj.width]);
        chartObj.yScaleLeft.range([chartObj.height, 0]);
        chartObj.yScaleRight.range([chartObj.height, 0]);

        if (!chartObj.svg) {
            return false;
        }

        /* Else Update the axis with the new scale */
        chartObj.svg.select('.x.axis').attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis);
        chartObj.svg.select('.x.axis .label').attr("x", chartObj.width / 2);
        chartObj.svg.select('.y.axis').call(chartObj.axisLeft);
        chartObj.svg.select('.y.axis').call(chartObj.axisRight);
        chartObj.svg.select('.y.axis .label').attr("x", -chartObj.height / 2);

        /* Force D3 to recalculate and update the line */
        for (var y in yObjs) {
            yObjs[y].path.attr("d", yObjs[y].line);
        }


        d3.selectAll(".focus.line").attr("y2", chartObj.height);

        chartObj.chartDiv.select('svg').attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right)).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom));
        chartObj.chartDiv.select('svg').attr("width", chartObj.width + (chartObj.margin.right + chartObj.margin.left)).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom));
        chartObj.svg.select(".overlay").attr("width", chartObj.width).attr("height", chartObj.height);
        return chartObj;
    };

    chartObj.bind = function (selector) {
        chartObj.mainDiv = d3.select(selector);
        // Add all the divs to make it centered and responsive
        chartObj.mainDiv.append("div").attr("class", "inner-wrapper").append("div").attr("class", "outer-box").append("div").attr("class", "inner-box");
        chartSelector = selector + " .inner-box";
        chartObj.chartDiv = d3.select(chartSelector);
        d3.select(window).on('resize.' + chartSelector, chartObj.update_svg_size);
        chartObj.update_svg_size();
        return chartObj;
    };

    // Render the chart
    chartObj.render = function () {
        //Create SVG element
        chartObj.svg = chartObj.chartDiv
       							.append("svg")
       							.attr("class", "chart-area")
       							.attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right))
       							.attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom))
       							.append("g")
       							.attr("transform", "translate(" + chartObj.margin.left + "," + chartObj.margin.top + ")");

        // Draw Lines
        for (var y in yObjs) {
            yObjs[y].path = chartObj.svg
           								.append("path")
           								.datum(chartObj.data)
           								.attr("class", "line")
           								.attr("d", yObjs[y].line)
           								.style("stroke", color(y))
           								.attr("data-series", y)
           								.on("mouseover", function () {
							                focus.style("display", null);
							            }).on("mouseout", function () {
							                focus.transition().delay(700).style("display", "none");
							            }).on("mousemove", mousemove);
        }


        // Draw Axis
        chartObj.svg.append("g")
        		.attr("class", "x axis")
        		.attr("transform", "translate(0," + chartObj.height + ")")
        		.call(chartObj.xAxis)
        		.append("text")
        		.attr("class", "label")
        		.attr("x", chartObj.width / 2).attr("y", 30)
        		.style("text-anchor", "middle")
        		.text(chartObj.xAxisLabel);

        chartObj.svg.append("g")
	        .attr("class", "y axis left")
	        .call(chartObj.axisLeft)
	        .append("text")
	        .attr("class", "label")
	        .attr("transform", "rotate(-90)")
	        .attr("y", -57)
	        .attr("x", -chartObj.height / 2)
	        .attr("dy", ".71em")
	        .style("text-anchor", "middle")
	        .text(chartObj.yAxisLeftLabel);

        chartObj.svg.append("g")
	        .attr("class", "y axis right")
	        .attr("transform", "translate( " + chartObj.width + ", 0 )")
	        .call(chartObj.axisRight)
	        .append("text")
	        .attr("class", "label")
	        .attr("transform", "rotate(-90)")
	        .attr("y", -57)
	        .attr("x", -chartObj.height / 2)
	        .attr("dy", "0.71em")
	        .style("text-anchor", "middle")
	        .text(chartObj.yAxisRightLabel);
        
        //Draw tooltips
        var focus = chartObj.svg.append("g").attr("class", "focus").style("display", "none");

        for (var y in yObjs) {
            yObjs[y].tooltip = focus.append("g");
            yObjs[y].tooltip.append("circle").attr("r", 5);
            yObjs[y].tooltip.append("rect").attr("x", 8).attr("y", "-5").attr("width", 22).attr("height", '0.75em');
            yObjs[y].tooltip.append("text").attr("x", 9).attr("dy", ".35em");
        }


        // Day label
        focus.append("text").attr("class", "focus day").attr("x", 9).attr("y", 7);

        // Focus line
        focus.append("line").attr("class", "focus line").attr("y1", 0).attr("y2", chartObj.height);

        //Draw legend
        var legend = chartObj.mainDiv.append('div').attr("class", "legend");
        for (var y in yObjs) {
            series = legend.append('div');
            series.append('div').attr("class", "series-marker").style("background-color", color(y));
            series.append('p').text(y);
            yObjs[y].legend = series;
        }

        // Overlay to capture hover
        chartObj.svg.append("rect").attr("class", "overlay").attr("width", chartObj.width).attr("height", chartObj.height).on("mouseover", function () {
            focus.style("display", null);
        }).on("mouseout", function () {
            focus.style("display", "none");
        }).on("mousemove", mousemove);

        return chartObj;

        function mousemove() {
            var x0 = chartObj.xScale.invert(d3.mouse(this)[0]),
                i = chartObj.bisectDay(dataset, x0, 1),
                d0 = chartObj.data[i - 1],
                d1 = chartObj.data[i];
            try {
                var d = x0 - chartObj.xFunct(d0) > chartObj.xFunct(d1) - x0 ? d1 : d0;
            } catch (e) {
                return;
            }
            minY = chartObj.height;
            for (var y in yObjs) {
                yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScaleLeft(yObjs[y].yFunct(d)) + ")");
                yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScaleRight(yObjs[y].yFunct(d)) + ")");
                yObjs[y].tooltip.select("text").text(chartObj.yFormatter(yObjs[y].yFunct(d)));
                minY = Math.min(minY, chartObj.yScaleLeft(yObjs[y].yFunct(d)));
                minY = Math.min(minY, chartObj.yScaleRight(yObjs[y].yFunct(d)));
            }

            focus.select(".focus.line").attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ")").attr("y1", minY);
            focus.select(".focus.day").text("Day: " + chartObj.xFormatter(chartObj.xFunct(d)));

        }

    };
    return chartObj;
}
console.log("6");
</script>
