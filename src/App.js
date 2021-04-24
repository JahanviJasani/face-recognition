import React, { Component } from 'react'
import Clarifai from 'clarifai';
import './App.scss';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'

const app = new Clarifai.App({
  apiKey: '87774b655dec4a249142b76cfbfbcf65'
 });

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchString: ''
    }
  }

  onInputChange = (event) => {
    this.setState({searchString: event.target.value});
    console.log("Hi");
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
    
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      "https://image.freepik.com/free-photo/beautiful-attractive-african-american-woman-posting-play-with-her-curly-afro-hair-yellow-studio-background-copy-space_1258-960.jpg"
    )
    .then (
      function(response) {
        console.log(response);
      },
      function(err) {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Statistics />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onDetect={this.onSubmit}
        />
      </div>
    )
  }
}

export default App;
