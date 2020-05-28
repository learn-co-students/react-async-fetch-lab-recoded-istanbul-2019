// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        craft: '',
        name: ''
    }

    

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.people)
 
            })
        
            
        }
    

    // data.people.map((curr) => {
    //     console.log(curr.craft)
    //     this.setState({
    //         craft: curr.craft,
    //         name: curr.name
    //     })


    render() {
        return (
            <div>
                {/* <h1>{this.state.craft}</h1>
                <h1>{this.state.name}</h1> */}
                bbbb
            </div>
        )
    }
}

export default App;
