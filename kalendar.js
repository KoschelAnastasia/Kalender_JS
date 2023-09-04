//Funktion Liste
window.onload= function() {
    überschrift();
    kalendarInfotext();
    wIMonth ();
    calenderSheet ();
}

//Globale Variablen 
let date= new Date ();
let dateD = date.getDate();
let monthD = date.getMonth ();
let year = date.getFullYear ();
let weekdayD = date.getDay ();
let feiertagen;







//Funktion für oberes Überschrift
function überschrift()
{


    //Zueignung ein wert für Konstanten, damit Monats würde als Zahlen gezeigt 
    const monthName = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let monthInfo = (monthName[date.getMonth()]);

    //Zueignung einer ID zu Variablen, damit die in HTML aufgerufen werden können
    document.getElementById(`date`).innerHTML = date.getDate();
    document.getElementById(`month`).innerHTML = monthInfo;
    document.getElementById(`year`).innerHTML = date.getFullYear();
}

//Funktion für Information Kapitel
function kalendarInfotext()
{    
    

    //Zueignung ein wert für Konstanten, damit Monats wurde als Text gezeigt.
    const monthName = ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let monthInfo = (monthName[date.getMonth()]);

    //Zueignung ein wert für Konstanten, damit Wochentags wurde als Text gezeigt. Sonntag hat in getDay Wert von 0, es heißt Sonntag "erste Tag" in der Woche ist.
    const weekDayName = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let weekDayInfo = (weekDayName[date.getDay()]);
    // let weekInMonth = date.getMonth ();
    

    //Zueignung einer ID zu Variablen, damit die in HTML aufgerufen werden können
    document.getElementById(`infoDate`).innerHTML = date.getDate();
    document.getElementById(`infoMonth`).innerHTML = monthInfo;
    document.getElementById(`infoMonth2`).innerHTML = monthInfo;
    document.getElementById(`infoWeekday`).innerHTML = weekDayInfo;
    document.getElementById(`infoWeekday2`).innerHTML = weekDayInfo;
    document.getElementById(`infoYear`).innerHTML = date.getFullYear();
    document.getElementById(`infoYear2`).innerHTML = date.getFullYear();

}


//Ein Algorithmus zum Zählen von Wiederholungen von Wochentagen
function wIMonth () {
    
    
   
    const firstWeekdayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

    //While Schleife sucht erste Tag in Monat der gleiche Wochen Tag hat wie weekdayD    
    while (firstWeekdayOfMonth.getDay() !== date.getDay()){
        firstWeekdayOfMonth.setDate(firstWeekdayOfMonth.getDate()+1)
    }
    
    //Matematische Formel funkzionirt auf folgende Weise:
    //dateD hat wert von heutigen Tag. weekdayD hat wert von Wochentag (wo: 0 ist Sonntag, 1 ist Montag usw)
    //firstWeekdayOfMonth hat wert von erste Tag in Monat der gleiche Wochen Tag hat wie weekdayD
    //Matimatische Formel berechnet Differenz zwischen dateD und firstWeekdayOfMonth und addiert weekdayD.
    //Dann wird Ergebnis durch 7 geteilt. Um "Runde" Zahl in Ergebnis zu bekommen, wird hier .ceil Methode verwendet 
    //Mithilfe Methode .ceil wird die Ergebnis immer nach oben "gerundet"   
    const numberOfWeekday = Math.ceil ((date.getDate() -firstWeekdayOfMonth.getDate() + 7)/7);
    document.getElementById(`infoNummberWeekday`).innerHTML = numberOfWeekday;
    
}


