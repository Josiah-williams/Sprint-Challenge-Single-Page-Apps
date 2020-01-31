import React from "react";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route } from"react-router-dom";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationsList";

export default function App() {
  return  <div className="page-view ui bottom attached segment active tab">
    <main>
      <Header />
      <Route exact path="/Search" component={SearchForm}/>
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path="/Characters" component={CharacterList}/>
      <Route exact path="/Episode" component={EpisodeList} />
      <Route exact path="/Location" component={LocationList} />
    </main>
  );</div>
}
