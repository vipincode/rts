const EventComponent: React.FC = () => {
    // `event: React.ChangeEvent<HTMLInputElement> ` this is a type annotation [apply on , input textarea, checkboxes, radio.]
    // For this we can get `event.target..` etc.
    // There of a lots of type, ex. form submission, drag event, change event.
    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(event)
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }
    return(
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>
                <h3>Drag me!</h3>
            </div>
        </div>
    )
}

export default EventComponent;