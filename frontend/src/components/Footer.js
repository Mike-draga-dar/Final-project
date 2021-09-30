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
                <div className="logo"><img src={footerLogo}></img></div>
                    <p>Created by <Link to="https://github.com/darioformoso" target="_blank">Dario</Link>, <Link to="https://github.com/DraganCicic" target="_blank">Dragan</Link> & <Link to="https://github.com/michaelporreca" target="_blank">Michael</Link></p>
                </div>
            </footer>
    );
}

export default Footer;