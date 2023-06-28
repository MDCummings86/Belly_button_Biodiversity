// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Establish the initialize function
function init() {

    // // grab the container for the dropdown
    // let dropdownMenu = d3.select("#selDataset");

    // // grab samples for the dropdown menu
    // d3.json(url).then((data) => {
        
    //     // Declare a object for the sample names
    //     let names = data.names;

    //     // Add  samples to dropdown menu
    //     names.forEach((id) => {
    
    // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

    // Function called by DOM changes
    function getData() {
        let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the OTU data
    let data = [];


            // Iterate over the array using a for loop
            for (let i = 0; i < names.length; i++) {
                let name = names[i];
                console.log(name);
                dropdownMenu.append("option")
                .text(name)
                .property("value", id);
            };

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Create the first plots
        createBarChart(sample_one);
        createBubbleChart(sample_one);
    });
    });

