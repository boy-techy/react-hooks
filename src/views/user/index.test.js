// Link.react.test.js
import React from 'react';
import User from "./index"
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <User page="http://www.facebook.com">Facebook</User>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
