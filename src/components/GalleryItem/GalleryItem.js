import React, { Component } from 'react';
//import logo from '/images/Castle.jpg';

class GalleryItem extends Component {


    render() {
        console.log('props from GalleryItem:', this.props);
        return (
            <div>
                <img src={ this.props.pic.path }/>
            </div>
        );
    }
}

export default GalleryItem;
