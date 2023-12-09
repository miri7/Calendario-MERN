import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiStore = () =>{

    const dispatch = useDispatch();

    const {isDateModalOpen} = useSelector(state => state.ui)

    const onDateModal = () =>{
        dispatch(onOpenDateModal())
    }
    const onCloseModal = () =>{
        dispatch(onCloseDateModal())
    }

    return{
        //* propiedades
        isDateModalOpen,
        //*metodos
        onDateModal,
        onCloseModal
    }
}