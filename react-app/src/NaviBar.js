import React, { Component } from "react"
import facade from "./apiFacade";
import './App.css';
import { Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from './Jwt.js';
import { user } from './Jwt.js';
//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt 


const Home = () => <div><h1>Welcome to the page! Please Login to continue</h1></div>
//Indsæt kode
//const Login = () => <div className="Login"><h1>Link jwt siden her</h1></div>;
//Indsæt kode
const Logout = () => <div>{facade.logout()}You have now been logged out</div>;
//Indsæt kode
const Data = () => <div className="Data"><h1>Data: Link til swapi eller noget her</h1></div>
class NaviBar extends Component {
    render() {
        return (
            <Router>

                <div>
                    <Navbar>
                        <NavLink to="/">
                            <div>Home</div>
                        </NavLink>
                        <NavLink to="/Login">
                            <div>Login</div>
                        </NavLink>
                        <NavLink to="/Data">
                            <div>Data</div>
                        </NavLink>
                        You are logged in as: {user}
                    </Navbar>

                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/Data" component={Data} />

                </div>

            </Router>
        );
    }
}
//CSS'en forbundet til App.css

export default NaviBar;