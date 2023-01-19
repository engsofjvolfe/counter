let incrementBtn = document.getElementById('increment-btn')
let counter = document.getElementById("count-el")
let add = 0
let saveBtn = document.getElementById('save-btn')
let previous = document.getElementById('previous-entries')
let resetEntries = document.getElementById('reset-entries')


incrementBtn.addEventListener('click', function () {
    increment();
})
saveBtn.addEventListener('click', function () {
    save();
})

resetEntries.addEventListener('click', function(){
    reset();
})

function increment() {
    add += 1
    counter.textContent = add
    // console.log(add)
}

function save() {
    previous.textContent += add + " - "
    add = 0
    counter.innerText = add
}

function reset(){
    previous.textContent = "Previous entries: "
    console.log(previous.textContent)
}