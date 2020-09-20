import React, { Component } from 'react';
//import logo from '/images/Castle.jpg';

class GalleryItem extends Component {


    render() {
        console.log('props from GalleryItem:', this.props);
        return (
            <div className="GalleryItem">
                <img src={ this.props.pic.path } height="150"/>
                <button>B for Bop!</button>
            </div>
        );
    }
}

export default GalleryItem;
