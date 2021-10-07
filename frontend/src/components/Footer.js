import { Link, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import TheContext from '../TheContext';
import Auth from './Auth'
import footerLogo from '../../src/footerlogo.png'



function Footer(props) {
    const logOut = () => {
        localStorage.removeItem('token')
        setUser({})
    }

    let { user, setUser, getUser } = useContext(TheContext)

    return (
        <footer>
            <div className="container">
                <Link to="/"> <div className="logo"><img src={footerLogo}></img></div> </Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/all-drinks">All Drinks</Link>
                    {user?.name ?
                        <>
                            <Link to="/new-drink">New Drink</Link>
                            <Link to="/profile">Profile</Link>
                        </> :
                        null}

                    <Link to="/random-drinks">Random Drink</Link>
                </nav>

                <p>Created by <a href="https://github.com/darioformoso" target="_blank">Dario</a>, <a href="https://github.com/DraganCicic" target="_blank">Dragan</a> & <a href="https://github.com/michaelporreca" target="_blank">Michael</a></p>
            </div>
        </footer>
    );
}

export default Footer;