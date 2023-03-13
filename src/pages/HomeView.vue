<script setup>

  import listProjet from '@/components/listProjets.vue';
  import anime from 'animejs';
</script>

<template>
  <main id="curseur">
    
    <div class="patterns font-unbounded">
  <svg class=" svg_anim" width="100%" height="100%">
 <text class="text_svg" x="45%" y="50%"  text-anchor="middle"  >
   Bryan 
 </text>
 </svg>
</div>
<div class="patterns font-unbounded -mt-24">
  <svg class=" svg_anim" width="100%" height="100%">
 <text class="text_svg" x="52%" y="60%"  text-anchor="middle"  >
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
        <p>{{ texteAffiche }}</p>
       
      </div>
    </div>
  </div>

      <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t -ml-16 from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div class=" "></div>


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
      

        



          <listProjet :max="9" />
        </div>
      </div>
      <div class="w-max m-auto bg-gradient-to-t from-cyan-500 to-purple-500 text-xs sm:text-2xl rounded-3xl p-1">
        <div class="bg-black-light h-full w-full rounded-3xl px-5 py-6">
          <RouterLink to="/projets" class="font-unbounded font-regular ">
            <span> Autres projets</span>
          </RouterLink>  
        </div>    
      </div>
    </div>
    <div>
      <div id="about" class="text-center sm:text-left sm:ml-20 mt-28 sm:">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center">À propos de moi</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-52 sm:ml-96 sm:text-7xl text-center">à propos de moi</h2>
      </div>
      <div class="flex flex-col sm:flex-row items-center ">
        <div>
          <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30 -ml-16 -mb-52"></div>

        <KinesisContainer>
            <KinesisElement
            :strength="20" 
            type="depth">
<div class=" flex sm:text-left text-center justify-center">
        <img class="bg-gray-700 rounded-3xl ml-0 sm:ml-14 sm:mb-36 mb-10  sm:w-96 w-1/2 mt-20 sm:mt-1   " src="@/assets/bryan.webp" alt="">
      </div>
        
        </KinesisElement>
        </KinesisContainer>
      </div>
        <div class="text-xs mx-10 sm:mr-10 sm:text-2xl">
          <div class=" p-2 sm:p-32">
          <p class="font-unbounded mb-10">Je m'appelle Bryan Ferry et je suis actuellement un étudiant en <strong class="text-purple-500">2ème année de BUT Métier du Multimédia et de l'Internet</strong> à Montbéliard</p>
          <p class="font-unbounded mb-10">Je suis spécialisé dans le domaine du design et plus précisément sur l'UI Design, la création d'affiche, de logo et de tout ce qui est lié à la <strong class="text-cyan-400">création graphique d'une marque</strong></p>
        </div>





          <div class="w-max m-auto bg-gradient-to-t from-cyan-500 to-purple-500 rounded-3xl p-1">
            <div class="bg-black-light h-full w-full rounded-3xl px-10 py-5">

                

              <a href="src/assets/cv.pdf" class="font-unbounded font-medium" download="cv_Bryan_Ferry.pdf"> 
                <span>Télécharger mon CV</span>
              </a>
            </div>    
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="contact" class="text-center  mt-12">
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


.patterns {
  height: 25vh;
  z-index: 1000;
}



.text_svg {
  font-family: "Goblin One";
  letter-spacing: 10px;
  stroke: #437de8;
  font-size: 150px;
  font-weight: 700;
  stroke-width: 5;
 
  animation: textAnimate 7s infinite alternate;
  
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
  background-image: url('@/assets/ez.gif');
  background-size: cover;
  background-position: center;
  width: 1/3;

}


.background-image2 {
  background-image: url('@/assets/new_bg.gif');
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

.scintillate {
  
  animation: scintillate 2s ease-in-out infinite;
}


@keyframes scintillate {
  0% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px #9022CF);
  }
  50% {
    scale: 1.05;
    filter: drop-shadow(0px 0px 5px #9022CF);
  }
  100% {
    scale: 1;
    filter: drop-shadow(0px 0px 5px #9022CF);
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
    background: linear-gradient(45deg, #9d08b7, #9d00ff, #6600ff, #1100ff, #0084ff, #12ace4, #0000ff, #9500ff, #c000d2);
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

