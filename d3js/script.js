
// // 2. BAR CHART
// var w = 1000;
// var h = 500;
// var padding = 5;
// var dataset = [63, 23, 15, 40, 16, 34, 70, 5, 10, 14,  40, 30, 63, 23, 15, 40, 16, 34, 70, 52, 63, 23, 15, 40, 30, 63, 23, 15, 40, 16, 34, 70, 42, 14, 5, 7, 65, 52, 41];
// var svg = d3.select("body").append("svg")
//     .attr("width", w)
//     .attr("height", h);

// function colorPicker(v) {
//     if (v<=20) {return "purple";}
//     else if (v>20) {return "greenflat";}
// }

// // Coloring the bar chart.
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//         .attr({
//             x: function(d, i) {return i * (w / dataset.length);},
//             y: function(d) {return h - (d*4);},
//             width: w / dataset.length - padding,
//             height: function(d) {return d*4;},
//             fill: function(d) {return colorPicker(d);}
//         });

// // Bar Labeling.
// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text(function(d) { return d; })
//     .attr({
//         "text-anchor": "middle",
//         x: function( d, i ) {return i * (w / dataset.length) + (w / dataset.length - padding) / 2;},
//     y: function(d) { return h - (d*4)+14; },
//     "font-family": "sans-serif",
//     "font-size": 12,
//     "fill": "#999"
// });















// 1. SIMPLIFIED BAR CHART
var w = 100;
var h = 100;
var padding = 2;
var dataset = [ 5, 10, 15, 20, 25, 30, 35];
var svg = d3.select("body").append("svg")
          .attr("width", w)
          .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
        .attr("x", function(d, i) {
            return (i * (w / dataset.length));
        })
        // Flip the bar graph upside down (bars start at the bottom).
        .attr("y", function(d) {
            return h - d;
        })
        .attr("width", w / dataset.length - padding)
        .attr("height", function(d) {
            return d;
        });