import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from './__mocks__/react-router-dom';
import App from './App';
import User from "./views/user";
import PageNotFound from "./PageNotFound";

describe('App Component', () => {
    it('Render Page Not Found', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={['/random', {pathname: '/random'}]}>
              <App/>
          </MemoryRouter>);
        
        expect(wrapper.find(PageNotFound)).toHaveLength(1); //Need to check why this is not rendering
    });
    
    it('User Page Routing', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={['/user']}>
              <App/>
          </MemoryRouter>);
        expect(wrapper.find(User)).toHaveLength(1);
    })
});
