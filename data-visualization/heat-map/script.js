let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
let req = new XMLHttpRequest()

let baseTemp
let values =[]

let xScale
let yScale

let xAxis
let yAxis

let width = 1200
let height = 600
let padding = 40

let svg = d3.select('svg')

let generateScales = () => {
    
    xScale = d3.scaleTime()
                .range([padding, width - padding])


}

let drawCanvas = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

let drawCells = () => {

    
}

let generateAxes = () => {

    let xAxis = d3.axisBottom(xScale)
    console.log(xAxis)

    svg.append('g')
        .call(xAxis)
        .attr('id','x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) + ')')
    
}


req.open('GET', url, true)
req.onload = () => {
    let data = JSON.parse(req.responseText)
    baseTemp = data.baseTemperature
    values = data.monthlyVariance
    console.log(baseTemp)
    console.log(values)
    drawCanvas()
    generateScales()
    drawCells()
    generateAxes()
}
req.send()

