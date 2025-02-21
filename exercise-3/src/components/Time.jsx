function Time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    let amPm = hour >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hour = hour % 12 || 12;

    return(
        <h2>
            {hour}:{minute}:{second} {amPm}
        </h2>
    );
}

export default Time;