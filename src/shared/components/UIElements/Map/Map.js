import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import './Map.css';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: 620,
    height: 250,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoidmVudHVzNjkiLCJhIjoiY2tlYnljcnBpMGRmcjJ5bWlyMDlxd3k1cCJ9.-uMfrdR-WxeDO6OAqGI52A"
        {...viewport}
        mapStyle="mapbox://styles/ventus69/ckr6s5wi811ji17o1n73vmrut"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
          <Marker latitude={37.7577} longitude={-122.4376}>
          <div className="marker temporary-marker"><span></span></div>
          </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
