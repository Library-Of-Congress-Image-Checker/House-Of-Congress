import React from 'react';
import './ImageList.css';
import FileSaver from 'file-saver';


class ImageList extends React.Component {

componentWillMount() {
  this.props.isLoading(true);
}

  downloadImg =(path) => {

//     FileSaver.saveAs(path,"hello.jpg")
FileSaver.saveAs(path,"hello.jpg");

/*
    const req = new XMLHttpRequest();
 req.responseType = "arraybuffer";

 req.onload = function onload() {
   const type = this.getResponseHeader('Content-Type');
   const jpegData = this.response;
   const blob = new Blob([jpegData], { type });
   const reader = new FileReader();
   reader.onload = e => {
     //document.querySelector('img').setAttribute('src', e.target.result);
     console.log(e.target.result)

     FileSaver.saveAs(e.target.result,"hello.jpg");

   };

   reader.readAsDataURL(blob);
 };

 req.onreadystatechange = () => {
   if(req.readyState === XMLHttpRequest.OPENED) {
     req.setRequestHeader('Accept', 'image/jpeg');
     req.send();
   }
 };

 req.open('get',path);

*/
  }

  render() {

    const image_kv=this.props.image.results;

   let img = image_kv.map( value => {
//return <a onClick={this.downloadImg} download href={value.links.download} key={value.id} className="image-flex-item"> <img className="img-responsive" className="img-effect" src={value.urls.small} alt={value.description} /> </a>;
  console.log(value)
   return <div onClick={() => this.downloadImg(value.urls.regular)} key={value.id} className="image-flex-item"> <img className="img-responsive" className="img-effect" src={value.urls.small} alt={value.description} /> </div>;
    });

    return (
        <div className="image-flex"> {img} </div>
    );

  }

  componentDidMount() {
      this.props.isLoading(false);
  }

}

export default ImageList;
