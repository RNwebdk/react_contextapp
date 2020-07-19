import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <div>
        <div className='book-list'>
          <ul>
            <li>The way of kings</li>
            <li>The way of the wind</li>
            <li>The final empire</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookList;
