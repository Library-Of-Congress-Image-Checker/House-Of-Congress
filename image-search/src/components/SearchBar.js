import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render(){
    return(
      <div>
        <form className="flexContainer">
          <label><h2>Image Search: </h2></label>
          <input className="inputStyle" type="text" />
        </form>
      </div>
    )
  }
}
export default SearchBar;
