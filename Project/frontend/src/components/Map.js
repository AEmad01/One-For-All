import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import axios from 'axios'





class MapContainer extends React.Component {

  constructor(props){
    super(props)
    this.onChangeLocation=this.onChangeLocation.bind(this);

    this.onUpdate= this.onUpdate.bind(this);
  
  

    
  this.state ={
    location: '',
    confirm:'false',

    markers: [
      {
        name: "Suggested Location",
        position: {
          lat: 30.098580899999998,
          lng: 31.6434059
        }
      }
    ]
  }

}
onChangeLocation(e){
  this.setState({
    location:e.target.value
  });
}

  onUpdate(e){
    e.preventDefault();
    const upLocation ={
      location: this.state.location,
      confirm:this.state.confirm
    } 
    alert(window.location.href.match(/\/([^\/]+)\/?$/)[1])
    axios.put('http://localhost:3001/api/appointments/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],upLocation).then(response =>response.data);

    this.setState({
      location: '',
      confirm:'false'
    });

  }
  



  
  state = {
    markers: [
      {
        name: "Suggested Location",
        position: {
          lat: 30.098580899999998,
          lng: 31.6434059
        }
      }
    ]
  };

  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(prevState => {
      const markers = [...this.state.markers];
      markers[index] = { ...markers[index], position: { lat, lng } };
      return { markers };
    });

    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=' + 'AIzaSyCTc_dzW2Snm5EOKlo3aj1SAbLCAhbNfPI')
        .then((response) => response.json())
        .then((responseJson) => {
          
            console.log(responseJson["results"][0]["formatted_address"]
            );
            this.setState({
              location: responseJson["results"][0]["formatted_address"],
            })
})
  };

  
  
  
  render() {
    return (
    <div>
<div key="2"style={{paddingLeft: 460}} >
      <Map
      initialCenter={{lat: 30.098580899999998,lng: 31.6434059}}
        google={this.props.google}
        style={{
          width: "45.5%",
          height: "500px"
        }}
        zoom={14}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            position={marker.position}
            draggable={true}
            onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
            name={marker.name}
          />
        ))}
        
      </Map>

      </div>
<div key="1">
<div style={{marginTop: 20}}>
  <h3>Suggest a New Location</h3>
  <form onSubmit={this.onUpdate}>
      <div className="form-group" style={{width: 400}}>
          <label>Location: </label>
          <input  type="text"
          width
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                  />
      </div>
      <div className="form-group">
      <input type="submit" value="Suggest Location" className="btn btn-primary" />
      </div>
      </form>
      </div>
      </div>
      </div>
      
    );
  }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU'
})(MapContainer)

