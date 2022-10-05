import bugModel from '../Models/bugModel'

// Returns a sorted list of all existing bugs
export function retreiveBugs() {
    let data = [];
    data.push(new bugModel({
        _id: 1,
        name: 'Crash on Load',
        details: 'Crashes after 3 seconds',
        steps: 'Run Program',
        version: '2.0',
        assigned: "Dimitry",
        creator: 'Dimitry',
        priority: 1,
        time: '18:53'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'Casting Error',
        details: 'Wrong Object casts',
        steps: 'Open main.py and scroll down to line 538. The casts for the created Objects are wrong.',
        version: '1.0',
        assigned: "Dimitry",
        creator: 'Dimitry',
        priority: 3,
        time: '12:35'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'TITLE',
        details: 'DETAILS',
        steps: 'STEPS',
        version: 'VERSION',
        assigned: "ASSIGNED",
        creator: 'CREATOR',
        priority: 2,
        time: 'TIME'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'TITLE',
        details: 'DETAILS',
        steps: 'STEPS',
        version: 'VERSION',
        assigned: "ASSIGNED",
        creator: 'CREATOR',
        priority: 2,
        time: 'TIME'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'TITLE',
        details: 'DETAILS',
        steps: 'STEPS',
        version: 'VERSION',
        assigned: "ASSIGNED",
        creator: 'CREATOR',
        priority: 3,
        time: 'TIME'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'TITLE',
        details: 'DETAILS',
        steps: 'STEPS',
        version: 'VERSION',
        assigned: "ASSIGNED",
        creator: 'CREATOR',
        priority: 2,
        time: 'TIME'
    }))
    data.push(new bugModel({
        _id: 2,
        name: 'TITLE',
        details: 'DETAILS',
        steps: 'STEPS',
        version: 'VERSION',
        assigned: "ASSIGNED",
        creator: 'CREATOR',
        priority: 1,
        time: 'TIME'
    }))
    let sorted = data.sort((a, b) =>{
        return a.priority - b.priority;
    })
    return sorted;
}