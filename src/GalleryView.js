import React from 'react';
import galleryStore from './stores/GalleryStore'
import { observer } from 'mobx-react';
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { fetchImages } from './actions/galleryAction'


class GalleryView extends React.Component {
    componentWillMount() {
        this.props.fetchImages('mountains')
    }
    render() {
        const { images } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <Form fetchImages={this.props.fetchImages} />
                    <div className="gallery-list row">
                        {
                            images.map(image => {
                                return (
                                    <div className="col-md-4">
                                        <img key={image.id} src={image.links.download} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        term: state.term,
        images: state.images,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: term => {
            dispatch(fetchImages(term));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryView);