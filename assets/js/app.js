// shadow layers
var shadowLayer = document.getElementsByClassName('shadowLayer');
// black layer
var blackLayer = document.getElementsByClassName('blackLayer')[0];
// vid divs
var redVidDiv = document.getElementsByClassName('redVidDiv')[0];
var BeYouTyDiv = document.getElementsByClassName('BeYouTyDiv')[0];
// vids
var redVid = document.getElementsByClassName('redVid')[0];
var beyoutyVid = document.getElementsByClassName('beyoutyVid')[0];
// mobileExit
var mobileExit = document.getElementsByClassName('mobileExit')[0];


var exitButton = document.getElementsByClassName('exitButton')[0];
exitButton.addEventListener('click',()=>{
  shortExit();
  mobileExit.style.display = 'none';
});
//overlay exit
mobileExit.addEventListener('click',function(){
  mobileExit.style.display = 'none';
  shortExit();
})
//short exit fun
function shortExit() {
  redVid.src = '';
  beyoutyVid.src = '';
  setTimeout(function () {
    redVid.src = '';
    beyoutyVid.src = '';
    BeYouTyDiv.style.left = '0';
    BeYouTyDiv.style.width = '17.41vw';
    BeYouTyDiv.style.height = '36.795vw';
    BeYouTyDiv.style.zIndex = '0';
    beyoutyVid.style.left = '0vw';
    beyoutyVid.style.top = '0vw';

    redVidDiv.style.left = '0';
    redVidDiv.style.width = '17.41vw';
    redVidDiv.style.height = '36.795vw';
    redVid.style.width = '100%';
    redVid.style.height = '100%';
    redVid.style.left = '0';
    redVid.style.top = '0vw';
    beyoutyVid.style.width = '100%';
    beyoutyVid.style.height = '100%';
    redVidDiv.style.zIndex = '0';
    shadowLayer[0].style.display = 'block';
    shadowLayer[1].style.display = 'block';
    shadowLayer[2].style.display = 'block';
  }, 800);
  BeYouTyDiv.style.left = '0';
  BeYouTyDiv.style.width = '17.41vw';
  BeYouTyDiv.style.height = '36.795vw';
  BeYouTyDiv.style.zIndex = '0';
  beyoutyVid.style.left = '0vw';
  beyoutyVid.style.top = '0vw';

  redVidDiv.style.left = '0';
  redVidDiv.style.width = '17.41vw';
  redVidDiv.style.height = '36.795vw';
  redVid.style.width = '100%';
  redVid.style.height = '100%';
  redVid.style.left = '0';
  redVid.style.top = '0vw';
  beyoutyVid.style.width = '100%';
  beyoutyVid.style.height = '100%';
  redVidDiv.style.zIndex = '0';
  shadowLayer[0].style.display = 'block';
  shadowLayer[1].style.display = 'block';
  shadowLayer[2].style.display = 'block';


  blackLayer.style.opacity = '0';
  setTimeout(function(){
    blackLayer.style.display = 'none';
  },1000);
}

redVidDiv.addEventListener('click',function(){
  if(window.innerWidth >window.innerHeight){
    redDiv();
  }
});
function redDiv(){
  mobileExit.style.display = 'block';

  redVidDiv.style.opacity = '0';
  redVidDiv.style.width = '20vw';
  redVidDiv.style.height = '42vw';
  redVidDiv.style.left = '20.5vw';
  redVidDiv.style.zIndex = '2';
  blackLayer.style.display = 'block';

  shadowLayer[0].style.display = 'none';
  shadowLayer[1].style.display = 'none';
  shadowLayer[2].style.display = 'none';

  blackLayer.style.backgroundColor = 'rgba(218,217,228)';

  setTimeout(function(){
    blackLayer.style.opacity = '1';
  },20);

  setTimeout(function(){
    redVid.src = 'assets/video/protoFixd.webm';
    redVid.style.left = '-6vw';
    redVid.style.top = '-2vw';
    redVid.style.width = '28.6vw';
    redVid.style.height = '45.6vw'

  setTimeout(function(){
    redVidDiv.style.opacity = '1';
    },200);
  },900);

exitmod++;
}

// beyouty
BeYouTyDiv.addEventListener('click',function(){
  mobileExit.style.display = 'block';

  BeYouTyDiv.style.width = '20vw';
  BeYouTyDiv.style.height = '42vw';
  BeYouTyDiv.style.zIndex = '2';

  blackLayer.style.display = 'block';

  shadowLayer[0].style.display = 'none';
  shadowLayer[1].style.display = 'none';
  shadowLayer[2].style.display = 'none';

  blackLayer.style.backgroundColor = 'white';

  BeYouTyDiv.style.opacity = '0';
  setTimeout(function(){
    blackLayer.style.opacity = '1';
  },20);

  setTimeout(function(){
    beyoutyVid.style.width = '28.6vw';
    beyoutyVid.style.height = '45.6vw';
    beyoutyVid.style.left = '-6vw';
    beyoutyVid.style.top = '-2vw';
    beyoutyVid.src = 'assets/video/nailsOne.webm';

    setTimeout(function(){
      BeYouTyDiv.style.opacity = '1';
      beyoutyVid.play();
    },100);
  },900);

  exitmod++;
});
// function mobile click exitButton
var exitmod =1;
function mobileExit(){
  if(exitmod%2===1){

  }
}

function playy(){
  redVid.src = 'assets/video/protoFixd.webm';
}
window.onload = function(){
  if(window.innerHeight > window.innerWidth){
    redVid.src = 'assets/video/protoFixd.webm';
    beyoutyVid.src = 'assets/video/nailsOne.webm';
  }
}
