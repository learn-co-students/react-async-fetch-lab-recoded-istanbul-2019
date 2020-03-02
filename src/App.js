// create your App component here
import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json).then(data => {
      console.log(`hello data: ${data}`)
      this.setState({
        people: data.people
      })
    })
  }
  render() {
    console.log(this.state.people)
    return (
      <div>
        {this.state.people.map(person => <div>Person: {`${person.name} (${person.craft})`}</div>)}
      </div>)
  }
}