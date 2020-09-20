import React, { Component } from 'react';
//import logo from '/images/Castle.jpg';

class GalleryItem extends Component {

    // bop = () => {
    //     console.log('bopped');
    //     this.props.pic.likes ++;
    //     console.log('likes:', this.props.pic.likes);
    //     this.render();
    // }

    render() {
        console.log('props from GalleryItem:', this.props);
        console.log('this.props.pic.id', this.props.pic.id);
        return (
            <div className="GalleryItem">
                <img src={ this.props.pic.path } height="150"/>
                <button onClick={() => this.props.onLike(this.props.pic.id)}>B for Bop!</button>
                <p className="likes">{this.props.pic.likes} people bopped this</p>
            </div>
        );
    }
}

export default GalleryItem;
