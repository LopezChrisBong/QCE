<script>
export default {
  data() {
    return {
      color: 'none',
      
      font: {
      },
      color1: 'none',
      font: {
      },
      color2: 'none',
      color3: 'none',
      color4: 'none',
      color5: 'none',
      color6: 'none',
      color7: 'none',
      color8: 'none',
      color9: 'none',
      color10: 'none',
      color11: 'none',
      color12: 'none',
      color13: 'none',
      color14: 'none',
      color15: 'none',
      color16: 'none',
      color17: 'none',
      color18: 'none',
      color19: 'none',
      color20: 'none',
      color21: 'none',
      color22: 'none',
      color23: 'none',
      color24: 'none',
    }
  },
}
</script>
<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div>
    <div class="steps-container">
    <ul class="steps-list">
      <li class="step">
        <div class="step-bubble-active">
          <div class="count">1</div>
        </div>
        <div class="step-label ">Commitment</div>
        <div class="step-line-active">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">2</div>
        </div>
        <div class="step-label ">Knowledge of the subject matter</div>
        <div class="step-line">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">3</div>
        </div>
        <div class="step-label ">Teacher for independent learning</div>
        <div class="step-line">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">4</div>
        </div>
        <div class="step-label ">Management of Learnings</div>
        <div class="step-line">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">5</div>
        </div>
        <div class="step-label ">Comments</div>
        <div class="step-line">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step-last">
        <div class="step-bubble">
          <div class="count">6</div>
        </div>
        <div class="step-label">Review</div>
      </li>
    </ul>
  </div>
  </div>
  <div>
    
  <div class="stepper-content">
  
  <div class="stepper-panel">
    <div class="py-5">A. Commitment</div>
  </div>
    <div class="stepper-panels py-8">
      <div class="stepper-quest ">
        <p class="font-semibold">1. Demonstrates sensitivity to student’s ability to attend and absorb content information.</p>
        
        <div class="buttons">
        <button @click="color = 'green'"  class="rouded-full buto">5. Outstanding</button>
        <button @click="color1 = 'green'" class="buto1">4. Very Satisfaction</button>
        <button @click="color2 = 'green'" class="buto2"> 3. Satisfaction</button>
        <button @click="color3 = 'green'" class="buto3">2. Fair</button>
        <button @click="color4 = 'green'" class="buto4">1. Poor</button>
        </div>
      <!--
      
        <p>2. Integrates sensitivity his/her learning objectives with those of the students in a collaborative way.</p>
        
        <div class="buttons">
        <button @click="color5 = 'green'"  class="rouded-full buto5">5. Outstanding</button>
        <button @click="color6 = 'green'" class="buto6">4. Very Satisfaction</button>
        <button @click="color7 = 'green'" class="buto7">3. Satisfaction</button>
        <button @click="color8 = 'green'" class="buto8">2. Fair</button>
        <button @click="color9 = 'green'" class="buto9">1. Poor</button>
        </div>
        <p>3. Makes self available to students beyond official time.</p>
        
        <div class="buttons">
        <button @click="color10 = 'green'"  class="rouded-full buto10">5. Outstanding</button>
        <button @click="color11 = 'green'" class="buto11">4. Very Satisfaction</button>
        <button @click="color12 = 'green'" class="buto12">3. Satisfaction</button>
        <button @click="color13 = 'green'" class="buto13">2. Fair</button>
        <button @click="color14 = 'green'" class="buto14">1. Poor</button>
        </div>
        <p>4. Regularly comes to class on time, well - groomed and well - prepared to complete assigned responsibilities.</p>
        
        <div class="buttons">
        <button @click="color15 = 'green'"  class="rouded-full buto15">5. Outstanding</button>
        <button @click="color16 = 'green'" class="buto16">4. Very Satisfaction</button>
        <button @click="color17 = 'green'" class="buto17">3. Satisfaction</button>
        <button @click="color18 = 'green'" class="buto18">2. Fair</button>
        <button @click="color19 = 'green'" class="buto19">1. Poor</button>
        </div>
        <p>5. Keeps accurate record of students’ performance and prompt submission of the same.</p>
        
        <div class="buttons">
        <button @click="color20 = 'green'"  class="rouded-full buto20">5. Outstanding</button>
        <button  @click="color21 = 'green'" class="buto21">4. Very Satisfaction</button>
        <button  @click="color22 = 'green'" class="buto22">3. Satisfaction</button>
        <button  @click="color23 = 'green'" class="buto23">2. Fair</button>
        <button  @click="color24 = 'green'" class="buto24">1. Poor</button>
        </div>
        -->
      </div> 
        <div class="next">
         <a href="/Knowledge"><button class=" btn button-next ">Next</button></a> 
        </div>
    </div>
    
