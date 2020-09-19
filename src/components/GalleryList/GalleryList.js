import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {


    render() {
        console.log('prop:', this.props);
        return (
            <div>
                <img src={this.props.path} height="100" width="100"/>
                { this.props.map( (item) =>
                    <GalleryItem
                        key={ item.id }
                        id={ item.id }
                        description={ item.description }
                        likes={ item.likes }
                    />
                )}
            </div>
        );
    }
}

export default GalleryList;
