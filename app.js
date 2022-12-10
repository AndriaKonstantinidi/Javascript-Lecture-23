let winnerText = document.querySelector('h5');
let allBoxes = document.querySelectorAll('div');
let startBtn = document.querySelector('button');
let tries = document.querySelector('h3');
let rgbArray = [];

function getRandRgbColor(){
    let r = Math.round(Math.random()* 255)
    let g = Math.round(Math.random()* 255)
    let b = Math.round(Math.random()* 255)
    let rgb = `rgb(${r}, ${g}, ${b})`
    return rgb
}

function fillArray(array){
    while(array.length < 6){
        array.push(getRandRgbColor());
    }
    return array
}

function getRandIndex(){
    let randIndex = Math.round(Math.random()* 5);
    return randIndex
}

startBtn.addEventListener('click',function(){
    let filledArray = fillArray(rgbArray);
    let winning = filledArray[getRandIndex()];

    allBoxes.forEach(box =>{
        box.style.backgroundColor = filledArray.pop();
        winnerText.innerHTML = winning;
        box.addEventListener('click',function(){
            if(box.style.backgroundColor == winnerText.innerHTML){
                alert("success")
                location.reload();
             }
           else{
                box.style.display = 'none';
                tries.innerHTML--
                if(tries.innerHTML == 0){
                    alert('Game over')
                    location.reload();
                }
            }
        })
    })
})
