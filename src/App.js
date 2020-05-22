import React, { Component } from 'react'

export class App extends Component {

    constructor() {
        super()
        this.state = {
            peopleInSpace: [],
        }
    }

    // async componentDidMount() {
    //     const data = await fetch('http://api.open-notify.org/astros.json');
    //     const space = await data.json();
    //     (async () => {
    //         this.setState({
    //             peopleInSpace: space.people,
    //         })
    //     })();


    // }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(people => people.name)}
            </div>
        )
    }
}

export default App
