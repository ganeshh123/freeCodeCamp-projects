let movieDataUrl = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json'

let movieData = []

let canvas = d3.select('#canvas')

let drawTreeMap = () => {

    let hierarchy = d3.hierarchy(movieData, 
            (node) => {
                return node['children']
            }
        ).sum(
            (node) => {
                return node['value']
            }
        ).sort(
            (node1, node2) => {
                return node2['value'] - node1['value']
            } 
        )

    d3.treemap()
        .size([1000,600])
        (hierarchy)
    
    let movieTiles = hierarchy.leaves()
    console.log(movieTiles)

    canvas.selectAll('rect')
            .data(movieTiles)
            .enter()
            .append('rect')
            .attr('class', 'tile')
            .attr('x', (movie) => {
                return movie['x0']
            })
            .attr('y', (movie) => {
                return movie['y0']
            })
}

d3.json(movieDataUrl).then(
    (data, error) => {
        if(error){
            console.log(error)
        } else {
            movieData = data
            console.log(movieData)
            drawTreeMap()
        }
    }
)