// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }



    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then((result) => this.setState({ peopleInSpace: result.people }))

    }
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((people) => { people.name })}
            </div>
        )
    }

}

export default App