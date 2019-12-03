// Link.react.test.js
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import User from "./index"

test('No page Found Render', () => {
    /*const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
          <User/>
      </MemoryRouter>
    , {match:{path: ''}});
    
    expect(wrapper.find(<div>No Page Found</div>)).toHaveLength(1);*/
});
