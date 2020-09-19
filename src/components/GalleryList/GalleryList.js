import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {


    render() {
        console.log('prop:', this.props);
        return (
            <ul>
                { this.props.inventory.map( (item) => <GalleryItem
                    key={ this.props.inventory.indexOf(item) } picture={item}/> ) }
            </ul>
        );
    }
}

export default GalleryList;
