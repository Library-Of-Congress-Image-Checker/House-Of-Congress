import React from 'react';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';
import cookie from 'react-cookies';
import axios from 'axios';
import scrollToComponent from 'react-scroll-to-component';
import './body.css';

class App extends React.Component {

state = { Image: [], isLoading: false};

  onSearchSubmit=async term => {

    var url = "https://api.unsplash.com/search/photos/?client_id=f32d02ca2ffc63e6c39b8c66bfec0bd3cd6841995c0e1e695d1478f1babeb730";
    url += "&query=" + term;
    let response = undefined;

    if(cookie.load(term) == url){
      console.log("cookie found");
      console.log(cookie.load(term));
      response = await axios.get(cookie.load(term));
    }else {
      console.log("no cookie");
      cookie.save(term, url);
      response = await axios.get("https://api.unsplash.com/search/photos/?client_id=f32d02ca2ffc63e6c39b8c66bfec0bd3cd6841995c0e1e695d1478f1babeb730",
       {
           params: {
           query: term,
           per_page: 30,
       },
         headers: { Authorization: 'Client-ID f32d02ca2ffc63e6c39b8c66bfec0bd3cd6841995c0e1e695d1478f1babeb730'}
     });
   }

    this.setState({Image: response.data})
    scrollToComponent(this.Indigo, { offset: 0, align: 'top', duration: 50, ease:'inExpo'})

  }

  isLoading=(value) => {
    this.setState({ isLoading: value})
  }

conditionalRendering = ()=> {
    if(this.state.Image.length!==0)
        return (
          <>
                <section className='indigo' ref={(section) => { this.Indigo = section; }}> </section>
                <ImageList image={this.state.Image} isLoading={this.isLoading} />
         </>
        )
}


isLoadingCondition() {

  if(this.state.isLoading) {
  return (
    <div className="center-block">
    &nbsp;&nbsp;
      <div className="spinner-border text-light" style={{width: "3rem",height:"3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    <p style={{color:"white"}}> Loading... </p>
  </div>
  )
  }
}

  render() {

      console.log(this.state.isLoading)
      console.log(cookie.load('car'));

      return (
        <>
        <div className="main-body">
        {this.isLoadingCondition()}
          <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        </div>
        {this.conditionalRendering()}
        </>
      );
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
}

export default App;
