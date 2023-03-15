<script setup>

  import listProjet from '@/components/listProjets.vue';

</script>

<template>
  <main class="">
    
    <div class="patterns -mt-20 sm:-mt-20 text-center">
  <svg class=" svg_anim" width="100%" height="100%">
 <text class="text_svg text-8xl sm:text-[170px] lg:text-[220px] " x="50%" y="50%"  text-anchor="middle"   >
   Bryan 
 </text>
 </svg>
</div>
<div class="patterns mobile_ajust -mt-72 sm:-mt-56 lg:-mt-48 text-center -mb-28">
  <svg class=" svg_anim" width="100%" height="100%">
 <text class="text_svg2 text-7xl sm:text-9xl lg:text-[160px]" x="58%" y="60%"  text-anchor="middle"  >
   Ferry
 </text>
 </svg>
</div>

    <div class="text-4xl sm:text-8xl flex flex-col text-center background-image bg-no-repeat espace sm:espace2">

 
      <div class=" flex text-right justify-end">
        
        <div class=" absolute w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>








      <div class=" flex text-center justify-center mt-7 mb-48">
      <div class="font-mrs-saint-delafield text-white text-2xl text-center sm:text-6xl sm:text-left sm:flex items-center ">
      <div class="sm:ml-10">
        <p class="shadow_blue text-3xl sm:text-5xl lg:text-6xl md:my-8">{{ texteAffiche }}</p>
       
      </div>
    </div>
  </div>

      <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t -ml-16 from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div class=" "></div>


    </div>  
   

    <div class="sm:ml-20 -mt-20">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center mt-10">Mes derniers projets</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-28 sm:ml-40 sm:text-7xl text-center">Mes derniers projets</h2>
      </div>

<div class="box_recent min-h-[80vh] mb-40 lg:mb-4">
      <div class="recent_project">
  <div class="box shadow_blue2">
    <div class="imgBx">
      <img src="@/assets/sprite.webp">
    </div>
    <div class="content">
      <div>
        <h2 class=" font-syncopate title_recent">Affiche Sprite</h2>
        <p class=" font-unbounded title_recent">Affiche sprite qui fait met en avant la fraicheur et les saveurs que la boisson fournit
        </p>
      </div>
    </div>
  </div>
  <div class="box shadow_pink2">
    <div class="imgBx">
      <img src="@/assets/monster.webp">
    </div>
    <div class="content">
      <div>
        <h2 class=" font-syncopate title_recent">Monster Energy</h2>
        <p class=" font-unbounded title_recent">Affiche publicitaire pour la marque monster énergie qui met en avant une de leurs canettes tenues par un monstre
        </p>
      </div>
    </div>
  </div>
  <a href="http://127.0.0.1:5173/projets/projet/Monster%20Energy">
  <div class="box shadow_blue2">
    <div class="imgBx">
      <img src="@/assets/michael.webp">
    </div>
    <div class="content">
      <div>
        <h2 class=" font-syncopate title_recent">Michael Scofield</h2>
        <p class=" font-unbounded title_recent">Affiche pouvant servir de présentation pour l'acteur principal de la série Prison Break
        </p>
      </div>
    </div>
  </div>
</a>
</div>

</div>

    <div class="text-center sm:text-left">
      <div class="sm:ml-20 -mt-20">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center mt-10">Projets</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-28 sm:ml-40 sm:text-7xl text-center">projets</h2>
      </div>


      <div class="py-5 background-image2 bg-no-repeat">



      <div class=" flex text-right justify-end">
        
      <div class=" w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
    </div>
  
      <div>
      

        



          <listProjet :max="8" />
        </div>
      </div>

    </div>



    <div class="box_bouton">

<RouterLink to="/projets"  class="button_main">
  <div class="button__line"></div>
  <div class="button__line"></div>
  <span class="button__text">VOIR TOUS</span>
  <div class="button__drow1"></div>
  <div class="button__drow2"></div>
</RouterLink>

</div>



    <div>
      <div id="about" class="text-center sm:text-left sm:ml-20 mt-28 ">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center">À propos de moi</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-52 sm:ml-96 sm:text-7xl text-center">à propos de moi</h2>
      </div>
      <div class="flex flex-col xl:flex-row items-center ">
        <div>
          <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30 -ml-16 -mb-52"></div>

        <KinesisContainer>
            <KinesisElement
            :strength="20" 
            type="depth">
