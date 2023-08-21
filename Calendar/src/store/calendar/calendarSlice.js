import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id:new Date().getTime(),
    title:'cumpleaños del jefe',
    notes:'hay que comprar el pastel',
    start:new Date(),
    end:addHours(new Date(),2),
    bgColor:'#fafafa',
    user:{
      _id:'123',
      name:'fernando'
    }
}

export const calendarSlice = createSlice({
name: 'calendar',
initialState: {
        events:[tempEvent],
        activeEvent:null
    },
reducers: {
    onSetActivateEvent: (state,{payload}) => {
           state.activeEvent = payload;
        },
    onAddNewEvent:(state,{payload})=>{
        state.events.push(payload);
        state.activeEvent = null;
    }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActivateEvent,onAddNewEvent } = calendarSlice.actions;