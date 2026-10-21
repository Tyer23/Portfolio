<template>
   <div class="container">
      <div class="left">
         <h1 class="mt-0">Tyler Luc</h1>
         <p>Passionate about technology, software development, and artificial intelligence. Enjoy learning new technologies 
            and applying my programming and communication skills to solve real-life technological problems.</p>

         <div class="links">
            <a href="https://github.com/Tyer23" target="_blank" rel="noopener noreferrer" class="github" >
                <i class="fa-brands fa-github"></i>        
            </a>
            <a href="https://linkedin.com/in/tyler-luc-25a94029b" target="_blank" rel="noopener noreferrer" class="linkedin" >
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:tylerluc08@gmail.com" class="email" >
                <i class="fa-brands fa-google"></i>          
            </a>
         </div>
      </div>
     
      <div class="right">
         <img src="../assets/photo.jpg" alt="Tyler" />
      </div>
   </div>

   <div class="about">
      <h1 class="mt-0">About Me</h1>
      <p>My name is Tyler Luc, and I am a recent Bachelor of Computer Science graduate from Swinburne University of Technology, 
         majoring in Internet of Things and Artificial Intelligence. Through over 3 years of work experience in a fast-paced environment, 
         I have developed strong teamwork, problem-solving, and communication skills. Combined with my experiences in various programming 
         languages - including HTML, CSS, and JavaScript (Vue.js, Node.js) - I am eager to apply my technical expertise to develop innovative 
         solutions that address real-world challenges.</p>
   </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
      max-width: 1100px;
      margin: 0px auto 60px;
      padding: 20px;
    }

    .left {
      flex: 1;
      text-align: left;
    }

    .left h1 {
      font-size: 2.5em;
      font-family: Arial, Helvetica, sans-serif;
      color: rgb(255, 0, 0);
      font-weight: bold;
      margin-bottom: 20px;
    }

    .left p {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.7;
      font-size: 1.25em;
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin-top: 24px;
    }

    .links a {
      display: inline-flex;
      font-size: 32px;
      text-decoration: none;
      transition: transform 0.2s;
    }

    .github {
      color: #181717;
    }

    .linkedin {
      color: #0A66C2;
    }

    .email {
      color: #EA4335;
    }

    .right {
      flex: 0 0 250px;
    }

    .right img {
      display: block;
      width: 100%;
      max-width: 250px;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }

    .about {
      max-width: 1100px;
      margin: 0 auto 60px;
      padding: 20px;
      text-align: left;
    }

    .about h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2.5em;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }

    .about p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.25em;
      line-height: 1.8;
      color: #444;
      text-align: justify;
    }
</style>



