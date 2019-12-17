// Select the data
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append a table to your web page and add new rows of data for each UFO sighting.
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Monitor change in #datetime field
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
  // Capture the input date
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  // Remove existing rows of table
  d3.selectAll("tr").remove();

  // Filter the data to find the rows that match the user input date
//   var filteredData = d3.selectAll("tr").filter(function(d) { return d.date  === inputValue });
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);
  
  // Append the filtered rows of data to the table body
  filteredData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });

});
});

