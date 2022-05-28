import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import nextId from "react-id-generator";
import MapStyle from "../../Utils/MapStyle";
import "../../Utils/kitesurfing-surf-svgrepo-com.svg";
import staroff from "../../Utils/staroff.png"
import staron from "../../Utils/staron.png"


const Map = (props) => {
  
  let spots = props.spots;
  let setSpots = props.setSpots;
  
  const mapContainerStyle = {
    width: "100vw",
    height: "40vh",
  };
  const center = {
    lat: 44.379554,
    lng: 25.947364,
  };

  const options = {
    styles: MapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:`${process.env.REACT_APP_API_KEY}`,
  });

  
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback(
    (event) => {
      setSpots((current) => [
        ...current,
        {
          id: nextId(),
          name: "User",
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    },
    [setSpots]
  );

  const mapRef = React.useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  });

  // favourites
  const [toggled, setToggled] = React.useState(false);
  const toggleImage = () => setToggled(!toggled);

  
  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {spots.map((spot) => {
          return (
            <Marker
              key={spot.id}
              position={{ lat: Number(spot.lat), lng: Number(spot.lng) }}
              onClick={() => {
                setSelected(spot);
              }}
            />
          );
        })}

        {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
            onCloseClick={() => {
              setSelected(null);
            }}
            onClick
          >
            <div>
              <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-xs h-auto">
                  <a href="#!">
                    <img
                      class="box-border rounded h-28 w-80 "
                      w
                      src="https://www.ikointl.com/sites/default/files/Newsletter%20Italy2.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-3">
                    <div class="flex justify-between">
                      <h5 class="text-gray-900 text-xl font-medium mb-2">
                        {selected.country}
                      </h5>
                      <div>
                      
                      {toggled && <img width={25} height={23} src={staron} alt="Cat" />}
                      {!toggled && <img width={25} height={23} src={staroff} alt="Cat" />}
                      
                      </div>
                    </div>
                    <p class="text-gray-700 text-base mb-4">
                      This beautiful spot was added by {selected.name}. The Wind
                      probability here is {selected.probability}% and the best
                      month to be here is {selected.month}.
                    </p>
                    <button
                      type="button"
                      onClick={toggleImage}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block px-4 py-3 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add to Favourites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;
