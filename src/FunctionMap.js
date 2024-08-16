import react from "react";
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";
import Firebase from "./Firebase";


function SimpleMap() {
    const {id} = useParams();
    console.log(id);
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const val = {
        center: {
          lat: 24.582133501989524,
          lng: 80.86604425260926
        },
        zoom: 11
      }
    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuGwk1IRDJmKCWJVXIAQvnm7y9XMQZ2QE" }}
          defaultCenter={val.center}
          defaultZoom={val.zoom}
        >
          <AnyReactComponent
            text={"BinNo-"+id.split("a")[2]}
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }

export default SimpleMap;