import React, { Component } from "react";
import BotCard from "../components/BotCard";


export default function BotCollection (props) {
  //your code here

    const displayBotOptions = props.bots.map(bot => <BotCard key={bot.id} bot={bot} eventHandler={props.eventHandler} />)

    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          {displayBotOptions}
        </div>
      </div>
    );

}
