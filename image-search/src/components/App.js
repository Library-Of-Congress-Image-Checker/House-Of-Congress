import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';
import CookieHandler from './CookieHandler';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    var url = 'https://api.unsplash.com/search/photos';

    const response = await
    axios.get(url, {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID 2c562dc584dd29501bd968cf34f7c11d6d9197fcaf1a278ab2c3a75b6e4b506e'
      }
    })

    this.setState({ images: response.data.results})
  }
  render() {
    return (
        <div>
          <SearchBar userSubmit={this.onSearchSubmit}/>
          <span>Found: {this.state.images.length} images</span>
          <ImageList foundImages={this.state.images}/>
        </div>
    )
  }
}
export default App;
