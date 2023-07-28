window.onload=function main()

{
    let date= new Date ();
    //Variablen für Text und Kalendar
    let dateD = date.getDate();
    let weekdayD = date.getDay ();
    let weekInMonth = date.getMonth ();
    let monthD = date.getMonth ();
    let year = date.getFullYear ();
    let holidayYesNoD;
    //Code, in der Variablen für Text und Kalendar verwenden werden
    document.getElementById(`date`).innerHTML = dateD;
}
