import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'
import mapboxAccessToken from './mapboxAccessToken'
mapboxgl.accessToken = mapboxAccessToken;

class Map extends Component {
  constructor(props) {
    super(props)
    this.state= {
      map: null
    }
  }
  componentDidMount() {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 16,
    })
    this.setState({map})
  }
  componentDidUpdate() {
    this.state.map.setCenter(this.props.position)
  }
  render() {
    return (
      <div id='map'>
      </div>
    )
  }
}

export default Map
