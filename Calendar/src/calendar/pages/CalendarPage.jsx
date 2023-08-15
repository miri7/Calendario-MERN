import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, Navbar } from '../components'
import { localizer} from '../../helpers/calendarLocalizer'
import { addHours } from 'date-fns'
import { getMessagesES } from '../../helpers/getMessages'
import { useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'

const events = [{
  title:'cumpleaños del jefe',
  notes:'hay que comprar el pastel',
  start:new Date(),
  end:addHours(new Date(),2),
  bgColor:'#fafafa',
  user:{
    _id:'123',
    name:'fernando'
  }
}]


export const CalendarPage = () => {
  const [lastView,setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event,start,end,isSelected) =>{
    console.log({event,start,end,isSelected});
    const style = { 
      backgroundColor:'#347CF7',
      borderRadius:'0px',
      opacity:0.8,
      color:'white'
    }
    return{
      style
    }
  }

  const onDoubleClick =(event) =>{
    console.log({doubleClick:event});
  }

  const onSelect =(event) =>{
    console.log({click:event});
  }

  const onViewChanged = (event) =>{
    localStorage.setItem('lastView',event)
  }
  return (
    <>
      <Navbar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
    />
    <CalendarModal/>
    </>
  )
}