<div class=" flex sm:text-left text-center justify-center xl:mb-[500px] xl:-mt-40 sm:-mt-20 mt-24 ">
        <img class="bg-gray-700 rounded-3xl ml-0 sm:ml-14 sm:mb-36 mb-10  sm:w-96 w-1/2     " src="@/assets/bryan.webp" alt="">
      </div>
        
        </KinesisElement>
        </KinesisContainer>
      </div>
        <div class="text-xs mx-10 sm:mr-10 sm:text-2xl -mb-32 sm:mb-0">
          <div class=" p-2 sm:p-2 xl:p-40">
          <p class="font-unbounded mb-10">Je m'appelle Bryan Ferry et je suis actuellement un étudiant en <strong class="text-purple-500">2ème année de BUT Métier du Multimédia et de l'Internet avec la spécialité design</strong> à Montbéliard.</p>
          <p class="font-unbounded mb-10">Je suis spécialisé dans le domaine du design et plus précisément sur l'UI Design, la création d'affiche, de logo et de tout ce qui est lié à la <strong class="text-cyan-400">création graphique d'une marque. </strong> </p>
          <p class="font-unbounded mb-10"> A côté du design, j'ai appris à créer des sites internet, à gérer des réseaux sociaux pour une entreprise par exemple mais également à concevoir de a à z une stratégie marketing afin qu'une entreprise puisse avoir les ressources numériques nécessaires afin de débuter.</p>
        </div>



<div class=" hidden sm:flex sm:text-center sm:justify-center xl:-mt-40">
        <a href="src/assets/cv.pdf"  download="cv_Bryan_Ferry.pdf"> 



  <div  class="  letter-image">
  <div class="animated-mail">
    <div class="back-fold"></div>
    <div class="letter">
      <div class="letter-border"></div>
      <div class="letter-title"></div>
      <div class="letter-context"></div>
      <div class="letter-stamp">
        <div class="letter-stamp-inner"></div>
      </div>
    </div>
    <div class="top-fold"></div>
    <div class="body"></div>
    <div class="left-fold"></div>
  </div>
  <div class="shadow"></div>
</div>


</a>
</div>



  <div class="box_bouton mb-40">

    <a href="src/assets/cv.pdf" class="font-unbounded font-medium button_main" download="cv_Bryan_Ferry.pdf"> 
  <div class="button__line"></div>
  <div class="button__line"></div>
  <span class="button__text">VOIR MON CV</span>
  <div class="button__drow1"></div>
  <div class="button__drow2"></div>
    </a>

</div>



        </div>
        <div class=" flex text-right justify-end">
        
        <div class=" absolute w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      </div>
      
    </div>
    
    <div>
 
      <div id="contact" class="text-center  sm:-mt-20">
        <h2 class="font-syncopate text-2xl sm:text-5xl">Contact</h2>
        <div class="background-image-contact bg-no-repeat sm:pb-32 ">
          <div>
        <h2 class="font-mrs-saint-delafield text-3xl sm:text-7xl ml-32 sm:ml-48">Contact</h2>
      </div>


      <div class="flex justify-between sm:justify-evenly items-center sm:w-auto m-12">

        <a href="https://www.instagram.com/bryanf.pro/" target="_blank"><img class=" w-16 sm:w-32 scintillate hover-image" src="@/assets/Instagram_white_contact.svg" alt="Logo instagram"></a>

        <a href="https://www.linkedin.com/in/bryan-ferry-523546216/" target="_blank"><img class="w-16 sm:w-32 scintillate hover-image " src="@/assets/LinkedIn_white_contact.svg" alt="Logo LinkedIn"></a>

        <a href="https://www.facebook.com/bryan.ferry.9809/" target="_blank"><img class="w-16 sm:w-32 scintillate hover-image" src="@/assets/Facebook_white.svg" alt="Logo Facebook"></a>

      </div>

 
     
      <button class="glow-on-hover" type="button">
        <a id="button-1" class="button font-unbounded font-bold" href="mailto:ferrybryan25@gmail.com" target="_blank">Envoyer un mail<img id="arrow-hover" src="@/assets/paper_Plane_new.svg"/></a>
        
        </button>


 <!--   <div>
        <div class="w-max m-auto bg-purple-500 rounded-full p-1">
          <div v-wave="{ color: '#9D32EA' }" class="bg-black-light h-full w-full rounded-full px-10 py-1">
            <a class="flex items-center font-unbounded font-bold" href="mailto:ferrybryan25@gmail.com" target="_blank"> 
              <p class="bg-black-light px-10 py-2 rounded-2xl"> E-mail</p>
              <img class="w-1/4" src="@/assets/paper_Plane_new.svg" alt="">
            </a>
          </div>    
        </div>
      </div>
      -->    
    </div>
    </div>
    </div>
    



  </main>
