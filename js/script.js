let users = [];

let korzinka = [];

function addUser() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let phoneNumber = document.getElementById("phone").value;
    let Date = document.getElementById("date").value;
    let Position = document.getElementById("position").value;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(phoneNumber);
    // console.log(Date);
    // console.log(Position);

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";

    let newUser = {
        name: firstName,
        lastname: lastName,
        phone:phoneNumber,
        date: Date,
        position:Position

    }

    users.push(newUser);
    drawUser();
    console.log(users);


}

function drawUser() {
    let result = "";

    for (let i = 0; i<users.length; i++){
        result+=`
                  <div class="col-6 mt-3">
                   <div class="card">
                     <div class="card-header">
                       <h6>${users[i].name} ${users[i].lastname}</h6>   
                     </div>  
                     <div class="card-body">
                       <p><strong>Phone: </strong> ${users[i].phone}</p>
                       <p><strong>Birthdate: </strong> ${users[i].date}</p>
                       <p><strong>Position: </strong> ${users[i].position}</p>
                     </div>
                     <div class="card-footer d-flex justify-content-between">
                      <button class="btn btn-primary" onclick="editUser(${i})">Edit</button>
                      <button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
                     </div>
                   </div>
                  </div>
                `
    }

    document.getElementById("natija1").innerHTML = result;

    let result1 = "";

    for (let i = 0; i<korzinka.length; i++){
        result1+=`
                    <div class="col-6 mt-3">
                   <div class="card">
                     <div class="card-header bg-danger">
                       <h6>${korzinka[i].name} ${korzinka[i].lastname}</h6>   
                     </div>  
                     <div class="card-body">
                       <p><strong>Phone: </strong> ${korzinka[i].phone}</p>
                       <p><strong>Birthdate: </strong> ${korzinka[i].date}</p>
                       <p><strong>Position: </strong> ${korzinka[i].position}</p>
                     </div>
                     <div class="card-footer d-flex justify-content-between">
                      <button class="btn btn-danger btn-block" onclick="deletekorzinka()" >Delete</button>
                     </div>
                   </div>
                  </div>
                 `
    }

    document.getElementById("natija2").innerHTML = result1;

}


function deleteUser(index) {
    korzinka.push(users[index]);
    users.splice(index,1);
    console.log(korzinka);
    drawUser();

    progress();
}
function deletekorzinka(index) {
    korzinka.splice(index,1);
    console.log(korzinka);
    drawUser();
}


function editUser(index) {
    document.getElementById("first-name").value = users[index].first-name;
    document.getElementById("last-name").value = users[index].last-name;
    document.getElementById("date").value = users[index].date;
    document.getElementById("phone").value = users[index].phone;
    document.getElementById("position").value = users[index].position;


}

function progress() {
    let progress = document.getElementById("progress");
    let percent = korzinka.length*100/(users.length+korzinka.length);

    progress.style.width = percent+"%";
    progress.textContent = percent+"%";
}

// users.length+korzinka.length - 100%
// korzinka.length - x%