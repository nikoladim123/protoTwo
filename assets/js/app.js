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
  redVid.style.width = '100%';
  redVid.style.height = '100%'
  beyoutyVid.style.width = '100%';
  beyoutyVid.style.height = '100%';
  redVidDiv.style.zIndex = '0';
  BeYouTyDiv.style.zIndex = '0';
  shadowLayer[0].style.display = 'block';
  shadowLayer[1].style.display = 'block';
  shadowLayer[2].style.display = 'block';



  blackLayer.style.opacity = '0';
  setTimeout(function(){
    blackLayer.style.display = 'none';
  },1000);
})

redVidDiv.addEventListener('click',function(){
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
    redVid.style.width = 'auto';
    redVid.style.height = 'auto'
    redVid.src = 'assets/video/protoFixd.webm'
  },900);


});

BeYouTyDiv.addEventListener('click',function(){
  BeYouTyDiv.style.width = '20vw';
  BeYouTyDiv.style.height = '42vw';
  BeYouTyDiv.style.zIndex = '2';
  blackLayer.style.display = 'block';
  shadowLayer[0].style.display = 'none';
  shadowLayer[1].style.display = 'none';
  shadowLayer[2].style.display = 'none';

  blackLayer.style.backgroundColor = 'white';

  setTimeout(function(){
    blackLayer.style.opacity = '1';
  },20);

  setTimeout(function(){
    beyoutyVid.style.height = 'auto';
    beyoutyVid.style.width = 'auto';
    beyoutyVid.src = 'assets/video/nailsOne.webm';
  },900);

});
