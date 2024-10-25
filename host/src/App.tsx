import { lazy } from 'react';
import './App.css';
import Test from './Test';

const App = () => {
  const TestA = lazy(() => import("remote/Test"));
  return (
    
    <div className="content">
      <TestA></TestA>
      <Test></Test>
    </div>
  );
};

export default App;
