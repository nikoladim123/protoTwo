var blackLayer = document.getElementsByClassName('blackLayer')[0];
// vid divs
var redVidDiv = document.getElementsByClassName('redVidDiv')[0];
var BeYouTyDiv = document.getElementsByClassName('BeYouTyDiv')[0];
// vids
var redVid = document.getElementsByClassName('redVid')[0];
var beyoutyVid = document.getElementsByClassName('beyoutyVid')[0];

var exitButton = document.getElementsByClassName('exitButton')[0];
exitButton.addEventListener('click',()=>{
  redVid.src = '';
  beyoutyVid.src = '';
  redVidDiv.style.left = '0';
  BeYouTyDiv.style.left = '0';
  redVidDiv.style.width = '17.41vw';
  BeYouTyDiv.style.width = '17.41vw';
  redVidDiv.style.height = '36.795vw';
  BeYouTyDiv.style.height = '36.795vw';


  blackLayer.style.opacity = '0';
  setTimeout(function(){
    blackLayer.style.display = 'none';
    redVidDiv.style.zIndex = '0';
    BeYouTyDiv.style.zIndex = '0';
  },1000);
})

redVidDiv.addEventListener('click',function(){
  redVidDiv.style.width = '20vw';
  redVidDiv.style.height = '42vw';
  redVidDiv.style.left = '20.5vw';
  redVidDiv.style.zIndex = '2';
  redVid.src = 'assets/video/redProt.webm'
  blackLayer.style.display = 'block';

  setTimeout(function(){
    blackLayer.style.opacity = '1';
  },20);

});

BeYouTyDiv.addEventListener('click',function(){
  BeYouTyDiv.style.width = '20vw';
  BeYouTyDiv.style.height = '42vw';
  BeYouTyDiv.style.zIndex = '2';
  beyoutyVid.src = 'assets/video/nails.webm';
  blackLayer.style.display = 'block';

  setTimeout(function(){
    blackLayer.style.opacity = '1';
  },20);

});
