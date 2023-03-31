var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
const playerContainer = $(".player__start");
const playerSplash = $(".player__splash");

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);
    
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
      }
      
      return `${minutes} : ${seconds}`;
 };

 const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

    $(".player__duration-estimate").text(formatTime(durationSec));
    
    if (typeof interval !== "undefined") {
      clearInterval(interval);
    }
    
    interval = setInterval(() => {
      const completedSec = player.getCurrentTime();
    
      $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);
};

 
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "LXb3EKWsInQ",
    events: {
      onReady: onPlayerReady,
      // onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 1,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
 }



 let eventsInit = () => {
  $(".player__start").click(e => {
    e.preventDefault();


    if (playerContainer.hasClass("player__paused")) {
      playerContainer.removeClass("player__paused");
      playerSplash.css({
        display:"block",
    })
      playerContainer.addClass("player__start");
      player.pauseVideo();
    } else {
      playerContainer.removeClass("player__start");
      playerSplash.css({
        display:"none",
    })
      playerContainer.addClass("player__paused");
      player.playVideo();
    }
  });
 }
 
eventsInit();

interval = setInterval(() => {
  const completedSec = player.getCurrentTime();
  const completedPercent = (completedSec / durationSec) * 100;

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec =
      (player.getDuration() / 100) * newButtonPositionPercent;
    
    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });
    
    player.seekTo(newPlaybackPositionSec);
   });
 
  $(".player__duration-completed").text(formatTime(completedSec));
}, 1000);

