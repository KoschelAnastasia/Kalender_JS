//Funktion Liste
window.onload= function() {
    überschrift();
    kalendarInfotext();
    holidays();
    wIMonth ();
    monthYearView ();
    allDays ();
}
//Funktion für oberes Überschrift
function überschrift()
{
//Variablen für überschrift
    let date= new Date ();
    let dateD = date.getDate();
    let monthD = date.getMonth ();
    let year = date.getFullYear ();
//Zueignung ein wert für Konstanten, damit Monats würde als Zahlen gezeigt 
    const monthName = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let monthInfo = (monthName[monthD]);
//Zueignung einer ID zu Variablen, damit die in HTML aufgerufen werden können
    document.getElementById(`date`).innerHTML = dateD;
    document.getElementById(`month`).innerHTML = monthInfo;
    document.getElementById(`year`).innerHTML = year;
}
//Funktion für Information Kapitel
function kalendarInfotext()
{    
//Variablen für infoText
    let date= new Date ();
    let dateD = date.getDate();
    let monthD = date.getMonth ();
    let year = date.getFullYear ();
    let weekdayD = date.getDay ();
//Zueignung ein wert für Konstanten, damit Monats wurde als Text gezeigt.
    const monthName = ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let monthInfo = (monthName[monthD]);
//Zueignung ein wert für Konstanten, damit Wochentags wurde als Text gezeigt. Sonntag hat in getDay Wert von 0, es heißt Sonntag "erste Tag" in der Woche ist.
    const weekDayName = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let weekDayInfo = (weekDayName[weekdayD]);
    // let weekInMonth = date.getMonth ();
    
//Zueignung einer ID zu Variablen, damit die in HTML aufgerufen werden können
    document.getElementById(`infoDate`).innerHTML = dateD;
    document.getElementById(`infoMonth`).innerHTML = monthInfo;
    document.getElementById(`infoMonth2`).innerHTML = monthInfo;
    document.getElementById(`infoWeekday`).innerHTML = weekDayInfo;
    document.getElementById(`infoWeekday2`).innerHTML = weekDayInfo;
    document.getElementById(`infoYear`).innerHTML = year;
    document.getElementById(`infoYear2`).innerHTML = year;
// document.getElementById(`infoHowManyWeekInMonth`).innerHTML = weekInMonth;
}
// Ein Algorithmus der Prüft, ob Heute ein Feiertag ist
function holidays () {
    let date= new Date ();
    let dateD = date.getDate();
//In getMonth ist der Wert für Moaten ab 0 anfängt. Es heißt, dass Januar=0 und Dezember=11. Um Monate bequemer in Algorithmus eingeben zu können, würde getMonth + 1 geschrieben
    let monthD = date.getMonth () + 1;
    let holidayYesNoD;
//Alle Feiertage in Hessen für Jahr 2023
    if (dateD == 1 && monthD == 1 || dateD == 7 && monthD == 4 || dateD == 10 && monthD == 4 || dateD == 1 && monthD == 5 || 
        dateD == 18 && monthD ==5 || dateD == 29 && monthD == 5 || dateD == 8 && monthD ==6 || dateD == 3 && monthD == 10 ||
        dateD == 25 && monthD == 12 || dateD == 26 && monthD ==12 )
    then (holidayYesNoD = "")
    else (holidayYesNoD = "nicht") 
//Zueignung einer ID zu Variablen, damit die in HTML aufgerufen werden können
    document.getElementById(`infoHoliday`).innerHTML = holidayYesNoD;
}
//Ein Algorithmus zum Zählen von Wiederholungen von Wochentagen
function wIMonth () {
//Konstanten, die deffinieren wert von Heutigen Tag und Wochentag
    const date = new Date();
    const dateD = date.getDate();
    const weekdayD = date.getDay ();
    const firstWeekdayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
//While Schleife sucht erste Tag in Monat der gleiche Wochen Tag hat wie weekdayD    
    while (firstWeekdayOfMonth.getDate() !== weekdayD){
        firstWeekdayOfMonth.setDate(firstWeekdayOfMonth.getDate()+1)
    }
//Matematische Formel funkzionirt auf folgende Weise:
//dateD hat wert von heutigen Tag. weekdayD hat wert von Wochentag (wo: 0 ist Sonntag, 1 ist Montag usw)
//firstWeekdayOfMonth hat wert von erste Tag in Monat der gleiche Wochen Tag hat wie weekdayD
//Matimatische Formel berechnet Differenz zwischen dateD und firstWeekdayOfMonth und addiert weekdayD.
//Dann wird Ergebnis durch 7 geteilt, um "Runde" Zahl in Ergebnis zu bekommen, wird hier .ceil Methode verwendet 
//Mithilfe Methode .ceil wird die Ergebnis immer nach oben "gerundet"   
        const numberOfWeekday = Math.ceil ((dateD -firstWeekdayOfMonth.getDate() + weekdayD)/7);
        document.getElementById(`infoNummberWeekday`).innerHTML = numberOfWeekday;
        
}
function monthYearView (){

    let date = new Date();
    let monthD = date.getMonth();
    const monthHead = ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let todayMonth = (monthHead[monthD]);
    let year = date.getFullYear ();
    
    document.getElementById(`headMonth`).textContent = todayMonth;
    document.getElementById(`headYear`).innerHTML = year;

}

