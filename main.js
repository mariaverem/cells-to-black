let container = document.querySelector('.container');
let newTable = document.createElement('table');
newTable.className = 'newTable';
container.append(newTable);

function addTableElements() {
    for( let i = 0; i < 6; i++) {
        let newTr = document.createElement('tr');
        newTable.append(newTr);
    }
    let newTr = document.querySelectorAll('tr');
    for( let k = 0; k < newTr.length; k++) {
        for(i = 0; i < 6; i++) {
            let newTd = document.createElement('td');
            newTd.className = 'square not-checked';
            newTr[k].append(newTd);
        }       
    }
}

addTableElements();

let btnChange = document.createElement('button');
btnChange.className = 'btn-change';
btnChange.innerHTML = 'change';
container.append(btnChange);

newTable.addEventListener('click', function(event) {
    let squareTarget = event.target;
    if (squareTarget.tagName == 'TD') {
        squareTarget.classList.toggle('checked');
    }
})

// btnChange.addEventListener('click', function() {
//     let tdArr = document.querySelectorAll('td');
//      for(let i = 0; i < tdArr.length; i++) {
//          let elem = tdArr[i];
//          elem.classList.toggle('bg-black');
//      }
// })

btnChange.addEventListener('click', function() {
    newTable.classList.toggle('reverse');
})
