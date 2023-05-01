//variable hell
let cam;
let cam1;
let sphhhh
/*Camera Spawn Positions*/
var x = 0
var y = 1000
var z = 300
var AA = -100
var spd = 6
let sprint = 1
var yVel = 0
var j = 0
var x1 = 0
var y1 = 20
var z1 = 300
var rotx = 1
var roty = 1
var tog = 1;
//variable hell
var Cangun = true
var airAccel = 0
var rotx1
var roty1
var rotz1
var boolet
var blockPosX = [0]
var blockPosY = [0]
var blockPosZ = [0]
var omg = 0
//variable hell
var lll = cam.centerX
var llll = cam.centerY
var lllll = cam.centerZ
var ooo = cam.eyeX
var oooo = cam.eyeY
var ooooo = cam.eyeZ
var hit = 0
//variable hell ends

//let pew
//pew = loadSound()
var currentCamera = 0
function preload() {
  // img = loadImage('assets/OIP (1).jpeg');
  // Load model with normalise parameter set to true

  //https://www.cgtrader.com/items/986648/download-page 
}
function setup() {
  //textureWrap(MIRROR);
  createCanvas(1500, 800, WEBGL);
  console.log(width / height)
  fullscreen()
  background(51);
  cam = createCamera();
  cam1 = createCamera();
  sphhhh = sphere(10);
  // canvas.requestPointerLock()
  //cam.lookAt(0, 0, 0);
  cam.setPosition(x, -y, z)
  cam1.setPosition(x, -y, z)

  setCamera(cam)
}


onclick = function () {
  canvas.requestPointerLock();
  console.log(width / height)
};


