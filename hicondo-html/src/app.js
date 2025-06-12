// filepath: /hicondo-html/hicondo-html/src/app.js

document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const aboutUsLink = document.querySelector('a[href="#about-us"]');
    const calendarLink = document.querySelector('a[href="#calendar"]');
    const faqLink = document.querySelector('a[href="#faq"]');

    // Sections
    const aboutUsSection = document.getElementById('about-us');
    const calendarSection = document.getElementById('calendar');
    const faqSection = document.getElementById('faq');

    // Show only the requested section
    function showSection(section) {
        aboutUsSection.style.display = 'none';
        calendarSection.style.display = 'none';
        faqSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Navigation event listeners
    aboutUsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(aboutUsSection);
    });
    calendarLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(calendarSection);
    });
    faqLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(faqSection);
    });

    // Show About Us by default
    showSection(aboutUsSection);

    // Calendar logic
    const calendarDiv = document.getElementById('calendar').querySelector('#calendar');
    const sidebarDate = document.getElementById('sidebar-date');
    const sidebarEvents = document.getElementById('sidebar-events');
    const sidebarAdd = document.getElementById('sidebar-add');
    const sidebarEventTitle = document.getElementById('sidebar-event-title');
    const sidebarSaveEvent = document.getElementById('sidebar-save-event');

    // Load events from localStorage or use default
    const defaultEvents = {
        "2025-06-15": ["Queer game night at 16:00"],
    };
    const events = JSON.parse(localStorage.getItem('calendarEvents')) || defaultEvents;
    let selectedDate = null;

    function renderCalendar() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let html = `<div class="calendar-header">
            <span class="calendar-month">${today.toLocaleString('default', { month: 'long' })} ${year}</span>
        </div>`;
        html += '<table><tr>';
        const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
        for (let d of days) html += `<th>${d}</th>`;
        html += '</tr><tr>';

        let dayOfWeek = firstDay === 0 ? 6 : firstDay - 1; // Make Monday first
        for (let i = 0; i < dayOfWeek; i++) html += '<td></td>';
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
            let highlight = (selectedDate === dateStr) ? ' selected-day' : '';
            html += `<td class="calendar-day${highlight}" data-date="${dateStr}">${day}`;
            if (events[dateStr] && events[dateStr].length) {
                html += `<div class="event-dot"></div>`;
            }
            html += `</td>`;
            dayOfWeek++;
            if (dayOfWeek === 7 && day !== daysInMonth) {
                html += '</tr><tr>';
                dayOfWeek = 0;
            }
        }
        if (dayOfWeek !== 0) {
            for (let i = dayOfWeek; i < 7; i++) html += '<td></td>';
        }
        html += '</tr></table>';
        calendarDiv.innerHTML = html;

        calendarDiv.querySelectorAll('.calendar-day').forEach(td => {
            td.addEventListener('click', function() {
                selectedDate = this.getAttribute('data-date');
                renderSidebar(selectedDate);
                renderCalendar();
            });
        });
    }

    function renderSidebar(date) {
        sidebarDate.textContent = date ? new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
        const evs = events[date] || [];
        sidebarEvents.innerHTML = evs.length
            ? `<ul>${evs.map(e => `<li>${e}</li>`).join('')}</ul>`
            : '<p>No events.</p>';
        sidebarAdd.style.display = date ? 'block' : 'none';
        sidebarEventTitle.value = '';
    }

    function saveEvents() {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    }

    sidebarSaveEvent.addEventListener('click', function() {
        if (!selectedDate) return;
        const title = sidebarEventTitle.value.trim();
        if (!title) return;
        if (!events[selectedDate]) events[selectedDate] = [];
        events[selectedDate].push(title);
        saveEvents(); // Save to localStorage
        renderSidebar(selectedDate);
        renderCalendar();
    });

    // Initialize calendar on page load
    renderCalendar();
    renderSidebar(null);
});