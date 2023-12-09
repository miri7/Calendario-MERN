import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActivateEvent, onUpdateEvent } from '../store/calendar/calendarSlice'
import calendarApi from '../api/calendarApi'
import { convertEventsToDateEvents } from '../helpers/convertEventsToDateEvents'
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const {events,activeEvent}= useSelector(state =>state.calendar)
    const {user}= useSelector(state =>state.auth)
    const setActivateEvent = (calendarEvent) =>{
      dispatch(onSetActivateEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) =>{

      try {
              // Todo :update event
            if(calendarEvent.id){
              await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent)

            dispatch(onUpdateEvent({...calendarEvent,user}))
            return;
        }
          //creando
          const {data} = await calendarApi.post('/events',calendarEvent)
          dispatch(onAddNewEvent({...calendarEvent,id:data.evento.id,user}));
      } catch (error) {
        console.log(error);
        Swal.fire('Error al guardar', error.response.data.msg,'error');
      }
    
      
      
    }

    const startDeletingEvent = async() =>{
      // todo:llegar al backend
      
      try {
        await calendarApi.delete(`/events/${activeEvent.id}`)
      dispatch(onDeleteEvent())
      } catch (error) {
        console.log(error);
        Swal.fire('Error al eliminar', error.response.data.msg,'error');
      }
    }

    const startLoadingEvents = async() =>{
        try {

          const {data} = await calendarApi.get('/events');
          const event = convertEventsToDateEvents(data.eventos);
          dispatch(onLoadEvents(event))
          

        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error);
        }
    }

  return {

    //*propiedades 
    activeEvent,events,
    hasEventSelected:!!activeEvent,
    // *metodos
    setActivateEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }

}
