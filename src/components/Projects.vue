<template>
    <div class="container">
        <div class="left">
          <h1 class="mt-0">Projects</h1>
        </div>
     
        <div class="right">
          <img src="../assets/project.png" alt="Projects" />
        </div>
    </div>

    <div class="row">
        <div v-for="project in allProjects" :key="project.id" class="col-md-6 col-lg-4">
            <!-- Make cards for each projects -->
            <div class="card h-100">
                <img class="card-img-top" src="../assets/projects.jpg" alt="News" >
                <h4 class="fw-bold">{{ project.title }}</h4>
                <p>{{ project.content }}</p>
                <a :href="project.link" target="_blank" rel="noopener noreferrer" class="button">View Project</a>
            </div>
        </div>
    </div>
 </template>

<script>
   import allProjects from '../../public/projects.json'

   export default {
      name: 'Projects',

      data() {
         return {
           allProjects
         }
      }
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

    .right {
      flex: 0 0 500px;
    }

    .right img {
      display: block;
      width: 100%;
      max-width: 500px;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 25px;
      border: 1px solid #d5dce5;
      border-radius: 12px;
      background: #f8fbff;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    }

    .card-img-top {
      display: block;
      margin: 0 auto;
      width: 80%;
      object-fit: contain;
    }

    .card h4 {
      margin-top: 0;
      color: #213547;
      font-size: 1.4rem;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }

    .card p {
      flex-grow: 1;
      color: #44546a;
      line-height: 1.7;
      font-family: Arial, Helvetica, sans-serif;
      text-align: justify;
    }

    .button {
      display: inline-block;
      align-self: center;
      margin-top: 15px;
      padding: 10px 18px;
      border-radius: 6px;
      background: #2878c8;
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
    }

    .button:hover {
       background: #1c5e9e; 
    }
</style>
