import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, Navbar } from '../components'
import { localizer} from '../../helpers/calendarLocalizer'

import { getMessagesES } from '../../helpers/getMessages'
import { useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore } from '../../hooks/useUiStore'
import { useCalendarStore } from '../../hooks/useCalendarStore'
import { FabAddNew } from '../components/FabAddNew'




export const CalendarPage = () => {
  const {onDateModal,onCloseDateModal}= useUiStore()

  const {events,setActivateEvent} = useCalendarStore();
  const [lastView,setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event,start,end,isSelected) =>{
    
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
    
    onDateModal()
  }

  const onSelect =(event) =>{
    setActivateEvent(event);
  
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
    <FabAddNew/>
    </>
  )
}
