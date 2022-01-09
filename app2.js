const increase = document.querySelector('#increase-btn')
const reset = document.querySelector('#reset-btn')
const decrease = document.querySelector('#decrease-btn')

const currentCount = document.querySelector('#current-count')
const currentCountColor = document.querySelector('.current-count')

let count = 0

document.addEventListener('click', e => {
    const buttonPressed = e.target
    switch(buttonPressed){
        case increase:
            count++
            break
        case decrease:
            count -= 1
            break
        case reset:
            count = 0
            break
    }
    // console.log(count);
    currentCount.innerHTML = count //?
    if(currentCount.innerHTML == 0){
        currentCount.style.color = 'gray'
    } else if (currentCount.innerHTML > 0){
        currentCount.style.color = 'darkgreen'
    } else if (currentCount.innerHTML < 0){
        currentCount.style.color = 'red'
    }
})

// document.addEventListener('click', () => {
//     if(count = 0){
//         currentCount.classList.add('gray')
//     }
// })