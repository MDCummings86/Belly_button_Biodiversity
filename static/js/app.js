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
// Create a function to create the bar chart
 function createBarChart(sample) {

    // Retrieve all sample data
    let sampleInfo = data.samples;
    
    // Filter based on the value of the sample
    let value = sampleInfo.filter(result => result.id == sample);

    // Grab the first index from the array
    let valueData = value[0];
     
         // Use D3 to reassign the url as data
         d3.json(url).then((data) => {
    
            // Declare the otu_ids, lables, and sample values
            let otu_ids = valueData.otu_ids;
            let otu_labels = valueData.otu_labels;
            let sample_values = valueData.sample_values;
    
            // Log the data to the inspector console
            console.log(otu_ids,otu_labels,sample_values);
    
            // Declare top ten items to display in descending order
            let yaxis = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
            let xaxis = sample_values.slice(0,10).reverse();
            let labels = otu_labels.slice(0,10).reverse();
            
            // Set up the trace for the bar chart with horizontal orientation
            let trace = {
                x: xaxis,
                y: yaxis,
                labels: labels,
                orientation: "h",
                type: "bar",
            };
    
            // Setup the layout
            let layout = {
                title: "Top 10 OTUs in this Bellybutton"
            };
    
            // Call Plotly to plot the bar chart
            Plotly.newPlot("bar", [trace], layout)
        });
    };
    
    // Function that builds the bubble chart
    function createBubbleChart(sample) {
    
        // Use D3 to retrieve all of the data
        d3.json(url).then((data) => {
            
            // Retrieve all sample data
            let sampleInfo = data.samples;
    
            // Filter based on the value of the sample
            let value = sampleInfo.filter(result => result.id == sample);
    
            // Grab the first index from the array
            let valueData = value[0];
    
            // Get otu_ids, otu_lables, and sample_values from the json data
            let otu_ids = valueData.otu_ids;
            let otu_labels = valueData.otu_labels;
            let sample_values = valueData.sample_values;
    
            // Log the data in the inspector console
            console.log(otu_ids,otu_labels,sample_values);
            
            // Set up the trace for bubble chart
            let trace1 = {
                x: otu_ids,
                y: sample_values,
                labels: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }
            };
    
            // Set up the layout
            let layout = {
                title: "Bacteria Per Sample",
                hovermode: "closest",
                xaxis: {title: "OTU ID"},
            };
    
            // Call Plotly to plot the bubble chart
            Plotly.newPlot("bubble", [trace1], layout)
        });
    };
    
    // Call the initialize function
    init()};
