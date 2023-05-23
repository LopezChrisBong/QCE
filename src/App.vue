<template>
  <main class="bg-slate-100 pb-5">
  <div>
  <nav class="flex justify-left space-x-10 main-nav ">
    <img alt="Vue logo" class="logo" src="./assets/pix/SummerLms.gif" width="125" height="125" />
    <a href="/home" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
    <a href="/dashboard" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Dashboard</a>
    <a href="/mycourse" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">My Course</a>
    </nav>
  </div>
      <div>
      <nav class="flex justify-left  nav_sec">
        <div class="space-x-10 mt-4 mb-4 ml-15 sec_nav ">
          <a href="/dashboard" class="pt-5 pb-5 font-bold px-3 py-2 text-slate-1000 rounded-lg  hover:text-slate-900">QCE Faculty Evaluation</a>
          <a href="/team" class="pt-5 pb-5 font-bold px-3 py-2 text-slate-1000 rounded-lg  hover:text-slate-900">Responses</a>
        </div>
    </nav>
  </div>
  <div class="flex justify-left font-bold px-5 py-4">
    <b><p id="Faculty_text" class="font-bold md:font-bold md:text-sm">Faculty Evaluation for (Teacher's Name)</p></b> 
  </div>


  <div>
    <div>
      <div>
        <div class="flex justify-center ml-20 mr-20 border rounded-md bg-white py-3 pl-5 pr-5">
        <div >
          <span class="faculty-text">Instruction: Please Evaluate the faculty using below. Underline your rating.</span>
              <table class="border-collapse border">
              <thead>
                <tr>
                  <th class="border border-slate-300">Scale</th>
                  <th class="border border-slate-300">Range</th>
                  <th class="border border-slate-300">Descriptive Rating</th>
                  <th class="border border-slate-300">Qualitative Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300 td-left">5</td>
                  <td class="border border-slate-300 td-left">81-100</td>
                  <td class="border border-slate-300 td-left">Outstanding</td>
                  <td class="border border-slate-300">
                    The performance almost always exceeds the job requirements.<br>
                    The faculty is an exceptional role model.</td>
                  
                </tr>
                <tr>
                  <td class="border border-slate-300 td-left">4</td>
                  <td class="border border-slate-300 td-left">61-80</td>
                  <td class="border border-slate-300 td-left">Very Satisfactory</td>
                  <td class="border border-slate-300 ">The performance meets and often exceeds the job requirements.</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 td-left">3</td>
                  <td class="border border-slate-300 td-left">41-60</td>
                  <td class="border border-slate-300 td-left">Satisfactory</td>
                  <td class="border border-slate-300 ">The performance meets job requirements.</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 td-left">2</td>
                  <td class="border border-slate-300 td-left">21-40</td>
                  <td class="border border-slate-300 td-left">Fair</td>
                  <td class="border border-slate-300 ">The performance needs some development to meet job requirements.</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 td-left">1</td>
                  <td class="border border-slate-300 td-left">1-20</td>
                  <td class="border border-slate-300 td-left">Poor</td>
                  <td class="border border-slate-300 ">The faculty fails to meet job requirements.</td>
                </tr>
              </tbody>
            </table>
      <div id="Button_Next">
   <router-link to="/qce_quiz"><button class="rounded-lg bg-green-500 mt-2 p-2 pl-4 pr-4 mr-6">Next</button></router-link>
   <router-view />
      </div>
        </div>
        
      </div> 
      </div>
    </div>
  </div>
  
  </main>
</template>

















<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
