//import swal from 'assets/import/sweetalert/dist/sweetalert.min.js';

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
  todo: [],  
  completed: []
};


console.log (data);

// SVG's here

// Delete Button SVG
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';

// Complete button SVG

 var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="st0" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

renderTodoList();

//const taskAddComplete = swal.mixin({
//  taskAddComplete: true,
//  position: 'top-end',
//  showConfirmButton: false,
//  timer: 900,
//});

function deleteWarningAlert() {
    swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    swal(
      'Deleted!',
      'Your task has been deleted.',
      'success'
    )
  } else if (
    // Read more about handling dismissals
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal(
      'Cancelled',
      'Your task has not been deleted',
      'error'
    )
  }
})
}

function taskCompleteAlert() {
//taskAddComplete({
//  type: 'success',
//  title: 'Added task'
//})
    swal({
  toast: true,
  position: 'top-right',
  type: 'success',
  title: 'Added task',
  showConfirmButton: false,
  timer: 900,
    customClass: 'alertmodal',
})
 }

function taskFinishAlert() {
//taskAddComplete({
//  type: 'success',
//  title: 'Added task'
//})
    swal({
  toast: true,
  position: 'top-right',
  type: 'success',
  title: 'Task completed',
  showConfirmButton: false,
  timer: 900,
    customClass: 'alertmodal',
})
 }

function taskUnFinishAlert() {
//taskAddComplete({
//  type: 'success',
//  title: 'Added task'
//})
    swal({
  toast: true,
  position: 'top-right',
  type: 'info',
  title: 'Task un-completed',
  showConfirmButton: false,
  timer: 900,
    customClass: 'alertmodal',
})
 }

 
function buttonClick() {
    var value = document.getElementById('item').value;
    
    if (value) {
        addItem(value);
        
    } else {
            noValueEntered();
        
        
    console.log("No value inserted");
     throw new Error("No value inserted");
    }   
}
    

//swal({
//  title: 'Custom animation with Animate.css',
//  animation: false,
//  customClass: 'animated shake'
//})

document.getElementById('addTask').addEventListener('click', buttonClick);
document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value;
    if (e.code === 'Enter' && value ) {
    addItem(value);
        
    } 
    if (e.code ==='Enter' && !(value) ) {
        noValueEntered;
    }

});

function noValueEntered() {

    swal({
  title: 'Could not add task:',
  animation: false,
  customClass: 'animated shake',
  text: "No value entered in textfield",
  type: 'error',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Help', 
  cancelButtonText: 'Cancel',

}).then((result) => {
  if (result.value) {
    swal( {
          
  title: 'Help',
  animation: false,
  customClass: 'animated flash',
  text: "Add a task in the textbox and press add button.\nPress the delete button to delete\n Also, press the complete button to complete",
  type: 'info',
      }
    )
  }
})
}
    
    
    //    swal("Could not add task", "No task entered", "error", {
//  animation: false,
//  customClass: 'animated shake',
//        buttons: {
    
//    help: {
//      text: "Help",
//      value: "help",},
//    cancel: "Exit",
    
////    showCancelButton: false,
////            showConfirmButton: false
    
//    lol: false  
//        },

//    })
//    .then((value) => {
//  switch (value) {
 
//    case "help":
//      swal("Add a task in the textbox and press add button.\nPress the delete button to delete\n Also, press the complete button to complete");
//      break;
 
//  }
//});
//}

function addItem(value) {


    taskCompleteAlert();
    addItemToDOM(value);
    sendItemToAPI(value);
    document.getElementById('item').value = '';
       
    data.todo.push(value);
        dataObjectUpdated();
    console.log(data);
}
 
function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (var i = 0; i < data.todo.length; i++) {
    var value = data.todo[i];
    addItemToDOM(value);
  }

  for (var j = 0; j < data.completed.length; j++) {
    var value = data.completed[j];
    addItemToDOM(value, true);
  }
}


function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}



function removeItem() {
 swal({

  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: false,
  animation: false,
  customClass: 'animated rollIn',
}).then((result) => {
  if (result.value) {

    swal(
      {
          reverseButtons: true,
   title:'Deleted!',
          text:'Your task has been deleted.',
          type:'success',
   animation: false,
  customClass: 'animated fadeInUp',
      })
             console.log('Removed task ' + value);
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
    var parentId = parent.id;
        var value = item.innerText;
  parent.removeChild(item);
    
    if (parentId === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
    dataObjectUpdated();

  } else if (
    // Read more about handling dismissals
    result.dismiss === swal.DismissReason.cancel)
   {
    swal(
       {
           reverseButtons: true,
   title:'Cancelled!',
          text:'Your task has not been deleted.',
          type:'error',
   animation: false,
  customClass: 'animated fadeInUp',
      }
    )
  }
})}
    
    
    
   

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentId = parent.id;
    var value = item.innerText;    
    if (parentId === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value); 
    taskFinishAlert();
        
    } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);         
    taskUnFinishAlert();
    }
dataObjectUpdated();
    console.log(data);
    
    var target = (parentId === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    
  
    
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}


   //console.log("Added task: " + text)

function addItemToDOM(text, completed) {
  var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  // Add click event for removing the item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  // Add click event for completing the item
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}

/**
 * Method for sending to-do item to API
 */
function sendItemToAPI(item, callback) {
  var req = new XMLHttpRequest();
  req.open('POST', '/add');
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({ item: item }));

  req.addEventListener('load', () => {
  });

  req.addEventListener('error', (e) => {
    console.log('Whoops, something bad happened.');
    console.log(e);
  });
}




//https://youtu.be/2wCpkOk2uCg?t=2903
// https://youtu.be/2wCpkOk2uCg?t=2903
// https://youtu.be/2wCpkOk2uCg?t=2903
// https://youtu.be/2wCpkOk2uCg?t=2903