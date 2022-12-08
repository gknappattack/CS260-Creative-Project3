import React from "react";
import { Link} from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1 class="font-weight-light">Welcome to Galaxy Theaters!</h1>
      
      <div class='greeting'>
        <h2>Welcome to the theater that is showing every movie... in the Galaxy!</h2>
        
        <div class='buttons'>
       
          <Link to='/about'>
            <button class='home-button' onclick="window.location.href='https://w3docs.com';">Now Showing</button>
          </Link>
          <Link to='/contact'>
            <button class='home-button' onclick="window.location.href='https://w3docs.com';">Reserve Tickets</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;