import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
        <div>
            <form>
                <h2>Please fill out the form below</h2>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    id='id-name' 
                    type='text'
                    />
                </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select id='id-category' name='category'>
                    <option value='website'>Website Issue</option>
                    <option value='order'>Order Issue</option>
                    <option value='general'>General Inquiry</option>
                </select>
            </div>
            <input type='submit' value='Submit'/>
            </form>
        </div>
        )
    }
    }

export default ControlledForm