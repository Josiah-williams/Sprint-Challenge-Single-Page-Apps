import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import {Link} from "react-router-dom"


function EpisodesList(props) {
    const [episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then(res => {
                setEpisodes(res.data.results)
                console.log('Yahtzee!', res.data.results);
            })
            .catch(error => {
            console.error('No go!, error')
        })
    },[]);

    return(
        <section className='episode-list grid-view'>
      <Link to= "/"><button>Home</button></Link>
            {episodes.map(episode => (
              <EpisodeCard 
              key={episode.id}
              episode={episode}
              name={episode.name}
              airDate={episode.air_date}
              number={episode.id} />
            ))}
        </section>
          );
        } 
        
export default EpisodesList;