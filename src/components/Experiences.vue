<template>
    <div class="container">
        <div class="left">
          <h1 class="mt-0">Experiences</h1>
          <p>Work and Volunteers</p>
        </div>
     
        <div class="right">
          <img src="../assets/experience.jpg" alt="Experience" />
        </div>
    </div>

    <div class="experience-section">
        <button class="dropdown-header" @click="work = !work" :aria-expanded="work">
           <span>Work</span>
           <span>{{ work ? '-' : '+' }}</span>
        </button>

        <div v-if="work" class="dropdown-content">
            <div class="timeline-item">
                <div class="icon">
                   <img src="../assets/swinburne.png" alt="Swinburne" />
                </div>

                <div class="card">
                   <h3 class="place">Research Assistant - Swinburne University of Technology</h3>
                   <p class="date">January 2025 - July 2025</p>

                   <p class="desc">Assist to develop an AI program for detecting corrosion using drone-captured videos</p>
                   <ul class="tasks">
                       <li>Collaborated with supervisors to design and implement innovative software solutions that meet project requirements</li> 
                       <li>Developed, tested, and optimised codes to maintain the reliability and efficiency of the program</li>
                       <li>Conducted weekly progress reviews with tutors, sought feedback on project management and communication skills to keep the project on track</li>
                   </ul>
                </div>
            </div>

            <div class="timeline-item">
                <div class="icon">
                    <img src="../assets/grilld.png" alt="Grill'd" />
                </div>

                <div class="card">
                   <h3 class="place">Customer Service and Chef – Grill’d Malvern</h3>
                   <p class="date">December 2022 – present</p>

                   <p class="desc">Provide high-quality and consistent customer service and promote a healthy work environment to other team members</p>
                   <ul class="tasks">
                      <li>Take and deliver orders in a friendly manner</li>
                      <li>Coordinate with team members and managers with clear communication to maintain efficient workflow, especially during peak hours</li>
                      <li>Resolve customer concerns quickly and professionally</li>
                      <li>Follow restaurant policies and procedures to maintain the healthy working environment</li> 
                   </ul>
                   <p class="achieve"><strong>Achievement:</strong> Awarded ‘Team Member of The Month’ in June 2023 and June 2025</p>
                </div>
            </div>
        </div>
    </div>

    <div class="experience-section">
        <button class="dropdown-header" @click="volunteer = !volunteer" :aria-expanded="volunteer">
           <span>Volunteer</span>
           <span>{{ volunteer ? '-' : '+' }}</span>
        </button>

        <div v-if="volunteer" class="dropdown-content">
            <div class="card">
                <ul class="tasks">
                    <li>Member of the Swinburne Coding and Robotics Society</li> 
                    <li>Volunteer at the Welcome Back event and Orientation Week at Swinburne University</li>
                    <li>Volunteer at Swinburne’s Study Buddy Program for Japanese students</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Experiences',

        data() {
            return {
               work: false,
               volunteer: false
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

    .left p {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.7;
      font-size: 1.25em;
    }

    .experience-section {
      margin-bottom: 20px;
      border: 0;
      border-radius: none;
      overflow: hidden;
      background: transparent;
    }

    .dropdown-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 18px 20px;
      border: none;
      border-radius: 0;
      background: #d6e9ff;
      color: #213547;
      font-size: 1.15rem;
      font-weight: 600;
      cursor: pointer;
    }

    .dropdown-content {
       margin-top: 15px;
    }

    .timeline-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 25px;
    }

    .icon {
      flex: 0 0 120px;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0;
      background: transparent;
      overflow: hidden;
    }

    .icon img {
      width: 100%;
      height: 100%;
      padding: 6px;
      object-fit: contain;
    }

    .card {
      flex: 1;
      min-width: 0;
      padding: 25px;
      border: 1px solid #d5dce5;
      border-radius: 12px;
      background: #f8fbff;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
    }

    .place {
      margin: 0 0 6px;
      font-weight: 600;
      color: #213547;
      font-family: Arial, Helvetica, sans-serif;
    }

    .date {
      margin-top: 4px;
      font-size: 0.9rem;
      line-height: 1.7;
      color: #44546a;
      font-family: Arial, Helvetica, sans-serif;
    }

    .desc {
      margin-bottom: 8px;
      line-height: 1.7;
      color: #44546a;
      font-family: Arial, Helvetica, sans-serif;
    }

    .tasks {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
      color: #44546a;
      font-family: Arial, Helvetica, sans-serif;
    }

    .tasks li {
      margin-bottom: 8px;
      line-height: 1.7;
      font-family: Arial, Helvetica, sans-serif;
    }

    .achieve {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>



