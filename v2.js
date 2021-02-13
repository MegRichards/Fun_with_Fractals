let rn;
let p1, p2, p3;
let a1, a2, a3, a4, m1, m2, m3, m4;
let start_point;
let current_point;
let next_point;
let direction;
let move;
let points = [];
let tslider;
let sel;


function setup() {
  createCanvas(400, 400);
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  p1 = createVector(width/2, height/5);
  p2 = createVector(width/4, height * 0.75);
  p3 = createVector(width * 0.75, height * 0.75);
  a1 = createVector(width * 0.75, height * 0.75);
  a2 = createVector(width/4, height * 0.75);
  a3 = createVector(width/4, height/4);
  a4 = createVector(width * 0.75, height/4);
  m1 = createVector(width/4, height/2);
  m2 = createVector(width/2, height * 0.75);
  m3 = createVector(width/2, height/4);
  m4 = createVector(width * 0.75, height/2);
  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  tslider = createSlider(1,256,126,25)
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.option('3');
  sel.option('4*');
  sel.option('5');
  sel.selected('3');
  sel.changed(mySelectEvent);

   
}

function draw() {
  background(220);
  let item = sel.value()
  frameRate(tslider.value());
  stroke('purple');
  strokeWeight(10);
  if(item == '3'){
    point(p1);
    point(p2);
    point(p3);
    stroke('blue');
    strokeWeight(5);
    rn = random([1, 2, 3]);
    if(rn == 1){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 2){
      direction = p5.Vector.sub(p2, start_point);
      direction.mult(0.5);
    }
    if(rn == 3){
      direction = p5.Vector.sub(p3, start_point);
      direction.mult(0.5);
    }
    move = p5.Vector.add(start_point, direction);
    points.push(move);
    for(let i = 0; i < points.length; i++){
      point(points[i]);
    }
    start_point = move;}
  if(item == '4*'){
    point(a1);
    point(a2);
    point(a3);
    point(a4);
    point(m1);
    point(m2);
    point(m3);
    point(m4);
    stroke('blue');
    strokeWeight(5);
    rn = random([1, 2, 3,4,5,6,7,8]);
    if(rn == 1){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 2){
      direction = p5.Vector.sub(p2, start_point);
      direction.mult(0.5);
    }
    if(rn == 3){
      direction = p5.Vector.sub(p3, start_point);
      direction.mult(0.5);
    }
    if(rn == 4){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 5){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 6){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 7){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 8){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    move = p5.Vector.add(start_point, direction);
    points.push(move);
    for(let i = 0; i < points.length; i++){
      point(points[i]);
    }
    start_point = move;}
  if(item == '5'){
    point(p1);
    point(p2);
    point(p3);
    stroke('blue');
    strokeWeight(5);
    rn = random([1, 2, 3]);
    if(rn == 1){
      direction = p5.Vector.sub(p1, start_point);
      direction.mult(0.5);
    }
    if(rn == 2){
      direction = p5.Vector.sub(p2, start_point);
      direction.mult(0.5);
    }
    if(rn == 3){
      direction = p5.Vector.sub(p3, start_point);
      direction.mult(0.5);
    }
    move = p5.Vector.add(start_point, direction);
    points.push(move);
    for(let i = 0; i < points.length; i++){
      point(points[i]);
    }
    start_point = move;}

  

}