let decreaseBtn = document.getElementById('decrease-button');
let increaseBtn = document.getElementById('increase-button');
let counter = document.getElementById('counterNumber');
let count = 0; // variable name count

decreaseBtn.addEventListener('click', () => {
    //console.log('decrease');
    count--;
    counter.innerHTML = count;
});

increaseBtn.addEventListener('click', () => {
    //console.log('decrease');
    count++;
    counter.innerHTML = count;
});

  