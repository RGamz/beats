var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
const playerContainer = $(".player__start");
const playerSplash = $(".player__splash");
 
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "LXb3EKWsInQ",
    events: {
      // onReady: onPlayerReady,
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