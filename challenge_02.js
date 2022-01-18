/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

 // Deklaration
let Name;
let Alter;
let Milch;
let Saft;
let Cola;
let Wein;

//Wertzuweisung
Name = (prompt("Geben sie den Namen ein: "));
Alter = Number (prompt("Geben sie der alter ein: "));

// Berechnung
Milch = (Alter <= 5);
Saft = (Alter >= 6 & Alter <= 12);
Cola = (Alter >= 13 & Alter <= 17);
Wein = (Alter >= 18);

// Ausgabe


if (Alter <= 5) 
{
    console.log(Name + " trinkt Milch");
}

else if (Alter >= 6 & Alter <= 12) 
    {
        console.log(Name + " trinkt Saft");
    }
else if (Alter >= 13 & Alter <= 17)
    {
        console.log(Name + " trinkt Cola");
}
else if (Alter >= 18) 
{
    console.log(Name + " trinkt Wein");
} 
