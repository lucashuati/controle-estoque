/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

const BaseRoute = ({ ...rest }) => (
  <>
    <NavBar />
    <Route {...rest} />
  </>
);

export default BaseRoute;
