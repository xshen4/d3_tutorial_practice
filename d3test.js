var data = [4,8,15,16,23,42];

d3.select(".chart") //select chart containiner using class selector
  .selectAll("div") //initiate data join by defining the selection to which we join data
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });