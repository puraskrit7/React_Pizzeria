import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo1 from './logo1.png';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div class="navbar-brand">Pizzeria</div>
                            <Link to="/"><img src={logo1} alt="logo" width='40px' /></Link>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/Order">Order Pizza</Link></li>
                            <li><Link to="/BuildYourPizza">Build Your Pizza</Link></li>
                        </ul>
                        <button class='btn btn-warning pull-right navbar-btn'><i class="glyphicon glyphicon-shopping-cart"></i> Shoping Cart</button>
                    </div>
                </nav>
            </div>
        )
    }
}
