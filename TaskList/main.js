let addTaskbtn = document.querySelector(".btn").addEventListener("click",addIt);

let delAllBtn = document.querySelector('.clear-tasks').addEventListener('click',delAll);

let delElements = document.querySelectorAll('.secondary-content');

for (var i = 0; i < delElements.length; i++) {
    var children = delElements[i].addEventListener('click', delAElement);
  }

function delAElement(e){
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
}


function addIt(e){
    let inpt = document.getElementById("task");
    let x = inpt.value;

    inpt.value = '';
    
    
    let ulD = document.querySelector('ul.collection');

    let liList = ulD.children;

    let newLi = document.createElement('li');

    newLi.className='collection-item';

    newLi.appendChild(document.createTextNode(x));
    let a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('class','delete-item secondary-content');
    
    let i = document.createElement('i');
    i.setAttribute('class','fa fa-remove');
    a.addEventListener('click',delAElement)

    a.appendChild(i);
    newLi.appendChild(a);

    ulD.appendChild(newLi);

    // <li class="collection-item">
    //      List Item
    //     <a href="#" class="delete-item secondary-content">
    //       <i class="fa fa-remove"></i>
    //     </a>
    // </li>

    e.preventDefault();  
}

function delAll(e){
    let ulD = document.querySelector('ul.collection');
    while (ulD.hasChildNodes()) {   
        ulD.removeChild(ulD.firstChild);
      }
}


