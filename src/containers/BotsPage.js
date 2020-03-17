import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    yourBots: []
  }

  componentDidMount() {

    fetch(`http://localhost:6001/bots`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(allbots => {
      this.setState({
        bots: [...allbots]
      })
    })

  }

  eventHandler = (props) => {
    console.log(props.bot.id)
    const newBot = props.bot
    console.log(newBot)
    this.setState({
      yourBots: this.state.yourBots.concat(newBot)
    })
  }

  removeFromArmy = (props) => {
    console.log("hi")
  }


  render() {
    return <div>
      <YourBotArmy bots={this.state.yourBots} eventHandler={this.removeFromArmy}/>
      <BotCollection bots={this.state.bots} eventHandler={this.eventHandler}/>
      </div>;
  }
}

export default BotsPage;
