//Funktion Liste
window.onload= function() {
    überschrift();
    kalendarInfotext();
    holidays();
    wIMonth ();
    calenderSheet ();
    // monthYearView ();

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

function calenderSheet () {
 
    //Variables für Datum
    letdaysTag = document.querySelector(".tag");
    let date = new Date();
    let monthD = date.getMonth();
    let year = date.getFullYear ();

    //get ID für Kalender aufbau (Monat, Jahr, button)
    let calenderBody = document.getElementById("kalenderblatt");
    calenderBody.style.display = "grid";
    calenderBody.style.gridTemplateColumns = "repeat(7, 1fr)";


    let monthElement = document.getElementById(`monat`);
    let yearElement = document.getElementById(`jahr`);

    let buttonLinksMonat = document.getElementById(`buttonlinksmonat`);
    let buttonRechtsMonat = document.getElementById(`buttonrechtsmonat`);
    let buttonLinksJahr = document.getElementById(`buttonlinksjahr`);
    let buttonRechtJahr = document.getElementById(`buttonrechtjahr`);

    calenderRender ()

    //Render Funktion    
    function  calenderRender () {

        //Erste und letzte Tag des Monats in Kalendar Kopf werden richtig geschrieben   
        const firstDayofMonth = new Date (year, monthD, 1);
        const lastDayOfMonth = new Date (year, monthD +1, 0);
    
        //Variables, die gesamte Zahl von Tagen für bestimte Monat hat    
        let allDayInMonth = lastDayOfMonth.getDate();
    
        //Variables, die Wochentag von erste Tag des Monats hat    
        let firstDayOfWeek = firstDayofMonth.getDay();
        
        //Schleife "if" die für Sonntag wert 7 macht, damit die Woche von Montag anfangen könnte
        if (firstDayOfWeek == 0){
            firstDayOfWeek = 7;
        }

        //Variables, die Wochentag von letzte Tag des Monats hat
        lastDayOfWeek = lastDayOfMonth.getDay();

        //Schleife "if" die für Sonntag wert 7 macht, damit die Woche von Montag anfangen könnte
        if (lastDayOfWeek == 0){
            lastDayOfWeek = 7;
        }

        //Zueignung ein wert für Konstanten, damit Monats wurde als Text gezeigt.
        const monthName = ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        let textMonth = (monthName[monthD]);

        monthElement.textContent = (textMonth);
        yearElement.textContent = (date.getFullYear());

        //Operation, die löscht Inhalt, befor ein neues zu schreiben
        calenderBody.innerHTML = "";

        //Zuerst wird es eine Funktion für leere Zellen sein (die vor anfang des Monats stehen), aber später wird es die Zahlen des Vor- und nächsten Monats
        for (let i =1; i < firstDayOfWeek; i++) {
            const emptyCell = tagCellCreator("");
            calenderBody.appendChild(emptyCell);
        }
        for (let tag = 1; tag <= allDayInMonth; tag ++) {
            const tagCell = tagCellCreator(tag);
            calenderBody.appendChild(tagCell);
        }
        for (let i = lastDayOfWeek; i < 7; i++) {
            const emptyCell = tagCellCreator("");
            calenderBody.appendChild(emptyCell);
        }
    }
    
    //Funktion, die "tag" Zelle erstellt
    function tagCellCreator (tag) {
        const tagCell = document.createElement("div");
        tagCell.classList.add("tag");
        tagCell.textContent = tag;

        return tagCell;

    }
    calenderRender ();

    // buttonLinksMonat.addEventListener("click", function (){
    //     date.setMonth(date.getMonth() -1);
    //     calenderRender ();
    // });
    
}
// //Zueignung ein wert für Konstanten, damit Monats wurde als Text gezeigt.
// const weekDayName = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
// let text = (weekDayName[weekdayD]);
    // let tdTag = "";
    // for (let i=1; i<=lastDayOfMonth; i++) {
    //     // if (){}
    //     tdTag +=`<td>${i}</td>`;
    // }
    // daysTag.innerHTML = tdTag;
    // console.log(lastDayOfMonth);


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
