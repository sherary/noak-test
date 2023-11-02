class Patient {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class PatientQueue {
    constructor() {
        this.head = null;
        this.size = 0;
        this.patients = [];
    }

    checkIndexAvailability(index) {
        return index >= 0 && index <= this.size;
    }

    handleIndexError(index) {
        if (!this.checkIndexAvailability(index)) {
            throw new Error(`Not a valid index: ${index}\nActual size: ${this.size}`);
        }
    }

    updatePatients(index = null, name = null) {
        let arr = [];
        if (index != null) {
            for (let i = 0; i < this.patients.length; i++) {
                if (i !== index) {
                    arr.push(this.patients[i]);
                }
            }
        }
        
        if (name != null) {
            for (let i = 0; i < this.patients.length; i++) {
                if (this.patients[i] !== name) {
                    arr.push(this.patients[i]);
                }
            }
        }

        this.patients = arr;
        return this.patients;
    }

    addPatient(name) {
        const patient = new Patient(name);
        let current;

        if (this.head == null) {
            this.head = patient;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = patient;
        }

        this.size++;
    }

    insertAt(name, index) {
        this.handleIndexError(index);
    
        const patient = new Patient(name);
        if (index === 0) {
            patient.next = this.head;
            this.head = patient;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
    
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
    
            if (current) {
                patient.next = current.next;
                current.next = patient;
            } else {
                previous.next = patient;
            }
        }

        this.patients.splice(index, 0, name);
        this.size++;
    }           
    
    push(name) {
        return this.insertAt(name, this.size);
    }

    removePatientByQueueNumber(index) {
        this.handleIndexError(index + 1);

        let current, previous, count = 0;
        current = this.head;
        previous = current;

        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
        this.updatePatients(index + 1);

        return current.name;
    }

    removePatientByName(name) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.name == name) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }

                this.size--;

                return current.name;
            }

            previous = current;
            current = current.next;
            this.updatePatients(null, name);
        }

        return -1;
    }

    getPatientByName(name) {
        let count = 1;
        let current = this.head;

        while (current != null) {
            if (current.name === name) {
                return count;
            }

            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    get allPatients() {
        return this.patients;
    }
}

module.exports = PatientQueue;