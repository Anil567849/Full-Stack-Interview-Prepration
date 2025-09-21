import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import ComC from './ComC';

// three step to implement contextApi 
// 1 = createContext();
// 2 = provider 
// 3 = consumer

const ComB = () => {
  return (
      <ComC />
  );
}

export default ComB;
