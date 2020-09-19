import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {

  state = {
    pictures: []
  }

  componentDidMount(){
    console.log('mounted');
    this.getPics();
  }

  getPics = () => {
    axios.get(`/gallery`)
    .then(response => {
      console.log('response.data', response.data);

      this.setState({
        pictures: response.data
      })
      console.log('state...', this.state);
    }).catch(err =>{
      console.log(err);
    }); // end axios
  } // end getPicks


  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/Night_Sky.jpg" width="207.36" height="311.04" alt=""/>
        <GalleryList inventory={ this.state.pictures }/>
      </div>
    );
  }
}

export default App;
