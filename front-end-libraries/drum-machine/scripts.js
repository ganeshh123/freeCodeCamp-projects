'use strict';
const appDom = document.getElementById('app')
const create = React.createElement;

let soundSet = [
    {
        sound: 'Heater 1',
        key: 'Q',
        keyCode: 81,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        sound: 'Heater 2',
        key: 'W',
        keyCode: 87,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        sound: 'Heater 3',
        key: 'E',
        keyCode: 69,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        sound: 'Heater 4',
        key: 'A',
        keyCode: 65,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        sound: 'Clap',
        key: 'S',
        keyCode: 83,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        sound: 'Open HH',
        key: 'D',
        keyCode: 68,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        sound: 'Kick n Hat',
        key: 'Z',
        keyCode: 90,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        sound: 'Kick',
        key: 'X',
        keyCode: 88,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        sound: 'Closed HH',
        key: 'C',
        keyCode: 67,
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
]

let styles = {
    app: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: '#EAEBEB',
        padding: 10,
        borderRadius: 5,
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
    },
    first: {
        flexDirection: 'row',
    },
    display: {
        textAlign: 'center',
        color: '#36393A',
        textShadow: '0px 3px 15px rgba(0,0,0,0.2)'
    },
    second: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    drumPad: {
        color: '#EAEBEB',
        backgroundColor: '#36393A',
        cursor: "pointer",
        borderRadius: "5px",
        fontSize: 32,
        width: 'auto',
        width: '20%',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
    },
}

class DrumPad extends React.Component {

    constructor(props) {
        super(props)
        this.sound = this.props.sound
    }

    playSound = () => {
        this.props.set(this.sound)
        let audio = document.getElementById(this.sound.key)
        audio.play()
    }
    
    render() {

        return (
            <div 
                class='drum-pad'
                id={this.sound.sound}
                onClick={this.playSound}
                style={styles.drumPad}
            >
                <audio src={this.sound.source} class='clip' id={this.sound.key}/>
                {this.sound.key}   
            </div>
        )
    }
}

class Display extends React.Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        
        return (
            <h1 id='display' style={styles.display} >
                {this.props.sound.sound}
            </h1>
        )
    }
}


class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentSound: soundSet[0]
        }

        this.setSound = this.setSound.bind(this)

    }

    setSound = (sound) => {
        this.setState({currentSound: sound})
    }

    render() {

      return(
        <div id='drum-machine' style={styles.app}>
            <div style={styles.first}>
                <Display sound={this.state.currentSound} />
            </div>
            <div style={styles.second}>
                {soundSet.map((sound) => {
                    return <DrumPad sound={sound} set={this.setSound} />
                })}
            </div>
        </div>
      );
    }
}

ReactDOM.render(create(App), appDom)

document.addEventListener('keypress' , (event) => {
    if(document.getElementById(event.key.toUpperCase()) != null){
        document.getElementById(event.key.toUpperCase()).play()
        document.getElementById('display')
        
        soundSet.forEach((sound) => {
            if(sound.key === event.key.toUpperCase()){
                document.getElementById('display').innerText = sound.sound
            }
        })
    }
    
} ) ;
  
