import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import GalleryPage from './pages/gallery-page/gallery-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/gallery' exact component={GalleryPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
