const containerDOM = document.getElementById('container')
const create = React.createElement

let styles = {

}

class Adjuster extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class='adjuster'>
                Hello
            </div>
        )
    }
}

class Display extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='display'>
                <h4 id='timer-label'>{this.props.mode}</h4>
                <h2 id='time-left'>{this.props.mins}:{this.props.secs}</h2>
            </div>
        )
    }
}


class App extends React.Component{
    constructor(props){
        super(props)
    }

    state={
        mode: 'Session',
        break_length: 5,
        session_length: 25,
        duration: 25*60,
        minutes: '25',
        seconds: '00'
    }

    startTimer = (duration) => {
        var timer = duration, minutes, seconds;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        this.setState({
            minutes: minutes,
            seconds: seconds
        })

        if (--timer < 0) {
            timer = duration;
        }
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            this.setState({
                minutes: minutes,
                seconds: seconds
            })
    
            if (--timer < 0) {
                timer = duration;
            }
        }.bind(this), 1000);
    }


    render(){
        return(
            <div id='app'>
                <div id='first'>
                    <Display mode={this.state.mode} mins={this.state.minutes} secs={this.state.seconds}/>
                </div>
                <div id='second'>
                    <a 
                        id='start_stop'
                        class="large waves-effect btn-floating"
                        onClick={() => {
                            this.startTimer(this.state.duration)
                        }}
                    ><i class="material-icons left">play_arrow</i></a>
                    <a id='reset' class="large waves-effect btn-floating"><i class="material-icons left">restore</i></a>
                </div>
                <div id='third'>
                    <Adjuster length={this.state.session_length}/>
                    <Adjuster length={this.state.break_length}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)