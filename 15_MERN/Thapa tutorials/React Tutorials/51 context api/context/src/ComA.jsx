import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import ComB from './ComB';

// three step to implement contextApi 
// 1 = createContext();
// 2 = provider 
// 3 = consumer

const ComA = () => {
  return (
      <ComB />
  );
}

export default ComA;
