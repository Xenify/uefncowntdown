const newDate = new Date(Date.UTC(2023, 3, 22, 16, 0, 0)).getTime()
const countdown = setInterval(() =>{
  
const date = new Date().getTime()
const diff = newDate - date

const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
      document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes :minutes
      document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours

if(diff === 0){
  clearInterval(countdown)
        document.querySelector(".countdown").innerHTML = 'True Horror Begins'
}

}, 1000)