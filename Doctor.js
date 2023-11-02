class Doctor {
    constructor(consultTime) {
        this._consultTime = consultTime;
    }

    get consultTime() {
        return this._consultTime;
    }

    set consultTime(minutes) {
        this._consultTime = minutes
    }
}

module.exports = Doctor;