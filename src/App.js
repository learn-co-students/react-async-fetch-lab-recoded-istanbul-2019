// create your App component here
import React from "react"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      people:this.props.people
    }
  }
  render(){
    return(
        <div>
            {this.state.people}
        </div>
      )
  }
  
  componentDidMount(){
    fetch(" http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(json=> this.setState({
        people:json.people
      }))
  }
}
