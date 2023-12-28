import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Route/Router/Router';

function App() {
  return (
    <div className="w-75 mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
