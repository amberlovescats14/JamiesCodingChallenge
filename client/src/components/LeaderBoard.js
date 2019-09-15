import React, { Component } from 'react'
import Form from './Form'
import One from './One'





export default class LeaderBoard extends Component {
  state = {
    leaders : this.props.leaderBoard,
    topLeaders: [],
    show: false
  }
  componentDidMount() {
    this.filtering()
  }
  filtering = () => {
    let sort = this.props.leaderBoard.sort((a,b )=> a.RSS - b.RSS)
    let filter = sort.filter((s, i) => i < 10)
    this.setState({ topLeaders: filter  });

  }
  handleEdit = (e) => {
    console.log(e.target.id);
    this.setState({ [e.target.id] : true  });

  }

  editting = (name, rss, id ) => {
  }


  render() {
    return (
      <div>
        {this.state.topLeaders.map((l,i)=> {
          let ident = {i}
          return (
            <div key={i} id={i}>
            {l.name}
            {l.RSS}
            <button id={i} onClick={(e)=> this.handleEdit(e)}>EDIT</button>
            <button>DELTE</button>
            {this.state[`${i}`] ? <Form name={l.name} rss={l.RSS}/> : ''}
            </div> )
  })}
      </div>
    )
  }
}
