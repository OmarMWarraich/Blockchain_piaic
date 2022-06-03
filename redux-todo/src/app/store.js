import { configureStore } from '@reduxjs/toolkit';
import  combineReducers from '../reducer';

export const store = configureStore({
    reducer:
    combineReducers});

