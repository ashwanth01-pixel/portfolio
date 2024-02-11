<!DOCTYPE html>
<html lang="en" height=100%>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASH</title>
  <link href ="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <link rel="stylesheet" href="./website.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

  <body style="background-color:rgb(0, 0, 0);">
    <div class="bg"> 
      <nav id="mynav">
        <ul>
          <li> <a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

    </div>
    <div class="center">
      <h1 class="fw-bold" style="float: left">Heyoo,I'm <span>Ashwanth</span> From India</h1>
      <img src="photo-output.JPG" class="ashk">
      <hr>
    </div>
    


    <div id="about">
      <h1 id="about">ABOUT</h1>
      <p>I am an enthusiastic, reliable, responsible, self-determined and hard working person. I am a mature team worker and has adaptive nature to handle challenges in workspace. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p>
      <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
      <hr>
    </div>
    <div id="projects" height="201%">
      <h1>PROJECTS</h1>
      <div class="gridtext-center">
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./webpage.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">WEBSITE</h5>
            <p class="card-text">This is my website</p>
            <a href="https://github.com/ashwanth01-pixel/WEBSITE" class="btn btn-primary" style="color: #ffff">Full Details</a>
          </div>
        </div> 
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./roboticarm.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">ROBOTIC ARM</h5>
            <p class="card-text">Robotic Arm interfacing with MSP432P401R Microcontroller controlling in 3modes.</p>
            <a href="https://github.com/ashwanth01-pixel/ROBOTIC-ARM-INTERFACING-WITH-MSP432P401R" class="btn btn-primary" style="color: #ffff">Full Details</a>
          </div>
        </div>
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./evm.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">ELECTRONIC VOTING MACHINE</h5>
            <p class="card-text">Electronic Voting Machine interfacing with LPC2148 Microcontroller to vote candidates and show the number of votes</p>
            <a href="https://github.com/ashwanth01-pixel/ELECTRONIC-VOTING-MACHINE-INTERFACING-LPC2148" class="btn btn-primary">Full Details</a>
          </div>
        </div>  
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./wine.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">WINEQUALITY PREDICTION</h5>
            <p class="card-text">Winequality prediction using machine learning totally it is based on python programming and using machine models</p>
            <a href="https://github.com/ashwanth01-pixel/WINEQUALITY-PREDICTION-MACHINE-LEARNING" class="btn btn-primary">Full Details</a>
          </div>
        </div>
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./ac.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">AUTOMATIC AC CONTROLLER</h5>
            <p class="card-text">automatic motor controller using temperature sensor interfacing with LPC2148 Microcontroller</p>
            <a href="https://github.com/ashwanth01-pixel/AUTOMATIC-AC-CONTROLLER-INTERFACING-LPC2148" class="btn btn-primary">Full Details</a>
          </div>
        </div>
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./adalmpluto.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">ADALM PLUTO</h5>
            <p class="card-text">The ADALM-PLUTO is a portable software-defined radio (SDR) to transmit and recieve the uploaded audio or audio as a input</p>
            <a href="https://github.com/ashwanth01-pixel/ADALM-PLUTO-SOFTWARE-DEFINED-RADIO" class="btn btn-primary">Full Details</a>
          </div>
        </div>
        <div class=".g-col-6" style="width: 18rem;">
          <img src="./audio.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">AUDIO SPECTRUM ANALYZER</h5>
            <p class="card-text">audio spectrum analyzer shows the different frequencies in sound, helping analyze and improve audio quality for various applications.</p>
            <a href="https://github.com/ashwanth01-pixel/AUDIO-SPECTRUM-ANALYZER-SIGNAL-PROCESSING" class="btn btn-primary">Full Details</a>
          </div>
        </div>
        <div class=".g-col-6" style="width: 18rem;">
          <img src="more.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">MORE</h5>
            <p class="card-text">For more check through my repository.</p>
            <a href="https://github.com/ashwanth01-pixel?tab=repositories" class="btn btn-primary">Full Details</a>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <div id="portfolio" height="201%">
      <h1>PORTFOLIO</h1>
      <p id="portfolio">"Discover my diverse portfolio showcasing captivating creations and innovative projects"</p>
      <button type="button" class="btn btn-primary btn-lg btn-block" ><a href="./Res.PNG" class="button"style="color:#ffffff">DOWNLOAD CV</button></a>
    </div>
    <div id="contact">
      <h1>fa fa-envelope</h1>

      <i class="fa fa-envelope"></i>
      <i class="fa fa-envelope" style="font-size:24px"></i>
      <i class="fa fa-envelope" style="font-size:36px"></i>
      <i class="fa fa-envelope" style="font-size:48px;color:red"></i>
      <br>

      <p>Used on a button:</p>
      <button style="font-size:24px">Button <i class="fa fa-envelope"></i></button>

      <p>Unicode:</p>
      <i style="font-size:24px" class="fa">&#xf0e0;</i>



    </div>
  </body>
 </html>
