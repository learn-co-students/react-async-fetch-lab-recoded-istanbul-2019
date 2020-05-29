// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state={
        SpacePeople: []
    }

    render() {
        return (
            <div>
                {this.state.SpacePeople}
            </div>
        )
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                SpacePeople : data.people
            })
        })
    }
}
