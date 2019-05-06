import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class Addcontact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, errors } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
      ...newContact
    });
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    //clear state
    this.setState({
      email: '',
      phone: '',
      name: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card mb3'>
              <div className='card-header'>Add Contact</div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className='card-body'>
                  <TextInputGroup
                    label='Name'
                    name='name'
                    placeholder='Enter Name...'
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                </div>

                <div className='card-body'>
                  <TextInputGroup
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email...'
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                </div>
                <div className='card-body'>
                  <TextInputGroup
                    label='Phone'
                    name='phone'
                    placeholder='Enter Phone...'
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                </div>
                <input
                  type='submit'
                  value='Add Contact'
                  className='btn btn-dark btn-block'
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addcontact;
