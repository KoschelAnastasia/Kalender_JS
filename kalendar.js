//Funktion Liste
window.onload= function() {
    überschrift();
    kalendarInfotext();
    holidays();
    wIMonth ();
    calenderSheet ();
    

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
    
    //get ID für Kalender aufbau (Monat, Jahr, button)
    let calenderBody = document.getElementById("kalenderblatt");
    calenderBody.style.display = "grid";
    calenderBody.style.gridTemplateColumns = "repeat(7, 1fr)";
    
    
    let monthElement = document.getElementById(`monat`);
    let yearElement = document.getElementById(`jahr`);
    
    let buttonLinksMonat = document.getElementById(`buttonLinksMonat`);
    let buttonRechtsMonat = document.getElementById(`buttonRechtsMonat`);
    let buttonLinksJahr = document.getElementById(`buttonLinksJahr`);
    let buttonRechtsJahr = document.getElementById(`buttonRechtsJahr`);
    
    calenderRender (date)
    
    //Render Funktion    
    function  calenderRender (date) {
        
        let dateD = date.getDate();
        let monthD = date.getMonth();
        let year = date.getFullYear ();
        let date2 = new Date(year, monthD, dateD);
        
        
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
        const monthName = ["Jan.", "Feb.", "März", "Apr. ", "Mai", "Jun.", "Jul.", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."];
        let textMonth = (monthName[monthD]);

        monthElement.textContent = (textMonth);
        yearElement.textContent = (date.getFullYear());

        //Operation, die löscht Inhalt, befor ein neues zu schreiben
        calenderBody.innerHTML = "";

        //Konstanten die Datum für lezte Monat definieren
        const prevMonth = new Date(year, monthD - 1, 1);
        const prevMonthLastDay = new Date(year, monthD, 0);
        const daysInPrevMonth = prevMonthLastDay.getDate();

        //Konstanten die Datum für nächste Monat definieren
        const nextMonth = new Date(year, monthD + 1, 1);

        //
        
        //Eine Schleife die Zahlen des Vormonats definiert
        for (let i = firstDayOfWeek - 1; i >= 1; i--) {
                
                const prevMonthDay = new Date(prevMonth);
                prevMonthDay.setDate(daysInPrevMonth - i + 1);
                const emptyCell = tagCellCreator(prevMonthDay, `otherMonth`);
                calenderBody.appendChild(emptyCell);

        }            
        
        
        //Eine Schleife die Zahlen des aktueles Monats definiert
        for (let tag = 1; tag <= allDayInMonth; tag ++) {

            let day = new Date(date.getFullYear(), date.getMonth(), tag);

            const tagCell = tagCellCreator(day);

            calenderBody.appendChild(tagCell);

            
            if (dateD == tag && monthD == date2.getMonth() && year == date2.getFullYear()){
                     
                        
                tagCell.classList.add(`today`);
                             
            }
        }
        
       
        //Eine Schleife die Zahlen des nächstes Monats definiert
        for (let i = 1; i <= 7 - lastDayOfWeek; i++) {
            
            const nextMonthDay = new Date(nextMonth);
            nextMonthDay.setDate(i);
            const emptyCell = tagCellCreator(nextMonthDay, `otherMonth`);
            calenderBody.appendChild(emptyCell);
            
        }

    //     holidays()

    //     function holidays() { 

    // }
        
    }
    
    //Funktion, die "tag" Zelle erstellt

    function tagCellCreator (day, otherMonth, today) {

        let day2 = new Date(day);

        const tagCell = document.createElement("div");

        tagCell.classList.add("tag");

        tagCell.textContent = day2.getDate();

 
        if (today) {

            tagCell.classList.add("today");
        
        }

        // if (feiertag){
        //     tagCell.classList.add("feiertag"); 
        // }

        if (otherMonth) {

            tagCell.classList.add("otherMonth");
        
        }
       

        if (day2.getDay() == 0 || day2.getDay() == 6) {

            tagCell.classList.add("weekend");

        }    

 

        return tagCell;

       

    }
    
    
    calenderRender (date);
    
    //Botton
    buttonLinksMonat.addEventListener("click", function (){
        console.log(date);
        date.setMonth(date.getMonth() -1);
        calenderRender (date);    
    });
    buttonRechtsMonat.addEventListener ("click", function (){
        date.setMonth(date.getMonth() +1);
        calenderRender (date);
    });
    buttonLinksJahr.addEventListener("click", function(){
        date.setFullYear(date.getFullYear() - 1);
        calenderRender (date);
    });
    buttonRechtsJahr.addEventListener ("click", function(){
        date.setFullYear(date.getFullYear() +1);
        calenderRender (date);
    });
    
}


// Ostern Formel 
// funktion holidays(){ 

//     let date= new Date ();
//     let dateD = date.getDate();
//     let year = date.getFullYear();

//     In getMonth ist der Wert für Moaten ab 0 anfängt. Es heißt, dass Januar=0 und Dezember=11. Um Monate bequemer in Algorithmus eingeben zu können, würde getMonth + 1 geschrieben
//     let monthD = date.getMonth () + 1;
//     let holidayYesOrNo;
// const a = year % 4;
// const b = year % 7;
// const c = year % 19;
// const d = (19*c +24) % 30;
// const e = (2*a + 4*b + 6*d +5) % 7;
// const f = (c + 11*d + 22*e) % 451;

// const osternSonntag = Math.floor(22+d+e-7*f);
// if (osternSonntag > 31){
//         osternSonntag = Math.floor((22+d+e-7*f) -31); 
 
// }

// return osternSonntag;
// tagCell.classList.add(`osternSonntag`, `feiertag`);

// if ( dateD == 1 && monthD == 1 || osternSonntag - 2 == dateD || osternSonntag == dateD|| osternSonntag + 1 == dateD || dateD == 1 && monthD == 5 || osternSonntag + 39 == dateD || 
// osternSonntag + 49 == dateD || osternSonntag + 50 == dateD || osternSonntag + 60 == dateD || date == 3 && monthD == 10 || date == 25 && monthD == 12 || date == 26 && monthD == 12) {
//     tagCell.classList.add(`feiertag`);
//     holidayYesOrNo ="";
// }
// else {
//     holidayYesOrNo = "nicht"; 
// }

// document.getElementById(`infoHoliday`).innerHTML = holidayYesNoD;

//  }






