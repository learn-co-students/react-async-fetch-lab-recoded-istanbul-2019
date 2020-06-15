import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'failed',
            number: '',
            people: []
        }
    }
    componentDidMount() {
        this.fetchSample();
    }
    fetchSample = async () => {
        const response = await fetch('http://api.open-notify.org/astros.json');
        const { message, number, people } = await response.json();
        return this.setState({
            message: message,
            number: number,
            people: people
        })
    }
    render() {
        const { message, number, people } = this.state;
        return (
            <div>
                {people.map((person, index) =>
                    <span key={person + index}>Speciality: {person.craft} and Name: {person.name} <br /></span>)}

            </div>
        )
    }
}

export default App;