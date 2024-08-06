class Event {
    constructor(title, facilitator, startTime, endTime) {
        this.title = title,
        this.facilitator = facilitator,
        this.startTime = new Date(startTime),
        this.endTime = new Date(endTime)
    }

}

export default Event