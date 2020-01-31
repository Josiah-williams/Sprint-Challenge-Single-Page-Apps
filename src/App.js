import React from "react";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route } from"react-router-dom";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/Search" component={SearchForm}/>
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path="/Characters" component={CharacterList}/>
      <Route exact path="/episodes" component={EpisodeList} />
    </main>
  );
}
