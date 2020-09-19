import React, { Component } from 'react';

class GalleryList extends Component {


    render() {
        console.log('props:', this.props);
        let imageSrc = this.props.path;
        return (
            //<li key={this.props.id}>
                <img key={this.props.id} src={imageSrc}/>
            //</li>
        );
    }
}

export default GalleryList;
