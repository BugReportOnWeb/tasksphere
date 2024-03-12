type TaskFormProps = {
    isPopupOpen: boolean;
    closePopup: () => void;
}

const TaskForm = ({ isPopupOpen, closePopup }: TaskFormProps) => {
    return (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isPopupOpen ? 'block' : 'hidden'} border border-blue-500 p-5 cursor-pointer bg-blue-500`} onClick={closePopup}>TaskPopup</div>
    )
}

export default TaskForm;
