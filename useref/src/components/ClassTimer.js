import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        console.log('const')
        super(props)
    
        this.state = {
             timer: 0
        }
    }

    componentDidMount() {
        console.log('did')
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        },1000)
    }
    
    componentWillUnmount() {
        console.log('will')
        clearInterval(this.interval)
    }

    render() {
        console.log('render')
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Reset</button>
            </div>
        )
    }
}

export default ClassTimer