// Funktion für die Kalender Aufbau 
function calenderSheet () {
 
    //Variables für Datum
    letdaysTag = document.querySelector(".tag");
    
    
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

    calcOsternDatum()
        
    // Ostern Formel 
    function calcOsternDatum() { 
            
        console.log("What is Global Date " + date );
        console.log(`Year is: `  + date.getFullYear());
    
    
        // Diese Variablen werden verwendet, um des Datum des Frühlingvollmonds zu berechnen. Ostern ist ein Feiertag dessen Datum nicht fest schteht.
        // Die ist immer abhängig von Frühlingvollmonds. Alle Konstanten werden weiter in Gaußschen Formel verwendet, um die Länge der Mondmonate, Sonnentage
        // und andere Faktoren zu korregieren, um ein genaues Ostern Datum zu erhalten 
        const a = date.getFullYear() % 19; 
        const b = Math.floor(date.getFullYear() / 100);
        const c = date.getFullYear() % 100;
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
         const monthOstern = Math.floor((h + l - 7 * m + 114) / 31) -1;
    
        // Ostern feiert man immer am Sonntag. Diese Formel berechnet es
        const dateOstern = ((h + l - 7 * m + 114) % 31) + 1;
        
        // Die Datum von Osternsonntag
        let osternDatum = new Date(date.getFullYear(), monthOstern, dateOstern);
    
        console.log(`Der Datum von Osternsonntag: ` + osternDatum);
    
        // Aufruf Feiertagerechnung Funktion
        calcHessenFerien ()
        
    // Funktion, die alle Feiertagen in Hessen deviniert oder berechnet 
    function calcHessenFerien () {

        let localDate = new Date (date.getFullYear(), date.getMonth(), date.getDate());    

        // Feiertagen Arrey
        feiertagen = [
            { date: new Date (date.getFullYear(), 8, 1), name: "Test Datum"},
            { date: new Date (date.getFullYear(), 0, 1), name: "Neujahrstag" },
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() -2), name: "Karfreitag"},
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate()), name: "Ostersonntag" },
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() + 1), name: "Ostermontag"},
            { date: new Date (date.getFullYear(), 4, 1), name: "Tag der Arbeit"},
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() + 39), name: "Christi Himmelfahrt"},
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() + 49), name: "Pfingstsonntag"} ,
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() + 50), name: "Pfingstmontag"},
            { date: new Date (date.getFullYear(), osternDatum.getMonth(), osternDatum.getDate() + 60), name: "Fronleichnam"} ,
            { date: new Date (date.getFullYear(), 9, 3), name: "Tag der Deutschen Einheit"},
            { date: new Date (date.getFullYear(), 11, 25), name: "1. Weihnachtsfeiertag"},
            { date: new Date (date.getFullYear(), 11, 26), name: "2. Weihnachtsfeiertag"}
    
                        ];  

            // Consol.log um zu Prufen ob alles richtig ist
            console.log(`Es ist ist: ` + feiertagen[4].date);
            console.log(`Und das ist: ` + feiertagen[4].name);
            console.log(`Es ist ist: ` + feiertagen[7].date);
            console.log(`Und das ist: ` + feiertagen[7].name);

            // Schleife, die durch Arrey geht und pruft, ob Heute ein Feiertag ist. Wenn das wahr ist, dann in Information wird 
            //"Es handelt sich um *Name der Feiertags* einen gesetzlichen Feiertag" stehen. Wenn falsch, dann "Es handelt sich nicht um einen gesetzlichen Feiertag"
            for (let i=0; i< feiertagen.length; i++){

                let result = null;                

                if( localDate.getDate() == feiertagen[i].date.getDate() && localDate.getMonth() == feiertagen[i].date.getMonth() && localDate.getFullYear() == feiertagen[i].date.getFullYear()){
                    

                    result = feiertagen[i];
                    

                    console.log("feiertag Name " + feiertagen[i].name);
                    
                    document.getElementById(`infoHoliday`).innerHTML = `Es handelt sich um ${feiertagen[i].name} einen gesetzlichen Feiertag`;
                    

                    
                    break;                
                }

            
                else{
                    document.getElementById(`infoHoliday`).innerHTML = `Es handelt sich nicht um einen gesetzlichen Feiertag`;
                } 
        }
        }   
        
        // die Kalendar wird neu aufgebaut
        calenderRender()
    } 
    
    // Aufruf den Funktion, die Kalender rendert
    calenderRender ()
    
    //Render Funktion    
    function  calenderRender () {
        

        // lockal Variablen
        let dateD = date.getDate();
        let monthD = date.getMonth();
        let year = date.getFullYear ();
        localDate = new Date (date.getFullYear(), date.getMonth(), date.getDate());
        
        
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
        let lastDayOfWeek = lastDayOfMonth.getDay();
        
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
            
            // Schleife die sucht heutigen Tag und giebt ein Klass
            if (dateD == tag && monthD == date.getMonth() && year == date.getFullYear()){
                
                
                tagCell.classList.add(`today`);
                
            }

            // Schleife, die ermöglicht die Nutzer den Tag in die Kalender wahlen auf "click"
            tagCell.addEventListener ("click", function(){
            
                date = new Date (date.getFullYear(), date.getMonth(), tag);
                console.log("tag "+ tag);
                console.log("date in function "+ date);

                überschrift(); kalendarInfotext(); wIMonth (); calcOsternDatum(); calenderRender (date); 
            })

            // Scleife, die Feiertagen des Monats sucht und die ein Klass gibt. Die Schleife hatte frühe nicht funktionirt.
            //Es pasirte wegen "sichtbarkeit" Problem. Den feiertag Arrey war in eine andere Funktion was sie unsichtbar für diese machte.
            // Damit sie sichtbar wird, müsste ich ganz oben die "lehre" Variable feiertagen divenieren
            for (let i=0; i< feiertagen.length; i++){

                let result = null;                

                if( day.getDate() == feiertagen[i].date.getDate() && day.getMonth() == feiertagen[i].date.getMonth() && day.getFullYear() == feiertagen[i].date.getFullYear()){
                    

                    result = feiertagen[i];                   

                    tagCell.classList.add(`feiertag`);
                    break;                
                }

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
      
    
    
    //Funktion, die Zelle erstellt

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
        überschrift(); kalendarInfotext(); wIMonth (); calcOsternDatum(); calenderRender (date);    
    });
    buttonRechtsMonat.addEventListener ("click", function (){
        date.setMonth(date.getMonth() +1);
        überschrift(); kalendarInfotext(); wIMonth (); calcOsternDatum(); calenderRender (date);
    });
    buttonLinksJahr.addEventListener("click", function(){
        date.setFullYear(date.getFullYear() - 1);
        überschrift(); kalendarInfotext(); wIMonth (); calcOsternDatum(); calenderRender (date);
    });
    buttonRechtsJahr.addEventListener ("click", function(){
        date.setFullYear(date.getFullYear() +1);
        überschrift(); kalendarInfotext(); wIMonth (); calcOsternDatum(); calenderRender (date);
    });
    
}

