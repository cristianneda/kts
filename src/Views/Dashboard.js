import React, {useState, useEffect} from "react";
import axios from "axios";
import instance from "../Utils/api";
import Toolbar from "../components/Toolbar";
import Table from "../components/Pages/Table.js"
import Map from "../components/Pages/Map";
import AddFavourite from "../components/Shared/AddFavourite";
import NavBar from "../components/Shared/NavBar";
import "../App.css"


 const Dashboard = (sorter, props) => {

  
  const[spots, setSpots] = useState([]);
  const[favourites, setFavourites] = useState([]);
  
  
  //  get spots data from API
  const fetchUrl = "https://62692e30aa65b5d23e812e0b.mockapi.io/spot";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl);
      setSpots(data.data)

    }
    fetchData();
  }, []);

    const addFavouriteSpot = (spot) => {
      const favouriteSpots = [...favourites, spot]
      setFavourites(favouriteSpots);
    }
    
    return (
      <div>
      <h1>Status: {props.loggedIn}</h1>
      <NavBar/>
      <div className=" flex items-center flex-col space-y-4 ">
        <Map spots={spots} setSpots={setSpots} favouriteComponent={AddFavourite} handleFavouriteClick={addFavouriteSpot} />
        <Toolbar />
        <Table spots={spots} sorter={sorter} setSpots={setSpots} favouriteComponent={AddFavourite} />
      </div>
      </div>
    );
  }


export default Dashboard;

