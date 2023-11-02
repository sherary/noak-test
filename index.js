/**
 * 
 * Write an algorithm in JavaScript to calculate patient’s estimated waiting time. 
 * The algorithm should work for different amount of doctors and patient queue positions –
 * it should accept an array of Doctor objects and patient’s position in queue as inputs 
 * and return the patient’s waiting time as output. 
 * 
 * Your codes should also include the implementation for the Doctor class.
 * For simplicity, assume all the patients in the queue have no preference 
 * for the doctors they want to consult and all the doctors are available 
 * and not seeing any patient initially.
 * 
 */

// 1. Find out how many patient are in line.
// 2. How many doctors are available along with their consultation time.
// 3. Pick one patient among the line.
// 4. Assign patient to room according to available doctor.
// 5. If other patient name inputted, return waiting time for other patients.

// const Consultation = require("./Consultation");
const Doctor = require("./Doctor");
const PatientQueue = require("./Patients");
const patient = new PatientQueue();
// const room = new Consultation();

const patients = [
    "Brian", "Regina", "LLoyd", "Satan", "John",
    "Peter", "Summer", "Anna", "Thomas", "Tobey", 
    "James", "Karen", "Maria", "Jessica", "Jane"
]

const doctors = [ new Doctor(4), new Doctor(3) ]

for (let i = 0; i < patients.length; i++) {
    patient.push(patients[i])
}

const patientPosition = (patientName) => {
    return patient.getPatientByName(patientName);;
}

const estimatedWaitingTime = (doctors, position) => {
    let doctorsTime = doctors.reduce((total, doctor) => total + doctor.consultTime, 0);
    let totalDoctor = doctors.length;
    let waitingTime = ((position - 1) % totalDoctor + 1) * doctorsTime;

    return waitingTime;
}
const patientName = "Regina"
const waitingTime = estimatedWaitingTime(doctors, patientPosition(patientName));

console.log(`Estimated waiting time for patient ${patientName} is ${waitingTime} minutes`);