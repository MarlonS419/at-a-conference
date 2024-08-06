You've been tasked with building the system that supports the latest tech conference! In this challenge, you'll create a system of classes that will need to work together. Writing automated tests will help to guide your implementation.

The steps and stories in this assignment are meant to be incremental. You may need to refactor or revisit you did in previous steps to finish the assignment. This process of refactoring is as important as as finishing all of the steps!

## Getting Started

```no-highlight
et get at-a-conference
cd at-a-conference
yarn install
```

## The Assignment

Build out the application in accordance with the user stories and acceptance criteria.

Ensure that for every feature, a corresponding Jest test is written. You may decide to:

1. write all of the tests before beginning on implementation
2. write a test for a method, then write the corresponding code to pass the test. Then move on to the next step
3. write out the implementation for the assignment first, and then go back through and add tests for each method

Approach #1 is more difficult, and we recommend approach #2. If you are still getting used to Jest, and wish to focus first on implementation, then you may decide to try approach #3.

## Core User Stories

### Create a Conference

We'll need to create Conference objects in order to help us plan the event.

```no-highlight
As a conference founder
I want to create a new conference
So that people can attend it
```

Create a `Conference` class, and consider the following details.

Acceptance Criteria:

- A conference should be initialized with a name, and that name should be stored as a property on that class
- A conference should be initialized with a maximum number of registrants, and `maximumRegistrants` should be a property on that class
- A new conference should have a default property of a list of attendees
- A new conference should have a default property of a list of conference events

**Tip:** generally when a "list" is asked for, the data type for that property is an array

### Register for the Conference

Now that the conference is created, it's time to register attendees for the conference! We will track/create our attendees using a `Person` class.

```no-highlight
As a conference founder
I want people to register for my conference
So that we can all get together and talk about software
```

Acceptance Criteria:

- A `Person` object should be created with arguments of first name, last name, and email address, and those should be saved as properties
- An instance of a conference has a `register` method. This method should accept a Person object as an argument
- the `register` method should add the new person to the list of attendees for the conference
- The `register` method also should return true if the person was successfully added to the list

**Note:** no validations are needed yet for the `register` method

### Can't Register Twice

```no-highlight
As a conference founder
I want to ensure that a person is never registered twice
So that the registration count is not inflated
```

Acceptance Criteria:

- When registering a person for a conference, ensure that a person is not registered twice
- If someone attempts to `register` for a conference as a person with an email address that's already registered, they are not added to the list, and the `register` method returns false

### Can't Register if the Conference is Full

```no-highlight
As an overbooked conference administrator
I don't want interested attendees to register if the conference is full
So that I can comply with building regulations
```

Acceptance Criteria:

- If someone attempts to `register` for a conference that already has reached the maximum number of registrants, they are not added to the list, and the `register` method returns false

### Create a New Conference Event

Every one of our amazing conferences has numerous events and panels that we need to track. For our purposes, let's create an `Event` class that tracks each of these events and panels.

```no-highlight
As a conference founder
I want to create a new event for a conference
So that people can attend the event
```

Acceptance Criteria:

- Create a `Event` class
- An event must be created with a title, and a `Person` object who will serve as the facilitator of the event. Save these as properties
- Create an `addEvent` instance method for conferences. It should accept a new `Event` object as its only argument. This method adds the event to the list of the conference's events

### Print Conference Summary

Let's create a `summary` method that gives a digest of all of our Conference's details

```no-highlight
As a conference founder
I want to print a conference summary
So that I can determine how epic my conference is going to be
```

- Create a `summary` method. It should accept no arguments
- The summary should return a string with the conference name, the number of registrants, and each of their first name and last name
- The summary should include the number of events, their titles, and each of their facilitator's names
- The summary should indicate if registration is still open - registration is _open_ if the conference still has available seats (the maximum number of registrants have not been reached). If the conference is at capacity, registration is _closed_

**Note:** this will be a large method. Take it one step, or one bullet point, at a time!

## Non-Core User Stories

You may consider these stories as "bonus". Know that some will be more difficult than the core user stories, and others may even require using the internet as a resource to look up helpful methods.

### Require Events to Be Facilitated by a Registrant

```no-highlight
As a conference founder
I want to ensure our event facilitators are registrants
So that we have an accurate headcount
```

Acceptance Criteria:

- If I attempt to `addEvent` and the `Event` is being facilitated by a Person whose email address is not found on the list of attendees, the function should return `false` and the event should not be added to the list
- Ensure that there is a test that is setup to check the ideal/happy path, and the error/sad path for this feature

### Add Start Time and End Time to Event

```no-highlight
As a conference founder
I want to manage the event schedule
So that I can coordinate what events are happening when
```

Acceptance Criteria:

- When I create a new event, I must supply a start time and an end time
- The start and end times should be added to the conference summary
- Use the JavaScript Date object

### Sort Event Summary by Start Time

```no-highlight
As a conference registrant
I want to see a chronological list of events
So that I can follow the schedule
```

Acceptance Criteria:

- The conference summary produced in a previous core user story should list out the events starting with the earliest start time and ending with the latest start time
- You will likely need to do research on the JS array `sort` method to get this feature working

### Can't Add Event that Overlaps with Another

```no-highlight
As a conference founder
I want to ensure events don't overlap
So that attendees can attend all of the events
```

Acceptance Criteria:

- When I attempt to register an event that overlaps with the time of another event, the `addEvent` instance function should return `false` and the event should not be added to the list
