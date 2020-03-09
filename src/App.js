// create your App component here
import React, { Component } from 'react'

class App extends Component {
 state={
   people : []
 }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res=>res.json())
    .then(space => {
      this.setState({
        people: space.people
      })
    })

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
