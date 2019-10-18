import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    // console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} handleNoteViewer={this.props.handleNoteViewer}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
