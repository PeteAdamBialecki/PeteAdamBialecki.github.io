var p = d3.select('body').append(p).text('My Bar Graph')
  
// step 2
var div = d3.select('body').append('div')

// step 3
var svg = div.append('svg')
  .attr('width', 300)
  .attr('height', 300)

// step 4
var rect1 = svg.append('rect')
  .attr('x', 0)
  .attr('y', 10)
  .attr('width', 100)
  .attr('height', 20)

var rect2 = svg.append('rect')
  .attr('x', 0)
  .attr('y', 40)
  .attr('width', 200)
  .attr('height', 20)

var rect3 = svg.append('rect')
  .attr('x', 0)
  .attr('y', 70)
  .attr('width', 300)
  .attr('height', 20)

var data  = [
    {
        y: 10,
        width: 1000
    },
    {
        y: 40,
        width: 200
    },
    {
        y: 70,
        width: 300
    },
];

var rects  = svg. selectAll ('rect')
    .data(data)
    .enter().append('rect')
    .attr('x', 0)
    .attr('height', 20)
    .attr('y', function(d) { return d.y })
    .attr('width', function(d) {return d.width})