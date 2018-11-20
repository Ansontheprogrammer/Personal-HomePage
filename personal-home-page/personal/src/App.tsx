import * as React from 'react';
import './App.css';
import Header from './Components/Header'
import Login from './Components/Login'
import MyMusic from './Components/MyMusic'
import Navbar from './Components/Navbar'
import New from './Components/New'
import Popular from './Components/Popular'
import Search from './Components/Search'
import Submit from './Components/Submit'
import store from './store';

class App extends React.Component {
  public render() {
    // tslint:disable-next-line:no-console;
    console.log(store);

    return (
      <div>
        <Navbar />
        <Header/>
        <Popular />
        <New />
        <Search />
        <MyMusic />
        <Submit />
        <Login/>
      </div>
    );
  }
}

export default App;
