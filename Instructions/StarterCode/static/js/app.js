const sample_file = "samples.json"


const dataPromise = d3.json(sample_file);
console.log("Data Promise: ", dataPromise);

// d3.json(sample_file)