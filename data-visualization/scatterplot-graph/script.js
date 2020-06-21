let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
let req = new XMLHttpRequest()

let values =[]



let xAxisScale
let yAxisScale
let xAxis
let yAxis

let width = 800
let height = 600
let padding = 40

let svg = d3.select('svg')

let generateScales = () => {
    
    xAxisScale = d3.scaleLinear()
                        .domain([d3.min(values, (item) => {
                            return item['Year']
                        }), d3.max(values, (item) => {
                            return item['Year']
                        })])
                        .range([padding, width-padding])
}

let drawCanvas = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

let drawBars = () => {

    
}

let generateAxes = () => {

    xAxis = d3.axisBottom(xAxisScale)
                .tickFormat(d3.format("d"))


    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) +')')
}


req.open('GET', url, true)
req.onload = () => {
    values = JSON.parse(req.responseText)
    console.log(values)
    drawCanvas()
    generateScales()
    drawCanvas()
    generateAxes()
}
req.send()

