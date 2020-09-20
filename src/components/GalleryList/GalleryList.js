import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {


    render() {
        console.log('GalleryList:', this.props.pictures);
        return (
            <div>
                { this.props.pictures.map((item) => 
                    <GalleryItem
                    key={this.props.pictures.id}
                    pic={item}
                    />
                )}
            </div>
        );
    }
}

export default GalleryList;
