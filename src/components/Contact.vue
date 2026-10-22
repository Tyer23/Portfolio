<template>
   <div class="container">
      <div class="left">
         <h1 class="mt-0">Contact Me</h1>
         <p>I am always open to exploring new opportunities, applying my technical skills, and building connections within the technology industry.
            I believe these experiences will help me continue growing professionally while allowing me to contribute positively to a team. If you'd 
            like to discuss a potential opportunity or simply have a chat about technology, feel free to reach out!</p>

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
</template>

<script>
    export default {
        name: 'Contact'
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
      text-align: center;
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
      text-align: justify;
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin-top: 24px;
      justify-content: center;
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
</style>