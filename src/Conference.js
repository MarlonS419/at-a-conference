
class Conference {
    constructor(name, maximumRegistrants) {
        this.name = name,
        this.maximumRegistrants = maximumRegistrants,
        this.attendees = [],
        this.ConferenceEvents = []
    }
    register(personObject) {
        // iterate thru each person in the array
        this.attendees.forEach(person => {
            // if the person's email is in the array already registered  is true
            if(personObject.emailAddress === person.emailAddress) {
                personObject.registered = true
            }
        })
        // if person is not in attendees registered is false
        if(personObject.registered === false) {
            // if the the maximun amount of spots is greater than 0
            if(this.maximumRegistrants > 0) {
                // push person into attendees
                this.attendees.push(personObject)
                // minus one from maximum spots
                this.maximumRegistrants--
                // change to true registered
                return personObject.registered = true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    addEvents(event) {
        this.attendees.forEach(attendee => {
            if(event.emailAddress === attendee.emailAddress) {
                this.ConferenceEvents.push(event)
            } else {
                return false
            }
        })
    }
    summery() {
        let summeryString = ""
        summeryString += `Welcome to ${this.name}\n\n`;
        summeryString += `There are this many attendees ${this.attendees.length}\n\n`;
        this.attendees.forEach(attendee => {
        summeryString += `${attendee.firstName} ${attendee.lastName}\n`
        });
        summeryString += `We have ${this.ConferenceEvents.length} events today\n\n`;
        this.ConferenceEvents.forEach((events) => {
            summeryString += `${events.title}\n ${events.facilitator.firstName}\n\n`
        })
        if(this.maximumRegistrants > 0) {
            summeryString += `The registry is still open for sign ups!`
        } else {
            summeryString += `Sorry folks we are at capacity!`
        }

        return summeryString
    }
}
export default Conference

