import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/HomePage.jsx';
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import ItemDetailsPage from './components/ItemDetailsPage/ItemDetailsPage.jsx';
import UserInventoryPage from './components/UserInventoryPage/UserInventoryPage.jsx';
import GlobalInventoryPage from './components/GlobalInventoryPage/GlobalInventoryPage.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-account' element={<CreateAccountPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/personal_inventory' element={<UserInventoryPage />} />
        <Route path='/global_inventory' element={<GlobalInventoryPage />} />
        <Route path='/inventory/:id' element={<ItemDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
