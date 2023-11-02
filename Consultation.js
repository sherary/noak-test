const PatientQueue = require('./Patients');

class Consultation extends PatientQueue {
    constructor(availableDoctors, timeLimit) {
        super();
        this._minConsultationTime = 2;
        this._maxConsultationTime = 10;
        this._availableDoctors = availableDoctors == undefined || availableDoctors == null ? [] : availableDoctors;
        this._timeLimit = timeLimit == undefined || timeLimit == null ? 0 : timeLimit;
        this._isRoomAvailable = availableDoctors ? true : false;
        this._coolDown = timeLimit ? (timeLimit / 2).toFixed(0) : 0;
        this._consultedPatients = [];
    }

    checkType(variable, type) {
        if (typeof variable != type) {
            throw new Error("Please enter a string type");
        }
    }

    get allDoctors() {
        return this._availableDoctors;
    }

    get consultedPatients() {
        return this._consultedPatients;
    }

    set consultedPatients(name) {
        this.checkType(name, 'string')
        this._consultedPatients.push(name);
    }
}

module.exports = Consultation;