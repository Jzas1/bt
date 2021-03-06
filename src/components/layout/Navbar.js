import React, { Component } from 'react';
import PropTypes from 'prop-types'


const Navbar = (props) => {

   
        return (
            <div className="Navbar bg-primary">
                <h1>
                <i className = {props.icon} />
                {props.title}
                </h1>
            </div>
        )
    }

Navbar.defaultProps = {
    title: 'Github finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
