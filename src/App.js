import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import Navbar from './components/Navbar' 
import Home from './components/Home'
import Features from './components/Features';
import Trending from './components/Trending'
import Community from './components/Community'
import Collection from './components/Collection';
import Section from './components/Section'
import Rated from './components/Rated'
import Footer from './components/Footer'
import Community_page from './components/Community_page';
import Create from './components/Create'
import Explore from './components/Explore'
import Wallet from './components/Wallet'
import Login from './components/Login'
import Form from './components/Form';
import Article from './components/Articles'
import About from './components/About'
import MyArticles from './components/MyArticles'
import A from './components/A'


function App() {
  return (
    <div> 


      <Router>
        {/* <Navbar/> */}

        <Switch>
          <Route exact path='/'>
            <Form></Form>
          </Route>
  <Route  path="/home">
  <Navbar/>
  <Home/>
  <Features/>
  <Trending/>
  <About/>
  <Collection/>
  <Community/>
  <Rated/>
  <Section/>
  <Article/>
  <Footer/> 
  </Route>
  
      <Route path='/create/:id' children={<Create />}></Route>
      <Route path='/Community'><Community_page/></Route>
      <Route path='/explore'><Explore/></Route>
      <Route path='/wallet'><Wallet/></Route>
      <Route path='/login'><Login/></Route>
      <Route path='/myarticles'><MyArticles/></Route>
      <Route path='/A/:id' children={<A />}></Route>


        

        </Switch>
      </Router>




   {/* <Home/>
  <Features/>
  <Trending/>
  <Collection/>
  <Community/>
  <Rated/>
  <Section/>
  <Footer/>  */}
  </div>
  );
}

export default App;
