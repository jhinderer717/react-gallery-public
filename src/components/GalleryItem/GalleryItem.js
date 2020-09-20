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
        console.log('this.props.pic.id', this.props.pic.id);
        return (
            <div className="GalleryItem">
                <div onClick={this.handleClick}>
                    {
                        this.state.showPic ?
                            <img src={ this.props.pic.path } height="150" alt=""/> :
                            <p>{ this.props.pic.description }</p>
                    }
                </div>
                <button onClick={() => this.props.onLike(this.props.pic.id)}>B for Bop!</button>
                <p>{this.props.pic.likes} people bopped this</p>
            </div>
        );
        // if( !this.state.showDescription ){
        //     return (
        //         <div className="GalleryItem">
        //             <div onClick={this.handleClick}><img src={ this.props.pic.path } height="150" alt=""/></div>
        //             <button onClick={() => this.props.onLike(this.props.pic.id)}>B for Bop!</button>
        //             <p>{this.props.pic.likes} people bopped this</p>
        //         </div>
        //     );
        // }else{
        //     return(
        //         <div className="GalleryItem">
        //             <div onClick={this.handleClick}>{ this.props.pic.description }</div>
        //             <button onClick={() => this.props.onLike(this.props.pic.id)}>B for Bop!</button>
        //             <p>{this.props.pic.likes} people bopped this</p>
        //         </div>
        //     );
        // }
    }
}

export default GalleryItem;
