import { createStore } from "redux";

import {blogReducers} from './Reducers/Reducers';

export const store = createStore(blogReducers)