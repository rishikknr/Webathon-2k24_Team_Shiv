// import logo from './logo.svg';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
// import IDEapp from './components/IDE/IDEapp;'
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  const browserRouter = createBrowserRouter([
    // {
    //   path: '',
    //   element: <IDEapp />
    // }
    {
      path: '',
      element: <Home/>
    }
    // {
    //   path: '',
    //   element: <Signup/>
    // }
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;

