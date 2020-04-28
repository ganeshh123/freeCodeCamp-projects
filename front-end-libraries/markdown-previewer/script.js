const containerDOM = document.getElementById('container')
const create = React.createElement

let styles = {

}

let placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

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

    state={
        previewContent: ''
    }

    parseOptions = {
        breaks: true
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