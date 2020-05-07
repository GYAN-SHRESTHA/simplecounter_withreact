import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css'; 
import Flat from "./components/flat";
import Marker from "./components/marker";

//we call API and get the json
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      flats:[],
      allFlats:[],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
    .then(response => response.json())
    .then((data) =>{
      //console.log(data);
      this.setState({
        flats: data,
        allFlats: data
      });
    })
  }

  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    });
  }

  handleSearch = (event) => {
    console.log(event);
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    });
  }

  render(){
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.state.selectedFlat)
    {
      center = {
        lat: this.state.selectedFlat.lat,
        lang: this.state.selectedFlat.lang
      }
    }
    // const flat = {
    //   "id": 148,
    //   "name": "Trendy Apt in Buttes Montmartre",
    //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    //   "price": 200,
    //   "priceCurrency": "EUR",
    //   "lat": 48.885707,
    //   "lng": 2.343543
    //  };

    // const flats = [flat, flat , flat, flat]; //flates changes depending on search or the action we do on map

    return(
      // <div>
      //   <Flat flat={flat} />
      //   <Flat flat={flat} />
      // </div>
      //Flexbox implemenation
      <div className="app">
        <div className="main">
          <div className="search">
            <input 
              type="text" 
              placeholder="Search.." 
              value={this.state.serach} 
              onChange={this.handleSearch}/>
          </div>
          <div className="flats">
             {this.state.flats.map((flat) => {
               return <Flat 
               key={flat.name} 
               flat={flat} 
               selectFlat={this.selectFlat} />
             })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={11}
          >
            {this.state.flats.map((flat) => {
               return <Marker 
               key={flat.name} 
               lat={flat.lat} 
               lng={flat.lng} 
               text={flat.price}
               selected={flat === this.state.selectedFlat} />
             })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
// componentDidMount(){
//   fetch("https://github.com/lewagon/flats-boilerplate/blob/master/flats.json")
//   .then(response => response.json())
//   .then((data) => {
//     this.setState({
//       flats: data
//     })
//   }
// }
export default App;
