import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.newGuestSubmitHandler}>
            <input
                type="text"
                onChange={this.handleNameInput}
                value={this.state.pendingGuest}
                placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    </header>

Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
};

export default Header;