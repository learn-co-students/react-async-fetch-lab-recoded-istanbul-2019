// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
      peopleCurrentlyInSpace: []
    }
  
  
    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            peopleCurrentlyInSpace: data.people
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
  
  


