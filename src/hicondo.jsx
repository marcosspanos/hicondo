import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

function Header() {
  return (
    <>
      <h1> Hicondo Committee</h1>
    </>
  );
}

function Clendar() {
  return (
    <>
      <Link to="/calendar">Calendar</Link>
    </>
  );
}
function CalendarPage() {
  return (
    <>
      <h1>Calendar</h1>
      <p> Events and other activities will be displayed here</p>
      <p>if you are interested in organising an event please get in touch so we can add it to the calendar</p>
    </>
  );
}
function FrequentlyAskedQuestions() {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <section>
        <h2>Legalities</h2>
          <ul>the contract
            <li>Myth.The rental contract is bulletproof, and we are bound by all of its terms</li>
            <li>Fact. Any part of the rental contract that violates Dutch law is invalid</li>
            <li>There are several parts of the contract that have already been established as illegal: The amount of time the landlord has to return the security deposit. The termination notice period and in many cases the security deposit to name a few</li>
            <li><b>Just because the landlord says something is legal does not mean is true </b></li>
          </ul>
          <ul>What if the landlord retaliates
            <li>Myth we are at the landlords mercy</li>
            <li>Fact. we have a lot of legal protection</li>
            <li>It is very difficult for landlords to evict tenants even when they have actually valid reasons</li>
            <li>If the landlord threatens you to evict you for simply asserting your rights refusing to pay a fine or anythign that is not covered by law that is Harrasment and intimidation </li>
            <li>Harrasment and intimidation and refusing to perform maintenance are grounds for fines beginning at 20000 for a first offence and escalating to 90000 </li>
            <li>In extreme cases the Gemeente has the authority to replace the landlord</li>

          </ul>
          <ul>
            What can we do about harrasment intimidation etc
            <li>We will soon start collecting anonymous reports of any behaviour like this</li>
            <li>We also encourage people to report these things directly themselves to (add a link here)</li>
          </ul>
          
      </section>
      <section>
        <h2>Who is</h2>
        <ul>
          <li>HiCo Bewonerscommissie</li>
          <li>We are a group of HiCondo tenants working with Stichting !Woon and other organisations to educate tenants about their rights and to help make HiCondo a better place to live</li>
        </ul>
        <ul>What is Stichting !Woon
          <li>!Woon is the Gemeente of Amsterdam tenant resource center. They assist tenants with landlord problems, especially in cases of getting refunds of overcharged service costs and illegal deductions from the security deposit</li>

        </ul>
        <ul>
          What is the Gemeente
          <li>The gementee is the municipal govermnent. Their good Landlord Team investigates tenant complaints regarding violations of the Good Landlord Act. They can investigate and fine landlods for failing or refusing to address maintenace issues, harrasing/intimidating tenants and other violations</li>        
        </ul>
        </section>
        <section>
        <h2>Service costs and security deposits</h2>
          <ul>
            I think i was overchagrged for service costs
            <li>Join our service costs group case</li>
            <li>The landlord withheld part of my security deposit for future service cost settlements or another illegal reason. What can I do</li>
              <li>Join our security deposit grotup case</li>
          </ul>
        </section>
    </>
  );
}
function FAQPage() {
  return (
    <>
      <Link to="/faq">Frequently Asked Questions</Link>
    </>
  );
}
function AboutUs() {
  return (
    <>
      <Link to="/about-us">About Us</Link>
    </>
  );
}

// This is the About Us subpage component
function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Us page with different content.</p>
    </div>
  );
}

function MainPage(){
  return (
    <>
      <h1>About the Hicondo Tenants Committee</h1>
      <section>
        <h2>What is the tenants committee</h2>
        <p>We are a committee of tenants ate HiCondo. We aim to make Hicondo a safe,peaceful place to live by ensuring fair and transparent costs, appropriate maintenance and improvements, and proper security </p>
      </section>
      <section>
        <h2>How do we involve Hicondo tenants</h2>
        <ul>
          <li>Keep tenants informed of our activities</li>
          <li>involve tenants in our decision making process</li>
          <li>Have regular tenant meetings(at least once per year) to inform tenants of our activities</li>
          <li> give all tenants the opportunity to join </li>
        </ul>
      </section>
      <section>
        <h2>Legal Authority</h2>
        <p> Link goes here figure it out </p>
        <ul>
          <li>Rental price policy</li>
          <li>How service costs are determined</li>
          <li>How tenants are selected</li>
          <li>Plans for renovation</li>
          <li>Policy regarding livability of the building</li>
          <li>Performance agreement between the landlord and the municipality</li>
        </ul>
      </section>
    </>
  );
}

function Page() {
  return (
    <HashRouter>
      <Header />
      <AboutUs />
      <Clendar />
      <FAQPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/faq" element={<FrequentlyAskedQuestions />} />
      </Routes>
    </HashRouter>
  );
}

export default Page;