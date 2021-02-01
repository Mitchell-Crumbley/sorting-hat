console.log("CONNECTED");

const students = [
  {
    name: "Mitchell",
    schoolHouse: "Hufflepuffle",
  }
];

const voldermortsArmy = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

function showForm() {
  document.getElementById("myForm").style.display = "block";
}; // sets the myForm div display type to block upon clicking the Get Started button.

//DOESNT WORK
// const showForm = () => {
//   const content = `<div class="mb-3 justify-content-center">
//         <div class="form-body text-center">
//           <!-- Need to place the elements of the form within it's own card container so they can manipulated within the form itself. -->
//           <h3>
//             Speak Thy First and Last Name
//           </h3>

//           <div class="d-flex col-md-6 offset-md-3">
//             <label for="studentName" class="form-label">Student's Name:</label>
//             <input type="text" class="form-control mx-3 mb-2" id="studentName" placeholder="David Copperfield" required>
//             <button type="submit" class="btn btn-primary mb-2" id="sort">SORT ME</button>
//           </div>
//           <div id="error-message"> </div>
//         </div>
//       </div>`;
//     printToDom("#myForm", content);
// };

const sortingHat = () => {
  const houses = ["Gryffindoor", "Snakes", "Hufflepuffle", "Ravenclaw"]; //define the houses to sort between
  let sortingHat = houses[Math.floor(Math.random() * houses.length)]; //define what we will return. Example: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 
  return sortingHat;
};


//C in CRUD: Create New Students
// Takes the name put into the student submission form and pushes it into the array.
const addStudentToHouse = (e) => {
  e.preventDefault();
  let domString = '';
  if (e.target.id === "sort") { //If the target of an event is the button id 'sort' set the constant student = to the query on studentName
    const student = document.querySelector("#studentName");
    errorMessage(student.value);

    if (student.value) { //If the value of student returns true then push the name and schoolHouse into the array.
      students.push({
        name: student.value,
        schoolHouse: sortingHat()
      });
      student.value = ""; //student.value must = a string value. 
    }
  }
  studentBuilder(students); //run studentBuilder function to generate the card for the newly added student in the array. AKA - Rebiuld the DOM.

  document.querySelector('form').reset();
  //Reset the form after the button is clicked
};

// //Creates a pie container card on the DOM
const studentBuilder = (taco) => {
  let domString = '';

  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name, schoolHouse } = item;
    //   if (divId = "voldermorts-army") {
    //     domString += `<div class="card m-3" style="width: 18rem;">
    //           <div class="card-body">
    //         <p class="card-text">Sadly, <b>${name}</b> went over to the dark side!</p>
    //     </div>
    // </div>`;
    //   } else {
    domString += `<div class="card" style="width: 18rem;" id=${i}>
    <div class="card-body">
      <p class="card-text" id="studentName">${name}</p>
      <p class="card-text"id="schoolHouse">${schoolHouse}</p>
      <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
    </div>
  </div>`;
  }
  printToDom("#first-years-card-display", domString);
  // printToDom("#voldermorts-army", domString);
};

const evilBuilder = (taco) => {
  let domString = '';

  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name } = item;
    if (divId = "voldermorts-army") {
    domString += `<div class="card m-3" style="width: 18rem;" id=${i}>
              <div class="card-body">
            <p class="card-text">Sadly, <b>${name}</b> went over to the dark side!</p>
        </div>
    </div>`;
  };
  printToDom("#voldermorts-army", domString);
};
};

//OTHER OPTIONS!!

// FOR EACH LOOP - This works!
// taco.forEach((item, i) => {
//   domString += `<div class="card" style="width: 18rem;" id=${i}>
//   <div class="card-body">
//     <p class="card-text" id="studentName">${taco[i].name}</p>
//     <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//     <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//   </div>
// </div>`;
// });
// printToDom('#first-years-card-display', domString);
// };

//FOR LOOP ISNT ALLOWED IN THIS ASSIGNMENT. This Generates
//   for (let i = 0; i < taco.length; i++) {
//     domString += `<div class="card" style="width: 18rem;" id=${i}>
//                     <div class="card-body">
//                       <p class="card-text" id="studentName">${taco[i].name}</p>
//                       <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//                       <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//                     </div>
//                   </div>`;
//   };
//   printToDom('#first-years-card-display', domString);
// };

// const errorMessage = (student) => {
//   if (student) {
//       document.querySelector("#error-message").innerHTML = "";
// } else {
//     document.querySelector("#error-message").innerHTML = 
//         `<div style="color: rgb(226, 13, 16);margin-bottom: 10px;">
//         <b>Don't be shy. Speak a Name!</b>
//       </div>`;
//   }
// };

// function showError() {
//   if (student = true) {
//     document.getElementById("error-message").style.display = "block";
//   } else {
//     document.getElementById("error-message").style.display = "none";
//    };
// };




const errorMessage = (student) => {
  if (student) {  //If student has a value when passed to the function set the div's innerHTML to nothing.
    document.querySelector("#error-message").innerHTML = "";
  } else { //If student returns false when passed set div's innerHTML = to the syled div we setup on the HTML page.
    document.querySelector("#error-message").innerHTML =
      `<div style="color: red;margin-bottom: 10px;">
        <b>Don't be shy! Say your name.</b>
      </div>`;
  }
};



const buttonEvents = () => {
  document.querySelector("#get-started").addEventListener("click", showForm);
  document.querySelector("#sort").addEventListener("click", addStudentToHouse);
  document.querySelector('#first-years-card-display').addEventListener("click", expelStudent);


};

const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(students[e.target.id])
    students.splice(e.target.id, 1)
    studentBuilder(students);
    evilBuilder(voldermortsArmy);
  }
}


const init = () => {
  studentBuilder(students);
  buttonEvents();
  console.log(students);
  console.log(voldermortsArmy);
};

init();
