import { createStore } from 'redux';
import reducer from './reducer';

const getStore = () => {
    return createStore(reducer);
};

export default getStore;