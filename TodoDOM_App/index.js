// 1- form 2- data showcase
// step-1 catch/select the form tag and attach event

document.querySelector("form").addEventListener("submit", getData);

function getData(e){
    e.preventDefault();//refresh karega so to stop it 
    //console.log("hii");

    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;
    //inout tage ke thru value read ki and inme save kr diya

    console.log(taskName, taskPriority);

    let taskObj = {
        taskName,
        taskPriority,
    };

    console.log(taskObj);

    displayTable(taskObj);
}

function displayTable(obj){
    // <tr>
    //<td>1<td>
    //<td>2<td>
    //<td>3<td>
    //<tr>

    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = obj.taskName;

    const td2 = document.createElement("td");
    td2.innerText = obj.taskPriority;

    const td3 = document.createElement("td");
    td3.innerText = "Add";

    row.append(td1,td2,td3);

    document.querySelector("tbody").appendChild(row);
}

//2 probs: 1 refresh ke baad gayab ho ja rha h. 2 fav me add dabane ke new page khulna chahiye

//database r of 2 tyes, client side db(my sql, mongodb) and server side db (local storage)