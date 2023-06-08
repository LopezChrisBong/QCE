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
  <div class="w-10/12  lg:w-6/12">
  <div> <div class="steps-container">
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
          <div class="step-bubble-active">
            <div class="count">2</div>
          </div>
          <div class="step-label ">Knowledge of the subject matter</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">3</div>
          </div>
          <div class="step-label ">Teacher for independent learning</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">4</div>
          </div>
          <div class="step-label ">Management of Learnings</div>
          <div class="step-line-active">
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
    </div></div>
  <div><div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="">D. Management of Learnings</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest">
          <p>1. Creates opportunities for intensive and/or extensive contribution of students in the class activities (e.g. breaks class into dyads, triads or buzz/task groups).</p>
          
          <div class="buttons">
          <button @click="color = 'green'"  class="rouded-full manage">5. Outstanding</button>
          <button @click="color1 = 'green'" class="manage1">4. Very Satisfaction</button>
          <button @click="color2 = 'green'" class="manage2"> 3. Satisfaction</button>
          <button @click="color3 = 'green'" class="manage3">2. Fair</button>
          <button @click="color4 = 'green'" class="manage4">1. Poor</button>
          </div>
          
          <p>2. Assumes roles as facilitator, resource person, coach, inquisitor, integrator, referee in drawing students to contribution to contribute to knowledge and understanding the concepts at hands.</p>
          
          <div class="buttons">
            <button @click="color5 = 'green'"  class="rouded-full manage5">5. Outstanding</button>
            <button @click="color6 = 'green'" class="manage6">4. Very Satisfaction</button>
            <button @click="color7 = 'green'" class="manage7">3. Satisfaction</button>
            <button @click="color8 = 'green'" class="manage8">2. Fair</button>
            <button @click="color9 = 'green'" class="manage9">1. Poor</button>
          </div>
          <p>3.  Designs and implements learning conditions and experience that promotes healthy exchange and/or confrontations.</p>
          
          <div class="buttons">
            <button @click="color10 = 'green'"  class="rouded-full manage10">5. Outstanding</button>
            <button @click="color11 = 'green'" class="manage11">4. Very Satisfaction</button>
            <button @click="color12 = 'green'" class="manage12">3. Satisfaction</button>
            <button @click="color13 = 'green'" class="manage13">2. Fair</button>
            <button @click="color14 = 'green'" class="manage14">1. Poor</button>
          </div>
          <p>4. Structures/re-structures learning and teaching - learning context to enhance attainment of collective learning objectives.</p>
          
          <div class="buttons">
            <button @click="color15 = 'green'"  class="rouded-full manage15">5. Outstanding</button>
            <button @click="color16 = 'green'" class="manage16">4. Very Satisfaction</button>
            <button @click="color17 = 'green'" class="manage17">3. Satisfaction</button>
            <button @click="color18 = 'green'" class="manage18">2. Fair</button>
            <button @click="color19 = 'green'" class="manage19">1. Poor</button>
          </div>
          <p>5. Use instructional materials (audio/video materials: field trips, film showing, computer aided instruction and etc.) to reinforce learning process.</p>
          
          <div class="buttons">
            <button @click="color20 = 'green'"  class="rouded-full manage20">5. Outstanding</button>
            <button  @click="color21 = 'green'" class="manage21">4. Very Satisfaction</button>
            <button  @click="color22 = 'green'" class="manage22">3. Satisfaction</button>
            <button  @click="color23 = 'green'" class="manage23">2. Fair</button>
            <button  @click="color24 = 'green'" class="manage24">1. Poor</button>
          </div>
        </div> 
        <div class="flex justify-between ml-5 mt-10">
            <div class="Preview">
            <a href="/Independent"><button class=" btn button-next ">Preview</button></a> 
        </div>
          <div class="next">
            <a href="/Comments"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
      </div>
      
  </div></div>
  </div>
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


.manage {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.manage1 {
  background-color: v-bind(color1);
}
.manage2 {
  background-color: v-bind(color2);
}
.manage3 {
  background-color: v-bind(color3);
}
.manage4 {
  background-color: v-bind(color4);
}
.manage5 {
  background-color: v-bind(color5);
}
.manage6 {
  background-color: v-bind(color6);
}
.manage7 {
  background-color: v-bind(color7);
}
.manage8 {
  background-color: v-bind(color8);
}
.manage9 {
  background-color: v-bind(color9);
}
.manage10 {
  background-color: v-bind(color10);
}
.manage11 {
  background-color: v-bind(color11);
}
.manage12 {
  background-color: v-bind(color12);
}
.manage13 {
  background-color: v-bind(color13);
}
.manage14 {
  background-color: v-bind(color14);
}
.manage15 {
  background-color: v-bind(color15);
}
.manage16 {
  background-color: v-bind(color16);
}
.manage17 {
  background-color: v-bind(color17);
}
.manage18 {
  background-color: v-bind(color18);
}
.manage19 {
  background-color: v-bind(color19);
}
.manage20 {
  background-color: v-bind(color20);
}
.manage21 {
  background-color: v-bind(color21);
}
.manage22 {
  background-color: v-bind(color22);
}
.manage23 {
  background-color: v-bind(color23);
}
.manage24 {
  background-color: v-bind(color24);
}

  </style>