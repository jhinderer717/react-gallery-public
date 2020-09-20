import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {

    render() {
        console.log('GalleryList:', this.props.pictures);
        return (
            <div className="galleryList">
                { this.props.pictures.map((item) => 
                    <GalleryItem
                        key={this.props.pictures.indexOf(item)}
                        pic={item}
                        onLike={this.props.onLike}
                    />
                )}
            </div>
        );
    }
}

export default GalleryList;
