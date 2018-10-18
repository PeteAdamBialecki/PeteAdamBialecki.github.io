var svg = d3.select("svg");

var data = tributary.pics.data.children;
console.log(data);

var scale = d3.scale.linear()
  .domain([20, 30])
  .range([10, 300])

var brush = d3.svg.brush()
brush.x(scale)
brush.extent([22, 28])

var g = svg.append("g")
brush(g)
g.attr("transform", "translate(50, 100)")
g.selectAll("rect").attr("height", 30)
g.selectAll(".background")
  .style({fill: "#4B9E9E", visibility: "visible"})
g.selectAll(".extent")
  .style({fill: "#78C5C5", visibility: "visible"})
g.selectAll(".resize rect")
  .style({fill: "#276C86", visibility: "visible"})
