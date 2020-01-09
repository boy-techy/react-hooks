// Link.react.test.js
import React from 'react';
import { MemoryRouter } from '../../__mocks__/react-router-dom';
import { mount } from 'enzyme';
import User from "./index"
import UserList from "./userList";
import UserDetail from './userDetail';


describe('View user', () => {
    
    describe('Routing in User Page', () => {
        it('UserList Page Rendering', () => {
            const wrapper = mount(
              <MemoryRouter initialEntries={['/user']}>
                  <User {...{match: { path: '/user' }}}/>
              </MemoryRouter>
            );
            
            expect(wrapper.find(UserList)).toHaveLength(1);
        });
        
        it('UserDetail Page Rendering', () => {
            const wrapper = mount(
              <MemoryRouter initialEntries={['/user/1']}>
                  <User {...{ match: { path: '/user', params: { id: 1 }}}}/>
              </MemoryRouter>
            );
        
            expect(wrapper.find(UserDetail)).toHaveLength(1); //Need To Check
        });
    });
    
});
