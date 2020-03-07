import fetch from 'unfetch';

const checkStatus = response => {
    if(response.ok){
        return response;
    } else {
        //attach the actual error inside of this object
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        })
        //reject the promise it uses the catch block
        return Promise.reject(error);
    }
}
export const getAllStudents = () =>
    fetch('api/students').then(checkStatus);

export const addNewStudent = student => 
fetch('api/students', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(student)
})
.then(checkStatus);

export const updateStudent = (studentId, student) => 
    fetch(`api/students/${studentId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(student)
    })
    .then(checkStatus);

    export const deleteStudent = studentId =>
    fetch(`api/students/${studentId}`, {
        method: 'DELETE'
    })
    .then(checkStatus);

