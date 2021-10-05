import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import TheContext from '../TheContext';
import Auth from './Auth'
import logo from '../../src/logo.png'


function Header(props) {
    const logOut = () => {
        localStorage.removeItem('token')
        setUser({})
    }

    let { user, setUser, getUser } = useContext(TheContext)

    // Search Bar
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        let eventKeyWord = e.target[0].value;
        history.push(
          `/results?keyword=${eventKeyWord}`
        );
      };

    return (
        <div className="container">

            <div id="auth">
                {user?.name ?
                    <div>
                        <img src={user?.imageUrl} className="auth-profile-picture" />
                        <h4>{user?.name}</h4>
                        <button onClick={logOut} className="auth-button">Log Out</button>
                    </div>
                    : <Auth getUser={getUser} />
                }
            </div>

            <header>
                <div className="logo"><img src={logo} /></div>
            </header>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/all-drinks">All Drinks</Link>
                {user?.name ?
                    <>
                        <Link to="/new-drink">New Drink</Link>
                        <Link to="/profile">Profile</Link>
                    </> :
                    null}

                <Link to="/random-drinks">Random Drinks</Link>
            </nav>

            <div className="header">
                <div className="tagline">
                    The perfect place for you to <strong>create</strong>, <strong>find</strong> and <strong>share</strong> your favorite drink recipes.
                </div>
            </div>

            <br></br><br></br>

            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for drinks"></input> <input class="searchbutton" value="Search" type="submit"></input>
                </form>
            </div>

            <br></br><br></br>
        </div>
    );
}

export default Header;