const displayCurrentDayOfTheWeek = () => {
    const dayDisplay = document.getElementById('day-display');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();

    const currentDayName = daysOfWeek[currentDay];
    dayDisplay.textContent = `${currentDayName}`;
}
displayCurrentDayOfTheWeek();


const displayCurrentUTCTime = () => {
    const timeDisplay = document.getElementById('time-display');
    const currentTime = new Date().toUTCString();
    timeDisplay.textContent = `Current UTC Time: ${currentTime}`;
}

displayCurrentUTCTime();
setInterval(displayCurrentUTCTime, 1000);