</div>
  </div>
  </div>
</div>

  <div class="">

  </div>

</template>
<style>
.steps-container{
  width: 90%;
  margin: 3rem;
}
.steps-list{
  display: flex;
  list-style: none;
}
.step{
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  height: 60px;
}
.step-last{
  display: flex;
  align-items: center;
  max-width: 100%;
  position: relative;
  height: 60px;
}
.step-bubble{
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border:1px solid;
  border-color: gray;
  background-color: white;
  transition:all .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-bubble-active{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border:1px solid;
  border-color: green;
  background-color: green;
  transition:all .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}



.step-label{
color: black;
font-size: 15px;
position: absolute;
margin-top: 5rem;
opacity: .3;
}
.step-line{
  width: 100%;
  height: 5px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -10;
}
.step-line-active{
  width: 100%;
  height: 5px;
  background-color: green;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -10;
}



.stepper-panel{
    color: #333;
    border: solid 1px;
    margin:5rem;
    border-radius: 3px;
    border-color: #c7c3c3;
    border-bottom: none;
    padding: 5px;
    
}


.stepper-panels{
    color: #333;
    border: solid 1px;
    margin:5rem;
    border-radius: 3px;
    border-color: #c7c3c3;
    margin-top: -5rem;
}
.stepper-quest{
  margin: 2rem;
  font-size: 18px;
}
button{
  width: 90%;
  border: solid 1px;
  border-radius: 3px;
  margin-bottom: 4px;
  text-align: left;
  padding-left: 2rem;
}

p{
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.next{
  direction: rtl;
  margin-right: 2rem;
  margin-bottom: 1rem;
}
button:hover{
  background-color: rgb(121, 207, 121);
}

.buto {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.buto1 {
  background-color: v-bind(color1);
}
.buto2 {
  background-color: v-bind(color2);
}
.buto3 {
  background-color: v-bind(color3);
}
.buto4 {
  background-color: v-bind(color4);
}
.buto5 {
  background-color: v-bind(color5);
}
.buto6 {
  background-color: v-bind(color6);
}
.buto7 {
  background-color: v-bind(color7);
}
.buto8 {
  background-color: v-bind(color8);
}
.buto9 {
  background-color: v-bind(color9);
}
.buto10 {
  background-color: v-bind(color10);
}
.buto11 {
  background-color: v-bind(color11);
}
.buto12 {
  background-color: v-bind(color12);
}
.buto13 {
  background-color: v-bind(color13);
}
.buto14 {
  background-color: v-bind(color14);
}
.buto15 {
  background-color: v-bind(color15);
}
.buto16 {
  background-color: v-bind(color16);
}
.buto17 {
  background-color: v-bind(color17);
}
.buto18 {
  background-color: v-bind(color18);
}
.buto19 {
  background-color: v-bind(color19);
}
.buto20 {
  background-color: v-bind(color20);
}
.buto21 {
  background-color: v-bind(color21);
}
.buto22 {
  background-color: v-bind(color22);
}
.buto23 {
  background-color: v-bind(color23);
}
.buto24 {
  background-color: v-bind(color24);
}

</style>