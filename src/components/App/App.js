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
      console.log('state in App...', this.state);
    }).catch(err =>{
      console.log(err);
    }); // end axios
  } // end getPicks

  onLike = (picId) => {
    axios({
        method: `PUT`,
        url: `/gallery/like/${picId}`
    }).then(response => {
      console.log('liked');
      this.getPics();
    }).catch(err =>{
      console.log(err);
    }); // end axios
  } // end onLike


  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram is destroying the social fabric of our youth</h1>
        </header>
        <br/>
        <h3>Gallery</h3>
        <GalleryList
          pictures={this.state.pictures}
          onLike={this.onLike}
        />
      </div>
    );
  }
}

export default App;