</template>

<style>




@import 'animate.css';



.button_main{
    position : relative ;
    z-index : 0 ;
    width : 240px ;
    height : 56px ;
    text-decoration : none ;
    font-size : 14px ; 
    font-weight : bold ;
    color : var(--line_color) ;
    letter-spacing : 2px ;
    transition : all .3s ease ;
    font-family: 'Unbounded';
}
.button__text{
    display : flex ;
    justify-content : center ;
    align-items : center ;
    width : 100% ;
    height : 100% ;
}
.button_main::before,
.button_main::after,
.button__text::before,
.button__text::after{
    content : '' ;
    position : absolute ;
    height : 3px ;
    border-radius : 2px ;
    background : linear-gradient(to right, #BC2EF5, #54BCFD); 
    transition : all .5s ease ;
}
.button_main::before{
    top : 0 ;
    left : 54px ;
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button_main::after{
    top : 0 ;
    right : 54px ;
    width : 8px ;
}
.button__text::before{
    bottom : 0 ;
    right : 54px ;
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button__text::after{
    bottom : 0 ;
    left : 54px ;
    width : 8px ;
}
.button__line{
    position : absolute ;
    top : 0 ;
    width : 56px ;
    height : 100% ;
    overflow : hidden ;
}
.button__line::before{
    content : '' ;
    position : absolute ;
    top : 0 ;
    width : 150% ;
    height : 100% ;
    box-sizing : border-box ;
    border-radius : 300px ;
    border : solid 3px white ;
}
.button__line:nth-child(1),
.button__line:nth-child(1)::before{
    left : 0 ;
}
.button__line:nth-child(2),
.button__line:nth-child(2)::before{
    right : 0 ;
}
.button_main:hover{
    letter-spacing : 6px ;
}
.button_main:hover::before,
.button_main:hover .button__text::before{
    width : 8px ;
}
.button_main:hover::after,
.button_main:hover .button__text::after{
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button__drow1,
.button__drow2{
    position : absolute ;
    z-index : -1 ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
}
.button__drow1{
    top : -16px ;
    left : 40px ;
    width : 32px ;
    height : 0;
    transform : rotate( 30deg ) ;
}
.button__drow2{
    top : 44px ;
    left : 77px ;
    width : 32px ;
    height : 0 ;
    transform : rotate(-127deg ) ;
}
.button__drow1::before,
.button__drow1::after,
.button__drow2::before,
.button__drow2::after{
    content : '' ;
    position : absolute ;
}
.button__drow1::before{
    bottom : 0 ;
    left : 0 ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -60deg ) ;
}
.button__drow1::after{
    top : -10px ;
    left : 45px ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( 69deg ) ;
}
.button__drow2::before{
    bottom : 0 ;
    left : 0 ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -146deg ) ;
}
.button__drow2::after{
    bottom : 26px ;
    left : -40px ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -262deg ) ;
}
.button__drow1,
.button__drow1::before,
.button__drow1::after,
.button__drow2,
.button__drow2::before,
.button__drow2::after{
    background : #8D27B6;
}
.button_main:hover .button__drow1{
    animation : drow1 ease-in .06s ;
    animation-fill-mode : forwards ;
}
.button_main:hover .button__drow1::before{
    animation : drow2 linear .08s .06s ;
    animation-fill-mode : forwards ;
}
.button_main:hover .button__drow1::after{
    animation : drow3 linear .03s .14s ;
    animation-fill-mode : forwards ;
}
.button_main:hover .button__drow2{
    animation : drow4 linear .06s .2s ;
    animation-fill-mode : forwards ;
}
.button_main:hover .button__drow2::before{
    animation : drow3 linear .03s .26s ;
    animation-fill-mode : forwards ;
}
.button_main:hover .button__drow2::after{
    animation : drow5 linear .06s .32s ;
    animation-fill-mode : forwards ;
}
@keyframes drow1{
    0%   { height : 0 ; }
    100% { height : 100px ; }
}
@keyframes drow2{
    0%   { width : 0 ; opacity : 0 ;}
    10%  { opacity : 0 ;}
    11%  { opacity : 1 ;}
    100% { width : 120px ; }
}
@keyframes drow3{
    0%   { width : 0 ; }
    100% { width : 80px ; }
}
@keyframes drow4{
    0%   { height : 0 ; }
    100% { height : 120px ; }
}
@keyframes drow5{
    0%   { width : 0 ; }
    100% { width : 124px ; }
}







.box_bouton{
    width : 100% ;
    height : 300px ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;
}








.box_recent{
 
  display: flex;
  justify-content: center;
  align-items: center;
  
 
  

}


.recent_project {
  position: relative;
  width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 500px;
  margin: auto;
  margin-top:10px ;
}
.recent_project .box {
  position: relative;
  width: 320px;
  height: 320px;
  background: #000;
  transition: 0.5s;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 45px;
}
.recent_project:hover .box {
  transform: rotateY(25deg);
}
.recent_project .box:hover ~ .box {
  transform: rotateY(-25deg);
}
.recent_project .box:hover {
  transform: rotateY(0deg) scale(1.25);
  z-index: 1;
  box-shadow: 0 25px 40px rgba(0,0,0,0.5);
}
.recent_project .box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.recent_project .box .imgBx:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,#BC2EF5,#54BCFD);
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.recent_project .box:hover .imgBx:before {
  opacity: 1;
}
.recent_project .box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recent_project .box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
}
.recent_project .box .content h2 {
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
  transition-delay: 0.3s;
}
.recent_project .box:hover .content h2 {
  transform: translateY(0px);
}
.recent_project .box .content p {
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(200px);
  transition-delay: 0.4s;
}
.recent_project .box:hover .content p {
  transform: translateY(0px);
}

