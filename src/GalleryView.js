import React from "react";
import galleryStore from "./stores/GalleryStore";
import { observer } from "mobx-react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";

@observer
class GalleryView extends React.Component {
  componentWillMount() {
    galleryStore.fetchImages("mountains");
  }

  render() {
    const { tern, status, images } = galleryStore;
    console.log(images);
    return (
      <div className="container">
        <Form galleryStore={galleryStore} />
        <div className="gallery-list">
          {images.map(image => {
            return (
              <div className="gallery-item">
                <img key={image.id} src={image.links.download} alt={image.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GalleryView;
