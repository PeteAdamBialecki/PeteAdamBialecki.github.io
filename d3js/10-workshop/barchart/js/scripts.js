d3.csv("ChiCrime.csv", ready)

// Ready Function
function ready(error, data) {

    if (error) return console.warn(error);

    data.forEach(function (d) {
        d.count = +d.count; //making sure count reads as a number
        d.year = +d.year; //making sure year reads in as a number
        d.violation = d['Primary Type']; //changing to an easier to use variable name
    });

    // filtering for 2018 data
    var data2018 = data.filter(function (d) { return d.year == 2018 })

    //Define Margins and svg here:
    var width = 720;
    var height = 400;

    var svg = d3.select("body").append("svg") //grabs body and appends an svg
        .attr("width", width)
        .attr("height", height);

    //Define xScale and yScale here:
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data2018, function (d) { return d.count; })])
        .range([height, 0]);

    var xScale = d3.scaleBand()
        .domain(data2018.map(function (d) { return d.violation; }))
        .rangeRound([0, width]);
        
    // Define xAxis and yAxis generators here:  
    var xAxis = d3.axisBottom(xScale);

    var xAxisGroup = svg.append("g")
        .attr("class", "x axis") //assigning classes `x` and `axis`
        .call(xAxis);

    var yAxis = d3.axisLeft(yScale);

    var yAxisGroup = svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Append axes here: 


    // Create bars here:

}