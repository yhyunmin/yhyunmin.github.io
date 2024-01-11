import React from 'react';
import { Route } from 'react-router';

export default (
  <Route>
    <Route path='/' />
    <Route path='/articles/:id' />
    <Route path='/about/:id' />
  </Route>
);
