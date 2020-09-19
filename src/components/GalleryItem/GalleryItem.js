import React, { Component } from 'react';
//import logo from '/images/Castle.jpg';

class GalleryItem extends Component {

    // state = {
    //     pic: require()
    // }

    render() {
        //console.log('props:', this.props.picture);
        return (
            <section key={this.props.picture.id}>
                { this.props.picture.id },
                { this.props.picture.path },
                { this.props.picture.description },
                { this.props.picture.likes }
                {/* <img src={logo} /> */}
            </section>
        );
    }
}

export default GalleryItem;
