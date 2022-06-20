import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import bravoJson from "./bravoPizza.json";
import "./css/ContactMap.css";

//
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNhZGJyIiwiYSI6ImNsMWllNzFteDBzbm0zZHF1dzMwb3p1aXYifQ.O5MZV7XZSA-DodMVAZJjxQ";
const ContactMap = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(36.698089039468044);
  const [lat, setLat] = useState(-3.381971039468623);
  const [zoom, setZoom] = useState(16);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Create default markers
    bravoJson.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="contact__map">
      <div className="contact__sc__container">
        <div>
          {" "}
          <a href="https://www.facebook.com/jioni.safaris.92">
            <FiFacebook />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/jioni_safaris/?hl=en">
            <FiInstagram />
          </a>
        </div>
        <div>
          {" "}
          <a href="https://twitter.com/jionisafaris">
            <FiTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.tripadvisor.co.uk/Attraction_Review-g297913-d17479382-Reviews-Jioni_Safaris-Arusha_Arusha_Region.html">
            <FaTripadvisor />
          </a>
        </div>
        <div>
          <a href="https://tz.linkedin.com/in/sadiq-almassi-47918b33">
            <FiLinkedin />
          </a>{" "}
        </div>
        <div>
          <a href="mailto:mikemajebz23@gmail.com">
            <AiOutlineGooglePlus />
          </a>{" "}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default ContactMap;
