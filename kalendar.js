window.onload= function() {
    überschrift();
    kalendarInfotext();
}

function überschrift()
{
    //Variablen für überschrift
    let date= new Date ();
    let dateD = date.getDate();
    let monthD = date.getMonth ();
    let year = date.getFullYear ();
    //Hab ein wert für Constante gegeben, damit Monats wÜrde als Zahlen gezeigt 
    const monthName = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let monthInfo = (monthName[monthD]);
    
    
    
    //Hab ID für Variablen gegeben, damit ich die in HTML aufrufen könnte
    document.getElementById(`date`).innerHTML = dateD;
    document.getElementById(`month`).innerHTML = monthInfo;
    document.getElementById(`year`).innerHTML = year;
}

function kalendarInfotext()
{    
    //Variablen für infoText
    let date= new Date ();
    let dateD = date.getDate();
    let monthD = date.getMonth ();
    let year = date.getFullYear ();
    let weekdayD = date.getDay ();
    //Hab ein wert für Constante gegeben, damit Monats wÜrde als Text gezeigt
    const monthName = ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let monthInfo = (monthName[monthD]);
    //Hab ein wert für Constante gegeben, damit Wochentags wÜrde als Text gezeigt. Sonntag hat in getDay Wert von 0, es heißt Sonntag "erste Tag" in der Woche ist.
    const weekDayName = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let weekDayInfo = (weekDayName[weekdayD]);

    // let weekInMonth = date.getMonth ();
    // let holidayYesNoD;
    
    //Hab ID für Variablen gegeben, damit ich die in HTML aufrufen könnte
    document.getElementById(`infoDate`).innerHTML = dateD;
    document.getElementById(`infoMonth`).innerHTML = monthInfo;
    document.getElementById(`infoMonth2`).innerHTML = monthInfo;
    document.getElementById(`infoWeekday`).innerHTML = weekDayInfo;
    document.getElementById(`infoWeekday2`).innerHTML = weekDayInfo;
    document.getElementById(`infoYear`).innerHTML = year;
    document.getElementById(`infoYear2`).innerHTML = year;
// document.getElementById(`infoHowManyWeekInMonth`).innerHTML = weekInMonth;
// document.getElementById(`infoHoliday`).innerHTML = holidayYesNoD;
}
