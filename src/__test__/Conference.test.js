import Conference from "../Conference.js";
import Person from "../Person.js";


describe("Conference Class", () => {
    let gameCon;
    let person1;
    beforeEach(() => {
        gameCon = new Conference("tableTopGames", 5)
        person1 = new Person("Marlon","Sanchez","Trugrey@gmail.com")
    })

    it("The register method should push the new person into the attendees array", () => {
        gameCon.register(person1)
        expect(gameCon.attendees.length).toEqual(1)
    })

    it("The register method returns true if the person was registered", () => {
        expect().toEqual(true)
    })

    // it("The register method checks for duplicate registry via emailAddress", () => {
    //     expect()
    // })

    // it("The register method checks to see if the conference is full, and if so rejects the registry and returns false", () => {
    //     expect()
    // })
})