.letter-image {
  display: flex;
  justify-items: center;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;

  cursor: pointer;
}

.animated-mail {
  position: absolute;
  height: 150px;
  width: 200px;
  transition: .4s;
  -webkit-transition: .4s;
  -moz-transition: .4s;
}

.animated-mail .body {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 200px;
  border-color: transparent transparent #3484da transparent;
  z-index: 2;
}

.animated-mail .top-fold {
  position: absolute;
  top: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 100px 0 100px;
  transform-origin: 50% 0%;
  transition: transform .4s .4s, z-index .2s .4s;
  -webkit-transform-origin: 50% 0%;
  -webkit-transition: transform .4s .4s, z-index .2s .4s;
  -moz-transform-origin: 50% 0%;
  -moz-transition: transform .4s .4s, z-index .2s .4s;
  border-color: #0f5aa6 transparent transparent transparent;
  z-index: 2;
}

.animated-mail .back-fold {
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 100px;
  background: #3484da;
  z-index: 0;
}

.animated-mail .left-fold {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent #3484da;
  z-index: 2;
}

.animated-mail .letter {
  left: 20px;
  bottom: 0px;
  position: absolute;
  width: 160px;
  height: 60px;
  background: white;
  z-index: 1;
  overflow: hidden;
  transition: .4s .2s;
  -webkit-transition: .4s .2s;
  -moz-transition: .4s .2s;
}

