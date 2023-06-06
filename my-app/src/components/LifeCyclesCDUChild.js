import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('constructor child called');
        super(props)
        
        this.state = {
            greeting: 'Child Hello!',
        }
    }
    updateGreeting = () => {
        console.log('update greeting called child');
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Child Hello!' ? 'Child Goodbye' : 'Child Hello!'
            }
        })
    }
    componentDidUpdate(){
        console.log('Child component updated!');
    }
    render() {
        console.log('render child updated');
        return (
        <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.updateGreeting}>Update Greeting</button>
        </div>
        )
    }
}

export default LifeCyclesCDUChild