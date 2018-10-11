// Go to this working Tributary.io working IDE.  This directory is just meant to keep the code safe as a backup.

var svg = d3.select("svg");

var data = tributary.pics.data.children;
console.log(data);

var g = svg.append("g")
.attr("transform", "translate(0, -10)")

var circles = g.selectAll("circles")
.data(data)

console.log(circles)

circles.enter()
	.append("circle")
	.attr({
      cx: function(d,i) {return 25 + i * 15},
      cy: function(d, i) {return d.data.score},
		r:5
})
