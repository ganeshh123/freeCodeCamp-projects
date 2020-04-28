const containerDOM = document.getElementById('container')
const create = React.createElement

let styles = {

}

let placeholder = 
`
#### Write markdown in the box on the left to preview!
`

class TextEditor extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <textarea id='editor' onChange={this.props.editText}>
                {placeholder}
            </textarea>
        )
    }
}


class Preview extends React.Component{

    constructor(props){
        super(props)
    }


    render() {
        return(
            <div id='preview' dangerouslySetInnerHTML={{__html: this.props.content}}>
                
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
    }

    parseOptions = {
        breaks: true
    }

    state={
        previewContent: marked(placeholder, this.parseOptions)
    }

    editText = (event) => {
        this.setState({
            previewContent: marked(event.target.value, this.parseOptions)
        })
    }


    render(){
        return(
            <div id='app'>
                <div id='left'>
                    <TextEditor editText={this.editText}/>
                </div>
                <div id='right'>
                    <Preview content={this.state.previewContent}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)