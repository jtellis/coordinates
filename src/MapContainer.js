import React, {Component} from 'react'
import Map from './Map'

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      watchID: null,
      position: [0, 0]
    }
    let watchID = navigator.geolocation.watchPosition((position) => {
      let currentPos = [position.coords.longitude, position.coords.latitude]
      this.setState({
        position: currentPos
      })
    })
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watchID)
  }
  render(){
    return <Map position={this.state.position} />
  }
}

export default MapContainer
