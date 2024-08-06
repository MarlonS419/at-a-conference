import Conference from "./Conference.js";
import Event from "./Event.js";
import Person from "./Person.js";


let gameCon = new Conference("tableTopGames", 5)
let person1 = new Person("Marlon","Sanchez","Trugrey@gmail.com")
let host = new Person("Nick", "Kwiatkowski","awesomeNick@email.com")
let dndEvent = new Event("Dnd", host)


gameCon.addEvents(dndEvent)

gameCon.register(person1)
console.log(person1)
console.log(dndEvent)
console.log(gameCon.summery())
console.log(gameCon)