// function parsUrl (url) {
    

    // Url prufen
    //  console.log("Information: ", url);

    // Information Satz die wir auf die Seite bekommen bis information von Wikipedia wird hochgeladen
    // document.getElementById("Nachricht").textContent = "Historische Ereignisse des Tages wird in Kürze von Wikipedia hochgeladen. Versprochen ;)";

    // Eine Metode, die eine  HTTP-Anfrage an die angegebene URL ausführt, um Daten abzurufen
    // fetch(url)

    // Diese Teil von Code  verarbeitet Antwort von Server. Metode .then wird benutzt um "Aktionen" nach einer ervolgreichen "Antwort" durchzufüren
    // .then ((response) => {

    // "Antwort" von Server wird in Text konvertiert, damit wir weiter bearbeiten könnnen 
    //     return response.text();
    // })

    // 

    // Diese Teil von Code arbeitet mit unsere HTML und wird benutzt um geladene Information von Wikiseite zu bearbeiten
    // .then((html){

        //diese Konstante bekommt ein link auf ein Element mit WikiDatei Indifikator. wikiDatei ist ein Element, der sich in
        //Kalender mit Historische Ereignisse befindet (bei mir in HTML schau auf Zeile: 63)
        // const wikipediaDateiDiv = document.getElementById ("wikiDatei");

        //Ein Objekt DOMParser wird erstellt, der wird uns helfen den empfangenen HTML-code zu analysieren 
        // let parser = new DOMParser();

        // Mit Hilfe von DOMParser, HTML-code wird in eine DOM-Struktur (Document Object Model) konvertiert
        // let doc =parser.parseFromString(html, `text/html`);

        
        //remove from Wiki HTML images
        // let images = doc.querySelectorAll('figure');
        // images.forEach(figure => figure.parentNode.removeChild(figure)); 

        // let logo = doc.querySelectorAll('img');
        // logo.forEach(img => img.parentNode.removeChild(img));
    // })
// }


