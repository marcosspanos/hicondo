// filepath: /hicondo-html/hicondo-html/src/app.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarLink = document.getElementById('calendar-link');
    const faqLink = document.getElementById('faq-link');
    const aboutUsLink = document.getElementById('about-us-link');
    const mainContent = document.getElementById('main-content');

    calendarLink.addEventListener('click', function() {
        mainContent.innerHTML = `
            <h1>Calendar</h1>
            <p>Events and other activities will be displayed here.</p>
            <p>If you are interested in organizing an event, please get in touch so we can add it to the calendar.</p>
        `;
    });

    faqLink.addEventListener('click', function() {
        mainContent.innerHTML = `
            <h1>Frequently Asked Questions</h1>
            <section>
                <h2>Legalities</h2>
                <ul>
                    <b>The contract</b>
                    <li>Myth: The rental contract is bulletproof, and we are bound by all of its terms.</li>
                    <li>Fact: Any part of the rental contract that violates Dutch law is invalid.</li>
                    <li>There are several parts of the contract that have already been established as illegal.</li>
                    <li><b>Just because the landlord says something is legal does not mean it's true.</b></li>
                </ul>
                <ul>
                    <b>What if the landlord retaliates?</b>
                    <li>Myth: We are at the landlord's mercy.</li>
                    <li>Fact: We have a lot of legal protection.</li>
                    <li>It is very difficult for landlords to evict tenants even when they have valid reasons.</li>
                    <li>If the landlord threatens you to evict you for asserting your rights, that is harassment and intimidation.</li>
                </ul>
            </section>
            <section>
                <h2>Who is HuurCommissie?</h2>
                <ul>
                    <li>HiCo Bewonerscommissie</li>
                    <li>We are a group of HiCondo tenants working with Stichting !Woon to educate tenants about their rights.</li>
                </ul>
            </section>
        `;
    });

    aboutUsLink.addEventListener('click', function() {
        mainContent.innerHTML = `
            <h1>About Us</h1>
            <p>This is the About Us page with different content.</p>
        `;
    });
});