import React from 'react'
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e){
    let playerName = e.target.playerName.value;
    e.preventDefault(); // no page refresh

    if(playerName){
      e.target.playerName.value = '';
      debugger;
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        {this.props.children}
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form--input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}
