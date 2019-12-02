import React from 'react';

 export default class ImageCard extends React.Component {

constructor(props) {

  super(props);
  this.imageRef= React.createRef();

  this.state ={spans: 0}
}

  render() {

      return (
            <img
                alt={this.props.image.cover_photo.description}
                src={this.props.image.cover_photo.urls.small}
                ref={this.imageRef}
            />


      )

  }

  componentDidMount()
   {
      this.imageRef.current.addEventListener('load',this.setSpan);
   }

   setSpan=() => {

     const height = this.imageRef.current.clientHeight;
     const spans = Math.ceil(height/10);
     this.setState({spans: spans});
     console.log(this.imageRef.current.clientHeight);
   }

}
