import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
    <h1>Purchase Tickets!</h1>
      <div class="purchase">
        <form>
            <label>Choose your movie!</label>
            <select id='collectableType'>
              <option value="0">Select Movie to Watch:</option>
              <option value="1">The Avengers</option>
              <option value="2">How to Train Your Dragon 3</option>
              <option value="3">Jaws</option>
              <option value="4">Back to the Future</option>
              <option value="5">Jurassic Park</option>
              <option value="6">Top Gun: Maverick</option>
              <option value="7">Barbie Swan Lake</option>
              <option value="8">Weathering With You</option>
              <option value="9">Ant-Man</option>
              <option value="10">The Shining</option>
            </select>
            <label>Select the showing time!</label>
            <select id='collectableType'>
              <option value="0">Select Showtime:</option>
              <option value="1">10:00 AM</option>
              <option value="2">11:15 AM</option>
              <option value="3">12:00 PM</option>
              <option value="4">2:30 PM</option>
              <option value="5">4:15 PM</option>
              <option value="6">5:55 PM</option>
              <option value="7">6:25 PM</option>
              <option value="8">7:00 PM</option>
              <option value="9">8:00 PM</option>
              <option value="10">9:00 PM</option>
            </select>
            <label>Upgrade to reclining seats?</label>
            <select id='collectableType'>
              <option value="0">Select Seat Option:</option>
              <option value="1">No</option>
              <option value="2">Yes</option>
            </select>
            <label>Any other notes about your booking?: </label>
            <input id="itemInput" type="text"></input><br />
            <input id="itemSubmit" type="submit" value="Submit"></input>
        </form>
      </div>
      <div id='thanks'><h1>Thank you for your support!</h1></div>
    </div>
  );
}

export default Contact;
