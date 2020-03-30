var video;
var snap = [];
var counter = 0;

var ww = 640;
var hh = 480;

var xpos = [];
var ypos = [];  
var numb = ww/10;
var numb0  = hh/8;



let pg;
let slider;
let button;

function setup() {
  createCanvas(ww,hh);
  background(0);
  video = createCapture(VIDEO);
  video.size(ww, hh);
  video.hide();

  pg = createGraphics(100,100);

  slider = createSlider(1, 3, 2);
  slider.position(60, height+20);
  slider.style('width', '80px');

  button = createButton('save');
  button.position(10, height+20);
  button.mousePressed(saveImg);


    for(var i = 0; i<ww; i+=numb){
    for(var j = 0; j<hh; j+=numb0){
      xpos = append(xpos,i);
      ypos = append(ypos,j);
    }
  }

}

function draw() {

  let val = slider.value();



  snap[counter] = video.get();
  counter++;
  if (counter == xpos.length) {
    counter = 0;
  }


  for(var i = 0; i<snap.length; i++){
    var index = (i*2 + frameCount*val) % snap.length;
    pg.image(snap[index],-xpos[i],-ypos[i]);

    push();
    translate(xpos[i],ypos[i]);
    image(pg,0,0);
    pop();

  }

  //filter(GRAY);
}


function saveImg() {
  save("imagen.jpg");
}
