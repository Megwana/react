// 'rfce' --> creates and exports functional component
import React from 'react'
function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// 'rafce' --> creates  and exports arrow function component 
import React from 'react'
const ES7Snippets2 = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets2

// 'rce' --> Creates and exports class component
import React, { Component } from 'react'
export class ES7Snippets3 extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets3

// 'rconst' --> creates constructor
constructor(props) {
  super(props)

  this.state = {
     first
  }
}


// 'clg' --> logs to console
console.log(first)

// 'clo' - log and object and its name as a String. 
console.log('first', first)