function allDays () {
    daysTag = document.querySelector(".tag");
    let date = new Date();
    let monthD = date.getMonth();
    let year = date.getFullYear ();
    
    let lastDayOfMonth = new Date(year, monthD +1, 0).getDate();
    let tdTag = "";
    for (let i=1; i<=lastDayOfMonth; i++) {
        tdTag +=`<td>${i}</td>`;
    }
    daysTag.innerHTML = tdTag;
    console.log(lastDayOfMonth);
}

// <tr class ="tag"></tr>
//                          <tr>
//                             <td class="tag lmonat">26</td>
//                             <td class="tag lmonat">27</td>
//                             <td class="tag lmonat">28</td>
//                             <td class="tag lmonat">29</td>
//                             <td class="tag lmonat">30</td>
//                             <td class="tag samstag">1</td>
//                             <td class="tag sonntag">2</td>
                            
//                         </tr>
//                         <tr>
//                             <td class="tag">3</td>
//                             <td class="tag">4</td>
//                             <td class="tag">5</td>
//                             <td class="tag">6</td>
//                             <td class="tag">7</td>
//                             <td class="tag samstag">8</td>
//                             <td class="tag sonntag">9</td>
//                         </tr>
//                         <tr>
//                             <td class="tag">10</td>
//                             <td class="tag">11</td>
//                             <td class="tag">12</td>
//                             <td class="tag">13</td>
//                             <td class="tag">14</td>
//                             <td class="tag samstag">15</td>
//                             <td class="tag sonntag">16</td>
//                         </tr>
//                         <tr>
//                             <td class="tag">17</td>
//                             <td class="tag">18</td>
//                             <td class="tag">19</td>
//                             <td class="tag">20</td>
//                         <td class="tag">21</td>
//                         <td class="tag samstag">22</td>
//                         <td class="tag sonntag">23</td>
//                     </tr>
//                     <tr>
//                         <td class="tag">24</td>
//                         <td class="tag">25</td>
//                         <td class="tag">26</td>
//                         <td class="tag">27</td>
//                         <td class="tag">28</td>
//                         <td class="tag samstag">29</td>
//                         <td class="tag sonntag">30</td>
//                     </tr>
//                     <tr>
//                         <td class="tag">31</td>
//                         <td class="tag nmonat">1</td>
//                         <td class="tag nmonat">2</td>
//                         <td class="tag nmonat">3</td>
//                         <td class="tag nmonat">4</td>
//                         <td class="tag nmonat samstag">5</td>
//                         <td class="tag nmonat sonntag">6</td>
//                     </tr> 
