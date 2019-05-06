import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onshowClick = name => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    const { showContactInfo } = this.state;
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h5>
                Name:{name}
                {showContactInfo ? (
                  <i
                    onClick={this.onshowClick.bind(this, name)}
                    className='fas fa-sort-up'
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <i
                    onClick={this.onshowClick.bind(this, name)}
                    className='fas fa-sort-down'
                    style={{ cursor: 'pointer' }}
                  />
                )}
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className='fas fa-pencil-alt'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h5>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email:{email}</li>
                  <li className='list-group-item'>Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
