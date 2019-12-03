import { configure } from 'enzyme';
import { ReactDOM } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
