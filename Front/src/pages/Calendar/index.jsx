import React, { useState, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
 
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
 
const Calendar = () => {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState(today.getDate());
  const [eventsArr, setEventsArr] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({ title: '', from: '', to: '' });
 
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventsArr));
  }, [eventsArr]);
 
  const initCalendar = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;
 
    let days = [];
 
    for (let x = day; x > 0; x--) {
      days.push(<div key={`prev-${x}`} className="day prev-date">{prevDays - x + 1}</div>);
    }
 
    for (let i = 1; i <= lastDate; i++) {
      const event = eventsArr.some(eventObj => (
        eventObj.day === i && eventObj.month === month + 1 && eventObj.year === year
      ));
      const isToday = i === today.getDate() && year === today.getFullYear() && month === today.getMonth();
      const className = `day ${isToday ? 'today active' : ''} ${event ? 'event' : ''}`;
      days.push(
        <div key={`current-${i}`} className={className} onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }
 
    for (let j = 1; j <= nextDays; j++) {
      days.push(<div key={`next-${j}`} className="day next-date">{j}</div>);
    }
 
    return days;
  };
 
  const handleDayClick = (day) => {
    setActiveDay(day);
  };
 
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(prevYear => prevYear - 1);
    } else {
      setMonth(prevMonth => prevMonth - 1);
    }
  };
 
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(prevYear => prevYear + 1);
    } else {
      setMonth(prevMonth => prevMonth + 1);
    }
  };
 
  const gotoDate = (input) => {
    const dateArr = input.split("/");
    if (dateArr.length === 2) {
      if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
        setMonth(dateArr[0] - 1);
        setYear(parseInt(dateArr[1]));
        return;
      }
    }
    alert("Invalid Date");
  };
 
  const getActiveDay = (date) => {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    return { dayName, date };
  };
 
  const updateEvents = (date) => {
    const events = eventsArr.filter(event => (
      event.day === date && event.month === month + 1 && event.year === year
    ));
    return events.length ? events : null;
  };
 
  const addEvent = () => {
    const existingDayIndex = eventsArr.findIndex(event => (
      event.day === activeDay && event.month === month + 1 && event.year === year
    ));
 
    if (existingDayIndex !== -1) {
      const updatedEventsArr = [...eventsArr];
      updatedEventsArr[existingDayIndex].events.push({
        title: eventForm.title,
        time: `${convertTime(eventForm.from)} - ${convertTime(eventForm.to)}`
      });
      setEventsArr(updatedEventsArr);
    } else {
      const newEvent = {
        day: activeDay,
        month: month + 1,
        year,
        events: [{
          title: eventForm.title,
          time: `${convertTime(eventForm.from)} - ${convertTime(eventForm.to)}`
        }]
      };
      setEventsArr(prevEvents => [...prevEvents, newEvent]);
    }
   
    setShowAddEvent(false);
    setEventForm({ title: '', from: '', to: '' });
  };
 
 
 
  const convertTime = (time) => {
    let [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };
  const deleteEvent = (eventToDelete, eventObjToDelete) => {
    console.log('a')
    const updatedEventsArr = eventsArr.map(event => {
      if (event.day === eventToDelete.day && event.month === eventToDelete.month && event.year === eventToDelete.year) {
        const updatedEvents = event.events.filter(eventObj => (
          eventObj.title !== eventObjToDelete.title || eventObj.time !== eventObjToDelete.time
        ));
        return {
          ...event,
          events: updatedEvents
        };
      }
      return event;
    });
 
    setEventsArr(updatedEventsArr);
  };
 
 
  return (
    <div className="container2">
      <div className="left">
        <div className="calendar">
          <div className="month">
            <FontAwesomeIcon icon={faAngleLeft} className="prev" onClick={prevMonth} />
            <div className="date">{months[month]} {year}</div>
            <FontAwesomeIcon icon={faAngleRight} className="next" onClick={nextMonth} />
          </div>
          <div className="weekdays">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sáb</div>
          </div>
          <div className="days">
            {initCalendar()}
          </div>
          <div className="goto-today">
            <div className="goto">
              <input
                type="text"
                placeholder="mm/yyyy"
                className="date-input"
                onBlur={(e) => gotoDate(e.target.value)}
              />
              <button className="goto-btn" onClick={(e) => gotoDate(e.target.previousSibling.value)}>Procurar</button>
            </div>
            <button className="today-btn" onClick={() => {
              const today = new Date();
              setToday(today);
              setMonth(today.getMonth());
              setYear(today.getFullYear());
              setActiveDay(today.getDate());
            }}>Hoje</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="today-date">
          <div className="event-day">{getActiveDay(activeDay).dayName}</div>
          <div className="event-date">{`${activeDay} ${months[month]} ${year}`}</div>
        </div>
        <div className="events">
  {updateEvents(activeDay) ? (
    updateEvents(activeDay).map((event, index) => (
      <div key={index} className="event">
        {event.events.map((eventObj, eventIndex) => (
          <div key={eventIndex}>
            <div className="title">
              <FontAwesomeIcon icon={faCircle} />
              <h3 className="event-title">{eventObj.title}</h3>
            </div>
            <div className="event-time">
              <span className="event-time">{eventObj.time}</span>
            </div>
            <button className="delete-event-btn" onClick={() => deleteEvent(event, eventObj)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
          </div>
        ))}
      </div>
    ))
  ) : (
    <div className="no-event">
      <h3>Não Há Pesca Agendada</h3>
    </div>
  )}
</div>
 
        {showAddEvent && (
          <div className="add-event-wrapper active">
            <div className="add-event-header">
              <div className="title">Add Event</div>
              <FontAwesomeIcon icon={faTimes} className="close" onClick={() => setShowAddEvent(false)} />
            </div>
            <div className="add-event-body">
              <div className="add-event-input">
                <input
                  type="text"
                  placeholder="Event Name"
                  className="event-name"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                />
              </div>
              <div className="add-event-input">
                <input
                  type="time"
                  placeholder="Event Time From"
                  className="event-time-from"
                  value={eventForm.from}
                  onChange={(e) => setEventForm({ ...eventForm, from: e.target.value })}
                />
              </div>
              <div className="add-event-input">
                <input
                  type="time"
                  placeholder="Event Time To"
                  className="event-time-to"
                  value={eventForm.to}
                  onChange={(e) => setEventForm({ ...eventForm, to: e.target.value })}
                />
              </div>
            </div>
            <div className="add-event-footer">
              <button className="add-event-btn" onClick={addEvent}>Agendar</button>
            </div>
          </div>
        )}
        <button className="add-event" onClick={() => setShowAddEvent(true)}>Agendar Pesca</button>
      </div>
    </div>
  );
};
 
export default Calendar;