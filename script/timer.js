import Cards from "./cards.js"

export default function Timer({
    displayMinutes,
    displaySeconds,
    kitchenTimer,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
}){
    let timerTimeOut
    let minutes = Number(displayMinutes.textContent)
    let initialMinutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)

    function inputUser(){
        minutes = parseInt(prompt('Quantos minutos?'))
        minutes = isNaN(minutes) ? initialMinutes : minutes
        initialMinutes = isNaN(minutes) ? initialMinutes : minutes
        updateDisplay(minutes)
    }
    
    function countdown() {
        timerTimeOut = setTimeout(function() {  
            if (minutes==0 && seconds==0){
                timeEnd()
                return
            }
            if (minutes>0 && seconds==0){
                --minutes
                seconds = 60
            }
            seconds--
            updateDisplay(minutes, seconds)
            countdown()
        }, 1000)
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }
    
    function updateDisplay(minutes, seconds){
        seconds = seconds === undefined ? 0 : seconds
        displayMinutes.textContent = String(minutes).padStart(2,"0")
        displaySeconds.textContent = String(seconds).padStart(2,"0")
    }
    
    function reset(){
        minutes = initialMinutes
        seconds = 0
        updateDisplay(minutes, seconds)
        hold()
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
        Cards().bgAudio('stop')
        Cards().toggleSelect('resetCard')
    }
    
    function timeEnd(){
        kitchenTimer.play()
        reset()
    }

    function increment(){
        minutes+=5
        updateDisplay(minutes)
    }

    function decrement(){
        if (minutes>5){
            minutes-=5
            updateDisplay(minutes)
        }
    }

    return {
        inputUser,
        countdown,
        hold,
        updateDisplay,
        reset,
        increment,
        decrement
    }
}
