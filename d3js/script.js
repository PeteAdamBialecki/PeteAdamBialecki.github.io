var w = 300;
var h = 100;
var padding = 2;
var data = [5, 10, 14, 52, 63, 23, 15, 40, 30];
var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);










// var w = 100;
// var h = 100;
// var padding = 2;
// var dataset = [ 5, 10, 15, 20, 25, 30, 35];
// var svg = d3.select("body").append("svg")
//           .attr("width", w)
//           .attr("height", h);

// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//         .attr("x", function(d, i) {
//             return (i * (w / dataset.length));
//         })
//         // Flip the bar graph upside down (bars start at the bottom).
//         .attr("y", function(d) {
//             return h - d;
//         })
//         .attr("width", w / dataset.length - padding)
//         .attr("height", function(d) {
//             return d;
//         });