function draw() {



  p5.Camera.prototype.fpsmove = function (x, y, z) {
    const local = this._getLocalAxes();

    // scale local axes by movement amounts
    // based on http://learnwebgl.brown37.net/07_cameras/camera_linear_motion.html
    const dx = [local.x[0] * x, local.x[1] * x, local.x[2] * x];
    const dy = [local.y[0] * y, local.y[1] * y, local.y[2] * y];
    //_getglobalaxes???
    const dz = [local.z[0] * -z, local.z[1] * -z, local.z[2] * -z];

    this.camera(
      this.eyeX + dx[0] - dz[0],
      this.eyeY + 0,
      this.eyeZ + dx[2] - dz[2],
      this.centerX + dx[0] - dz[0],
      this.centerY,
      this.centerZ + dx[2] - dz[2],
      0,
      1,
      0
    );
  };
  //y = -sin(sinJump - PI / 2) * 50 - 50
  // cam.setPosition(x, -y, z)
  background(20);

  //perspective(PI/3, width / height, 100, 100000);
  //fix me plz ^^^^^^^
  // cam.move(x,0 , z);
 /// normalMaterial();
  cam.pan(-movedX * 0.002);
  cam.tilt(movedY * 0.002);
  cam1.pan(-movedX * 0.002);
  cam1.tilt(movedY * 0.002);

  //cam.tilt(movedY * 0.001);

  canvas.onclick = function () {
    canvas.requestPointerLock();
  }

let bool1 = (lll-ooo)*boolet/500
let bool2 = (llll-oooo)*boolet/500
let bool3 = (lllll-ooooo)*boolet/500


  cam.setPosition(cam.eyeX, y, cam.eyeZ)
  // 87 is a  keyCode for "w"
  if (keyIsDown(87)) {
    z = -(spd * sprint) * airAccel
    cam.fpsmove(0, 0, z)
    cam1.move(0, 0, z)
    z1 += spd * sprint * airAccel

    //used to be z += spd * sprint

  }
  // 65 is a keyCode for "a"
  if (keyIsDown(65)) {
    x = -(spd * sprint) * airAccel
    cam.fpsmove(x, 0, 0)
    cam1.move(x, 0, 0)
    x1 += spd * sprint * airAccel
    //used to be x += spd * sprint
  }

  // 83 is a keyCode for "s"
  if (keyIsDown(83)) {
    z = (spd * sprint) * airAccel
    cam.fpsmove(0, 0, z)
    cam1.move(0, 0, z)
    z1 -= spd * sprint * airAccel
    //used to be z -= spd * sprint
  }

  // 68 is a  keyCode for "d"
  if (keyIsDown(68)) {
    x = (spd * sprint) * airAccel
    cam.fpsmove(x, 0, 0)
    cam1.move(x, 0, 0)
    x1 -= spd * sprint * airAccel
    //used to be x -= spd * sprint
  }

  if (keyIsDown(81)) {
    cam.lookAt(0, 0, 0)
    cam1.lookAt(0, 0, 0)

  }

  if (keyIsDown(39)) {
    cam.pan(-rotx * 0.05);
    cam1.pan(-rotx * 0.05);
  }
  if (keyIsDown(37)) {
    cam.pan(rotx * 0.05);
    cam1.pan(rotx * 0.05);
  }

  if (keyIsDown(38)) {
    cam.tilt(-roty * 0.05);
    cam1.tilt(-roty * 0.05);
  }
  if (keyIsDown(40)) {
    cam.tilt(roty * 0.05);
    cam1.tilt(roty * 0.05);
  }
  // 16 is a keyCode for [shift_key]
  if (keyIsDown(16)) {
    sprint = 2
  } else {
    sprint = 1
  }

  if (tog === 1 && keyIsDown(80)) {
    cam.setPosition(0, -20, 300);
  }

  if (tog === 0 && keyIsDown(80)) {
    cam1.setPosition(0, -20, 300);
  }


  function CanAirAccel() {
    if (keyIsDown(87) || keyIsDown(65) || keyIsDown(83) || keyIsDown(68)) {
      if (airAccel <= 3) {
        airAccel += 0.05
      }
    } else {
      airAccel = 1
    }
  }
  // 32 is a  keyCode for " " "[SPACEBAR]"
  if (keyIsDown(32)) {
    j += 0.1
    CanAirAccel();
    y = -sqrt(sin((j * PI) + ((3 * PI) / 2)) + 1) * 50

  } else if (y != 0) {
    j += 0.1

    CanAirAccel();
    y = -sqrt(sin((j * PI) + ((3 * PI) / 2)) + 1) * 50

  } else {
    airAccel = 1
  }

  //jumping script im really proud of
  //jumping is here to cross out a check list it doesnt do anything yet
  // you cannot jump over things 
  // there are no physics so no bhopping or speed advantage 
  //but there is hard coded BHOPPING speed/ air accel.
  //but no 
  //when you hold space the speed increases exponentialy basicly




  if (keyIsDown(18) && tog == 0) {
    setCamera(cam)
    tog = 1
    cam.setPosition(cam1.eyeX, y, cam1.eyeZ)

    return false;

  } else if (keyIsDown(18) && tog == 1) {
    setCamera(cam1);
    tog = 0
    cam1.setPosition(cam.eyeX, y, cam.eyeZ)

    return false;

  }

  background(255);
  if (mouseIsPressed || keyIsDown(69)) {

    if (mouseButton === LEFT || keyIsDown(69)) {
      
      boolet = boolet + 40
      




        
      }

      //if(mouseButton === RIGHT) {

        //append(blockPosX, cam.centerX)
       // append(blockPosY, cam.centerY)
       // append(blockPosZ, cam.centerZ)
       // omg= omg+1
     // }
      
 
    }
    
    
  if(boolet>10 && boolet <1000){

boolet = boolet + 40
     
      
      
      }else{
      boolet = 1
    runonces = 0
    lll = cam.centerX
    llll = cam.centerY
    lllll = cam.centerZ
    ooo = cam.eyeX
    oooo = cam.eyeY
    ooooo = cam.eyeZ
    }
push();
     translate(ooo, oooo, ooooo)

       translate(bool1,bool2,bool3);
      // noStroke()
       //fill(0,0,0)
//sphere(40)


  
   ambientMaterial(150, 150, 150)
    directionalLight(250, 250, 250, cam.centerX, cam.centerY, cam.centerZ);
  
    ambientLight(20, 20, 20)

  //translate(-100, 0, 0);
 
  noStroke()
  //rotateX(1.57 * 2);
  sphere(10)
pop();




  //cam.camera(x, y, z, map(mouseX, x, width, 1500, -1500, true), map(mouseY, z, height, -800, 800, true), map(mouseY * mouseX, y, height, -1500, 1500, true), 0, 1, 0)
  var grnd = -5
  push();
  push();
  ambientLight(150, 150, 150, -150, 0, 0)
  directionalLight(250, 250, 250, 100, 140, 0);
  directionalLight(255, 255, 255, -200, 140, 0);
  rotateX(1.57 * 2);
  //normalMaterial();
  ambientMaterial(50, 100, 100)
  noStroke();
  scale(10)
  translate(100, grnd + 2.5, 0)

  pop();
  if (Cangun == true) {
    push();


    translate(-200, 0, 0);

    //normalMaterial()
    ambientMaterial(150, 150, 150)
    directionalLight(250, 250, 250, -200, 200, 0);
    AA = AA - 1
    ambientLight(20, 20, 20)
    noStroke()
    rotateX(1.57 * 2)
    //rotateY(-AA*0.002)

    pop();
  }
  rotateX(1.57)

  fill(0, 0, 0)
  strokeWeight(2)
  //normalMaterial() //


  translate(0, grnd, -100)
  plane(4000, 4000, 2)

  translate(0, -grnd, 100)

  normalMaterial() //

  rotateX(-1.57)
  //fill(100, 200, 255)
  //smooth()

  stroke(0, 0, 0, 10)
  push();
  //textureWrap()    BR
  //texture(img);    UH

  sphere(100);
  pop();
  //smooth()
  pop();
  ambientMaterial(100, 200, 255) //

  ambientLight(255, 255,255) //
  stroke(0, 0, 0)
  strokeWeight(10)
  push();
  translate(0,-123,0)
  box(1000, 450, 1000);
  pop();
  push();
  translate(0,-250,0)
  fill(255, 255, 255)
  box(4000, 750, 4000);
  pop();
  //smooth()


  //noCursor();
  push();
  noFill();
  strokeWeight(1)
  translate(0, -100, 1000)
  rotateX(frameCount * 0.02)
  rotateY(frameCount * 0.02)
  box(100);
  pop();
  push()
  translate((cam.eyeX + cam.centerX) / 2, (cam.eyeY + cam.centerY) / 2, (cam.eyeZ + cam.centerZ) / 2)


  plane(5)
pop()
var eee = 0
////translate(blockPosX[eee],blockPosY[eee],blockPosZ[eee])
//box(10)
//for(var eee = 0; eee < omg ; eee++){

//translate(blockPosX[eee],blockPosY[eee],blockPosZ[eee])
//box(10)




//}
//if(bool1 == )


}
