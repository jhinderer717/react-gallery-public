import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {

  state = {
    pictures: []
  }

  componentDidMount(){
    this.getPics();
  }

  getPics = () => {
    axios.get(`/gallery`)
    .then(response => {
      console.log('response:', response);
      console.log('response.data', response.data);

      this.setState({
        pictures: response.data
      })
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
        <img src="images/goat_small.jpg"/>
        <img src="images/Night_Sky.jpg" width="100" height="100"/>
        {/* <ul> */}
          {this.state.pictures.map(picture =>
            <GalleryList
              key={picture.id}
              pics={picture}
            />
          )}
        {/* </ul> */}
      </div>
    );
  }
}

export default App;
