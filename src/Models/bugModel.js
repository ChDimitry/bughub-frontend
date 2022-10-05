// A model (interface) of a bug
// Used to describe the way a bug should be profiled
export default function bug(bug) {
    if (bug !== undefined) {
        this._id = bug._id;
        this.name = bug.name;
        this.details = bug.details;
        this.steps = bug.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
        this.time = bug.time;
    }
}