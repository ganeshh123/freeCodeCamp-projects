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
                <a 
                    id={this.props.type+'-decrement'}
                    class="large waves-effect btn-floating"
                    onClick={() => {
                        this.props.adjust(this.props.type+'_length', -1)
                    }}
                >
                    <i class="material-icons left">keyboard_arrow_down</i>
                </a>
                <div class='adjuster-info'>
                    <h6 id={this.props.type+'-label'}>{this.props.type} length</h6>
                    <h5 id={this.props.type+'-length'}>{this.props.length}</h5>
                </div>
                <a 
                    id={this.props.type+'-increment'}
                    class="large waves-effect btn-floating"
                    onClick={() => {
                        this.props.adjust(this.props.type+'_length', 1)
                    }}
                >
                    <i class="material-icons left">keyboard_arrow_up</i>
                </a>
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
        duration: 60*60,
        minutes: '25',
        seconds: '00'
    }

    startTimer = (duration) => {
        var timer = duration, minutes, seconds;
        let interval;

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

        interval = setInterval(function () {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            this.setState({
                minutes: minutes,
                seconds: seconds
            })
    
            if (--timer < 0) {
                clearInterval(interval)
            }
        }.bind(this), 1000);
    }

    adjust = (type, value) => {
        if(this.state[type] === 0 && value < 0){
            return
        }

        this.setState({
            [type]: this.state[type] + value
        })
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
                    <Adjuster type='session' length={this.state.session_length} adjust={this.adjust}/>
                    <Adjuster type='break' length={this.state.break_length} adjust={this.adjust}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)