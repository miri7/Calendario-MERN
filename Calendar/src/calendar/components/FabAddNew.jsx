import React from 'react'
import { useUiStore } from '../../hooks/useUiStore'
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { addHours } from 'date-fns';

export const FabAddNew = () => {
    const {onDateModal} = useUiStore();
    const {setActivateEvent} = useCalendarStore(); 

    const handleClickNew = () => {
        setActivateEvent({
        
                title:'',
                notes:'',
                start:new Date(),
                end:addHours(new Date(),2),
                bgColor:'#fafafa',
                user:{
                  _id:'123',
                  name:'fernando'
                }
            
        })
        onDateModal();
    }
  return (
    <button
        className='btn btn-primary fab'
        onClick={handleClickNew}
    >
       <i className='fas fa-plus'></i> 
    </button>
  )
}
