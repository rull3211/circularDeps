import { lazy } from 'react';
import './App.css';
import Test from './Test';

const App = () => {
  const TestB = lazy(() => import("host/Test"));
  return (
    <div className="content">
        <Test></Test>
        <TestB></TestB>
    </div>
  );
};

export default App;
