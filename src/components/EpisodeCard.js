import React from 'react';


function EpisodeCard(props) {
return (
    <span className='episode-card'>
           <h3>{props.name}</h3>
            <h4>Episode number: {props.number}</h4>
              <p>Air Date: {props.airDate}</p>
           </span>
          );
        }




        export default EpisodeCard; 