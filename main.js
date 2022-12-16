
// Set the date we're counting down to
var countDownDate = new Date("Jan 22, 2023 01:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " ngày " + hours + " giờ "
  + minutes + " phút " + seconds + " giây ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy new year!";
  }
}, 1000);

const audio = document.getElementById("audio");
const play = document.querySelector('.topright')
var isPlaying = false;

play.onclick = function(){
    if(isPlaying){
        audio.pause()
    }else{
        audio.play()
    }

    audio.onplay = function(){
        isPlaying = true
        play.classList.remove('playing')
     
    }

    audio.onpause = function(){
        isPlaying = false
        play.classList.add('playing')

    }

}


$('.topright').click(function(e){
    if(e.target.closest('.none-mute')){
        $('.none-mute').css('display','none')
        $('.mute').css('display','block')
        audio.pause()
    }
    if(e.target.closest('.mute')){
        $('.none-mute').css('display','block')
        $('.mute').css('display','none')
        audio.play()
    }
})  

$(document).ready(function(){
    $("tr").last().css("display","none");
  });

  $('.toggle-cld').click(function(){
    $('.celender-right').slideToggle('slow')
  })

  