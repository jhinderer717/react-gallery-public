import React, { Component } from 'react';


class GalleryItem extends Component {


    render() {
        //console.log('props:', this.props.picture);
        return (
            <li key={this.props.picture.id}> { this.props.picture.id }, { this.props.picture.path },
                { this.props.picture.description }, { this.props.picture.likes }</li>
        );
    }
}

export default GalleryItem;
