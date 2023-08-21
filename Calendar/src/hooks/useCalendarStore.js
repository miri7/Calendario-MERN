import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { onAddNewEvent, onSetActivateEvent } from '../store/calendar/calendarSlice'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const {events,activeEvent}= useSelector(state =>state.calendar)
    const setActivateEvent = (calendarEvent) =>{
      dispatch(onSetActivateEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) =>{
      // TODO : llegar al backend

      // Todo bien
      if(calendarEvent._id){
          //actualizando
      }else{
        //creando
        dispatch(onAddNewEvent({...calendarEvent,_id:new Date().getTime()}));
      }
    }

  return {

    //*propiedades 
    activeEvent,events,
    // *metodos
    setActivateEvent,
    startSavingEvent
  }

}
