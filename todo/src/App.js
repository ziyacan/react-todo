import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<AddUser/>} />
            <Route path="/edit/:id" element={<EditUser/>} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
