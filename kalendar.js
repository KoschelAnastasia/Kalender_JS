//Funktion Liste
window.onload= function() {
    überschrift();
    kalendarInfotext();
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
    //Dann wird Ergebnis durch 7 geteilt. Um "Runde" Zahl in Ergebnis zu bekommen, wird hier .ceil Methode verwendet 
    //Mithilfe Methode .ceil wird die Ergebnis immer nach oben "gerundet"   
    const numberOfWeekday = Math.ceil ((dateD -firstWeekdayOfMonth.getDate() + weekdayD)/7);
    document.getElementById(`infoNummberWeekday`).innerHTML = numberOfWeekday;
    
}


// Funktion für die Kalender Aufbau 
function calenderSheet () {
 
    //Variables für Datum
    letdaysTag = document.querySelector(".tag");
    let date = new Date();
    
    //get ID für Kalender aufbau (Monat, Jahr, button)
    let calenderBody = document.getElementById("kalenderblatt");
    calenderBody.style.display = "grid";
    calenderBody.style.gridTemplateColumns = "repeat(7, 1fr)";
    
    // Lehre variablen mit Klassen für Monat und Jahr
    let monthElement = document.getElementById(`monat`);
    let yearElement = document.getElementById(`jahr`);
    
    
    // Aufruf den Buttons in die Kalender Kopf.
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
        
        //Monat und Jahr Variablen bekommen ein wert. Für Monat ist es ein Text. Für Jahr Zahl
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
        
        
        //Eine Schleife die Zahlen des Vormonats definiert. Funktioniert volgendes: Die schleife "sagt", dass i gleich
        //  firsteDayOfWeek minus 1 ist. firstDayWeekder hat immer Wert von Erste Tag den gewünschte Monats, wenn wir substrahiren
        // eins, dann werden wir den letzte Tag vorherieges Monats bekommen. Und bis i großer oder genau so Hoh wie
        // 1, wird immer wieder von i 1 substrahieren
        for (let i = firstDayOfWeek - 1; i >= 1; i--) {
            
            const prevMonthDay = new Date(prevMonth);
            prevMonthDay.setDate(daysInPrevMonth - i + 1);
            const emptyCell = tagCellCreator(prevMonthDay, `otherMonth`);
            calenderBody.appendChild(emptyCell);
            
        }            
        
        
        //Eine Schleife die Zahlen des aktueles Monats definiert. Funktioniert volgendes: Den Tag hat wert von 1 (wert von 
        // Anfangs des Monats). Variebles allDayInMonth hat wert von gesamte Zahl von Tagen (wenn in Monat 30 Tagen; dann hat
        // Variables wert von 30) Und so lange bis erste Tag des Monats hat weniger oder genau so wert wie allDayInMonth
        // wird zum tag 1 summiert
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
        
                    
        }
    calcOsternDatum()
        
    // Ostern Formel 
    function calcOsternDatum() { 
            
        let date= new Date ();
        let dateD = date.getDate();
        let monthD = date.getMonth();
        let year = date.getFullYear();
        let globalDate = new Date (year, monthD, dateD);
        console.log("What is globalDate" + globalDate );
        console.log(`Year is: `  + year);
    
    
        // Diese Variablen werden verwendet, um des Datum des Frühlingvollmonds zu berechnen. Ostern ist ein Feiertag dessen Datum nicht fest schteht.
        // Die ist immer abhängig von Frühlingvollmonds. Alle Konstanten werden weiter in Gaußschen Formel verwendet, um die Länge der Mondmonate, Sonnentage
        // und andere Faktoren zu korregieren, um ein genaues Ostern Datum zu erhalten 
        const a = year % 19; 
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
    
        // Berechnen in welches Monat ist Ostern
         const month3 = Math.floor((h + l - 7 * m + 114) / 31) -1;
    
        // Ostern feiert man immer am Sonntag. Diese Formel berechnet es
        const date3 = ((h + l - 7 * m + 114) % 31) + 1;
    
        let osternDatum = new Date(year, month3 , date3);
    
        console.log(`Der Datum von Osternsonntag: ` + osternDatum);
    
    
    
    calcHessenFerien ()
    
    function calcHessenFerien () {
        
        let feiertagen = [
            { date: new Date (year, 0, 1), name: "Neujahrstag" },
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() -2), name: "Karfreitag"},
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate()), name: "Ostersonntag" },
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() + 1), name: "Ostermontag"},
            { date: new Date (year, 4, 1), name: "Tag der Arbeit"},
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() + 39), name: "Christi Himmelfahrt"},
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() + 49), name: "Pfingstsonntag"} ,
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() + 50), name: "Pfingstmontag"},
            { date: new Date (year, osternDatum.getMonth(), osternDatum.getDate() + 60), name: "Fronleichnam"} ,
            { date: new Date (year, 9, 3), name: "Tag der Deutschen Einheit"},
            { date: new Date (year, 11, 25), name: "1. Weihnachtsfeiertag"},
            { date: new Date (year, 11, 26), name: "2. Weihnachtsfeiertag"},  
            {date: new Date (year, 7, 29), name: "Test Datum"}
    
                        ];  
            console.log(`Es ist ist: ` + feiertagen[1].date);
            console.log(`Und das ist: ` + feiertagen[1].name);
            
        

        for (let i=0; i< feiertagen.length; i++){
            if( globalDate.getTime() == feiertagen[i].date.getTime()){
                
                document.getElementById(`infoHoliday`).innerHTML = `Es handelt sich um ${feiertagen[i].name} einen gesetzlichen Feiertag`;
                tagCell.classList.add(`feiertag`);
                
            }
            else{
                document.getElementById(`infoHoliday`).innerHTML = `Es handelt sich nicht um einen gesetzlichen Feiertag`;
            } 
        }
    }   
    }   
    
    
    //Funktion, die "tag" Zelle erstellt

    function tagCellCreator (day, otherMonth, today, feiertag) {

        let day2 = new Date(day);

        const tagCell = document.createElement("div");

        tagCell.classList.add("tag");

        tagCell.textContent = day2.getDate();

 
        if (today) {

            tagCell.classList.add("today");
        
        }

        
        if (otherMonth) {
            
            tagCell.classList.add("otherMonth");
            
        }
        
        
        
        if (day2.getDay() == 0 || day2.getDay() == 6) {
            
            tagCell.classList.add("weekend");
            
        }    
        
        if (feiertag) {
            tagCell.classList.add("feiertag"); 
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



