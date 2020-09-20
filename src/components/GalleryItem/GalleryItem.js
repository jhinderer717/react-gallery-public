import React, { Component } from 'react';
//import logo from '/images/Castle.jpg';

class GalleryItem extends Component {

    state = {
        showPic: true
    }

    handleClick = () => {
        console.log('in handleClick');
        this.setState({
            showPic: !this.state.showPic
        });
    } // end handleClick

    render() {
        console.log('props from GalleryItem:', this.props);
        return (
            <div className="GalleryItem">
                    {
                        this.state.showPic ?
                            <div onClick={this.handleClick} className="classPic">
                                <img src={ this.props.pic.path } height="150" alt=""/>
                            </div> :
                            <div onClick={this.handleClick} className="classDesc">
                                <p>{ this.props.pic.description }</p>
                            </div>
                    }
                <button onClick={() => this.props.onLike(this.props.pic.id)}>B for Bop!</button>
                <p>{this.props.pic.likes} people bopped this</p>
            </div>
        );
    }
}

export default GalleryItem;
