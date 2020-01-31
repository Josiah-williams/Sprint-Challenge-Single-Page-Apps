import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";
import {Link} from "react-router-dom"

export default function LocationsList() {
    const [locations, setlocations] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                console.log('Yahtzee', res.data.results);
                setlocations(res.data.results)
            })
            .catch(error => {
                console.error('No Go', error)
            })
    },[]);
  return (
    <section className='location-list grid-view'>
      <Link to= "/"><button>Home</button></Link>
     {locations.map(location => (
              <LocationCard 
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}/>

            ))}
    </section>
  );
     }
