import React, { Component } from "react";
import BotCard from "../components/BotCard";


class YourBotArmy extends Component {
  //your bot army code here...

  state = {
    bots: []
  }

  componentDidMount() {

    this.setState({
      bots: this.props.bots
    })
  }

  displayYourBots = (props) => {
    const displayYourBots = props.bots.map(bot => <BotCard key={bot.id} bot={bot} eventHandler={props.eventHandler} />)

    return(
      displayYourBots
    )
  }


  render() {

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.displayYourBots(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
