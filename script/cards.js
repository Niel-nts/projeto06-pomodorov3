import {
    buttonRain,
    buttonNature,
    buttonCoffeShop,
    buttonFirePlace,
    firePlaceAudio,
    rainAudio,
    natureAudio,
    coffeShopAudio,
    moduleFirePlace,
    moduleCoffeShop,
    moduleRain,
    moduleNature,
} from "./elements.js"

export default function Cards(){
    function toggleSelect(option){
        if (option == buttonRain){
            moduleFirePlace.classList.remove('select')
            moduleCoffeShop.classList.remove('select')
            moduleRain.classList.toggle('select')
            moduleNature.classList.remove('select')
        }
        if (option == buttonCoffeShop){
            moduleFirePlace.classList.remove('select')
            moduleCoffeShop.classList.toggle('select')
            moduleRain.classList.remove('select')
            moduleNature.classList.remove('select')
        }
        if (option == buttonNature){
            moduleFirePlace.classList.remove('select')
            moduleCoffeShop.classList.remove('select')
            moduleRain.classList.remove('select')
            moduleNature.classList.toggle('select')
        }
        if (option == buttonFirePlace){
            moduleFirePlace.classList.toggle('select')
            moduleCoffeShop.classList.remove('select')
            moduleRain.classList.remove('select')
            moduleNature.classList.remove('select')
        } 
        if (option == 'resetCard') {
            moduleFirePlace.classList.remove('select')
            moduleCoffeShop.classList.remove('select')
            moduleRain.classList.remove('select')
            moduleNature.classList.remove('select')
        }
    }
    
    function bgAudio(option){
        if (option == 'buttonRain'){
            if (rainAudio.paused){    
                rainAudio.play()
            } else {
                rainAudio.pause()
            }
            natureAudio.pause()
            firePlaceAudio.pause()
            coffeShopAudio.pause()
        } 
        if (option == 'buttonCoffeShop'){
            if (coffeShopAudio.paused){
                coffeShopAudio.play()    
            } else {
                coffeShopAudio.pause()
            }
            natureAudio.pause()
            firePlaceAudio.pause()
            rainAudio.pause()
        } 
        if (option == 'buttonNature'){
            if (natureAudio.paused){
                natureAudio.play()    
            } else {
                natureAudio.pause()
            }
            coffeShopAudio.pause()
            firePlaceAudio.pause()
            rainAudio.pause()
        } 
        if (option == 'buttonFirePlace'){
            if (firePlaceAudio.paused){
                firePlaceAudio.play()    
            } else {
                firePlaceAudio.pause()
            }
            coffeShopAudio.pause()
            rainAudio.pause()
            natureAudio.pause()
        }
        if (option == 'stop'){
            firePlaceAudio.pause()
            coffeShopAudio.pause()
            rainAudio.pause()
            natureAudio.pause()
        }
        firePlaceAudio.loop = true
        coffeShopAudio.loop = true
        rainAudio.loop = true
        natureAudio.loop = true
    }
    return {
        bgAudio, 
        toggleSelect
    }
}