.animated-mail .letter .letter-border {
  height: 10px;
  width: 100%;
  background: repeating-linear-gradient(-45deg, #8fb5de, #92b0d0 8px, transparent 8px, transparent 18px);
}

.animated-mail .letter .letter-title {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 40%;
  background: #98b9de;
}

.animated-mail .letter .letter-context {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 20%;
  background: #b1cce9;
}

.animated-mail .letter .letter-stamp {
  margin-top: 30px;
  margin-left: 120px;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background: #96bae1;
  opacity: 0.3;
}



.letter-image:hover .animated-mail {
  transform: translateY(50px);
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
}

.letter-image:hover .animated-mail .top-fold {
  transition: transform .4s, z-index .2s;
  transform: rotateX(180deg);
  -webkit-transition: transform .4s, z-index .2s;
  -webkit-transform: rotateX(180deg);
  -moz-transition: transform .4s, z-index .2s;
  -moz-transform: rotateX(180deg);
  z-index: 0;
}

.letter-image:hover .animated-mail .letter {
  height: 180px;
}

.letter-image:hover .shadow {
  width: 250px;
}

.patterns {
  height: 45vh;
  z-index: 1000;
}



.text_svg {
  font-family: "Metal Mania";
  letter-spacing: 2px;
  stroke: #437de8;
  font-size: 250px;
  font-weight: 700;
  stroke-width: 1;
 
  animation: textAnimate 7s  alternate;
  
}

.text_svg2 {
  font-family: "Seaweed Script";
  letter-spacing: 10px;
  stroke: #437de8;
  font-size: 200px;
  font-weight: 700;
  stroke-width: 1;
 
  animation: textAnimate 7s  alternate;
  
}
@media only screen and (max-width: 1140px) {

.recent_project .box {
  
  
 
  height: 400px;
  width: 400px;
  margin-right: 400px;
  margin-left: 400px;
}
.title_recent{
  opacity: 1;
}

}
@media only screen and (max-width: 768px) {
.text_svg {
  font-size: 140px;
  
}
.text_svg2 {
  font-size: 110px;
}
.recent_project .box {
  
  
 
  height: 200px;
  width: 200px;
  margin-right: 400px;
  margin-left: 400px;
}
.title_recent{
  opacity: 0;
}

}


@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset:  30%;
    
    fill:hsl(0, 0%, 100%)

  }
  
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: hsla(347, 100%, 51%, 0)
  }
  
}




#arrow-hover {
  width: 40px;
  height: 40px;
  position: absolute;
  transform: translateX(10px);
  opacity: 0;
  -webkit-transition: all .50s cubic-bezier(.14, .59, 1, 1.01);
  transition: all .25s cubic-bezier(.14, .59, 1, 1.01);
  margin: 0;
  padding: 0 5px;
}

a#button-1:hover img {
  width: 50px;
  opacity: 1;
  transform: translateX(-100px);
  transform: translateY(-30px);
  
}
.background-image {
  background-image: url('@/assets/anim.gif');
  background-size: cover;
  background-position: center;
  width: 1/3;

}


.background-image2 {
  background-image: url('@/assets/test.gif');
  background-size: cover;
  background-position: center;
  width: 100%;
  
  
  

}
@media only screen and (max-width: 768px) {
.background-image2 {
background-size: 90%;
}
}

.background-image-contact {
  background-image: url('@/assets/moi_fond.png');
  background-size: cover;
  background-position: center;
}

.espace{
  padding-bottom: 350px;
}

.espace2{
  padding-bottom: 200px;
}

.shadow_pink{
  filter: drop-shadow(0px 0px 5px #9022CF);
}
.shadow_blue{
  filter: drop-shadow(0px 0px 5px #2FAAF0);
}

.shadow_blue2{
  filter: drop-shadow(0px 0px 20px #93e1ed9e);
}
.shadow_pink2{
  filter: drop-shadow(0px 0px 20px #db93ed9e);
}
.scintillate {
  
  animation: scintillate 2s ease-in-out infinite;
}


@keyframes scintillate {
  0% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px #2FAAF0);
  }
  50% {
    scale: 1.05;
    filter: drop-shadow(0px 0px 5px #9022CF);
  }
  100% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px #2FAAF0);
  }
}
.hover-image {
  transition: transform 0.3s ease;
}

.hover-image:hover {
  transform: scale(1.1);
}


.glow-on-hover {
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #1075c8, #2b63cc, #3535e1, #1100ff, #0084ff, #12ace4, #0000ff, #1812c8, #002ad2);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}



</style>

<script>
 
  export default {
  data() {
    return {
      texte: "Rendre ses idées concrètes en créant un univers unique... ",
      
      texteAffiche: "",
      index: 0,
      tempsEcriture: 70 
    };
  },
  mounted() {
    this.ecrireTexte();
  },
  methods: {
    ecrireTexte() {
      if (this.index < this.texte.length) {
        this.texteAffiche += this.texte.charAt(this.index);
        this.index++;
        setTimeout(this.ecrireTexte, this.tempsEcriture);
      }
    }
  },
  
  
  
};


</script>


