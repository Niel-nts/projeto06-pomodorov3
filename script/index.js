import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAdd,
    buttonRemove,
    buttonFirePlace,
    buttonCoffeShop,
    buttonRain,
    buttonNature,
    displayMinutes,
    displaySeconds,
    buttonPressAudio,
    kitchenTimer,
    buttonWhite,
    buttonDark,
    body,
    volumeNature,
    natureAudio,
    volumeRain,
    volumeCoffeShop,
    volumeFirePlace,
    rainAudio,
    firePlaceAudio,
    coffeShopAudio
} from "./elements.js"
import Timer from "./timer.js"
import Cards from "./cards.js"

const cards = Cards()

const timer = Timer({
    displayMinutes,
    displaySeconds,
    kitchenTimer,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAdd,
    buttonRemove,
})


buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    buttonPressAudio.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPressAudio.play()
    timer.hold()
})

buttonStop.addEventListener('click', function(){ 
    buttonPressAudio.play()   
    timer.reset()
})

buttonSet.addEventListener('click', function(){
    buttonPressAudio.play()
    timer.inputUser()
})

buttonAdd.addEventListener('click', function(){
    buttonPressAudio.play()
    timer.increment()
})

buttonRemove.addEventListener('click', function(){
    buttonPressAudio.play()
    timer.decrement()
})

buttonRain.addEventListener('click', function(){
    buttonPressAudio.play()
    cards.toggleSelect(buttonRain)
    cards.bgAudio('buttonRain')
})
buttonFirePlace.addEventListener('click', function(){
    buttonPressAudio.play()
    cards.toggleSelect(buttonFirePlace)
    cards.bgAudio('buttonFirePlace')
})
buttonCoffeShop.addEventListener('click', function(){
    buttonPressAudio.play()
    cards.toggleSelect(buttonCoffeShop)
    cards.bgAudio('buttonCoffeShop')
})
buttonNature.addEventListener('click', function(){
    buttonPressAudio.play()
    cards.toggleSelect(buttonNature)
    cards.bgAudio('buttonNature')
})

volumeNature.addEventListener('change', function(e){
    natureAudio.volume = e.currentTarget.value / 100
})

volumeRain.addEventListener('change', function(e){
    rainAudio.volume = e.currentTarget.value / 100
})

volumeFirePlace.addEventListener('change', function(e){
    firePlaceAudio.volume = e.currentTarget.value / 100
})

volumeCoffeShop.addEventListener('change', function(e){
    coffeShopAudio.volume = e.currentTarget.value / 100
})

buttonWhite.addEventListener('click', function(){
    body.classList.add("dark")
    buttonDark.classList.remove('hide')
    buttonWhite.classList.add('hide')
})

buttonDark.addEventListener('click', function(){
    body.classList.remove('dark')
    buttonDark.classList.add('hide')
    buttonWhite.classList.remove('hide')
})
