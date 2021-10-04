import { useEffect, useState } from 'react'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import AllDrinks from './components/AllDrinks'
import NewPost from './components/NewDrink'
import RandomDrinks from './components/RandomDrinks';
import Profile from './components/Profile'
import Header from './components/Header'
import Results from './components/Results'
import Footer from './components/Footer'
import TheContext from './TheContext';
import actions from './api';
import CocktailDetails from './components/CocktailDetails';

function App() {

  const [user, setUser] = useState({})

  useEffect(async () => {
    getUser()
  }, [])


  const getUser = async () => {
    let res = await actions.getUser()
    setUser(res?.data)
  }

  return (
    <TheContext.Provider value={{ user, setUser, getUser }}>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home user={user} {...props} />} />
        <Route exact path="/all-drinks" render={(props) => <AllDrinks user={user} {...props} />} />
        <Route exact path="/new-drink" render={(props) => <NewPost user={user} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />
        <Route exact path="/random-drinks" render={(props) => <RandomDrinks user={user} {...props} />} />
        <Route exact path="/drinks/:drinkId" render={(props) => <CocktailDetails user={user} {...props} />} />
        <Route exact path="/results" render={(props) => <Results user={user} {...props} />} />
      </Switch>
      <Footer />

    </TheContext.Provider>
  );
}

export default App;
