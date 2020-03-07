import axios from 'axios'

// const checkStatus = response => {
//     if(response.ok){
//         return response;
//     } else {
//         //attach the actual error inside of this object
//         let error = new Error(response.statusText);
//         error.response = response;
//         response.json().then(e => {
//             error.error = e;
//         })
//         //reject the promise it uses the catch block
//         return Promise.reject(error);
//     }
// }

class AdminDataService {

    getAllStudents() {
        //console.log(localStorage.token);
        //console.log('executed service')

        return axios.get(`http://localhost:8080/api/students` , {
            headers: localStorage.token
        }
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    getAllSurveyEvents() {
        //console.log(localStorage.token);
        //console.log('executed service')
        return axios.get(`http://localhost:8080/api/survey/events` , {
            headers: localStorage.token
        }
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    getAllTeachers() {
        //console.log(localStorage.token);
        //console.log('executed service')
        return axios.get(`http://localhost:8080/api/teachers` , {
            headers: localStorage.token
        }
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    getAllSurveyOrders() {
        //console.log(localStorage.token);
        //console.log('executed service')
        return axios.get(`http://localhost:8080/api/survey/orders` , {
            headers: localStorage.token
        }
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    addNewStudent(student){
        return axios.post('http://localhost:8080/api/students', {
            pearId: student.pearId,
            firstName: student.firstName,
            lastName: student.lastName,
          })
          .then((response) => {
            //console.log("finished authenticated add");
          })
          .catch((error) => {
            console.log(error.response);
          });


    }

    deleteStudent(studentId){
        
        return axios.delete(
            `http://localhost:8080/api/students/${studentId}`
        )
        .then((response) =>{
            //console.log("authenticated delete completed");
        }
        )
        .catch((error) => {
            console.log(error);
        });
    }

    updateStudent(studentId, student){
        alert(studentId);
        return axios.put(`api/students/${studentId}`, {
            firstName: student.firstName,
            lastName:   student.lastName
        })
        .then((response) =>{
            //console.log("authenticated update completed");
        }
        )
        .catch((error) => {
            console.log(error);
        });
    }
        
}
export default new AdminDataService()