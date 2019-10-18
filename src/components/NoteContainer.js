import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    noteArr: [],
    noteItem: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    .then(noteObj => this.setState({
      noteArr: noteObj
    }))
  }

  handleNoteViewer = (note) => {
    console.log("hi from handle note!", note)
    this.setState({
      noteItem: note
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.noteArr} handleNoteViewer={this.handleNoteViewer}/>
          <Content note={this.state.noteItem}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
