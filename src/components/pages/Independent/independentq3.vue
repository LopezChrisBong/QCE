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
      <!-- Question Steps-->
     <ul class="steps-list mt-14 ml-32">
      <li class="step">
        <div class="step-bubble-active">
          <div class="count">1</div>
        </div>
        <div class="step-labelq ">Question No. 1</div>
        <div class="step-line-active">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble-active">
          <div class="count">2</div>
        </div>
        <div class="step-labelq ">Question No. 2</div>
        <div class="step-line-active">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble-active">
          <div class="count">3</div>
        </div>
        <div class="step-labelq ">Question No. 3</div>
        <div class="step-line-active">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">4</div>
        </div>
        <div class="step-labelq ">Question No. 4</div>
        <div class="step-line">
              <div class="line-fill">
              </div>
        </div>
      </li>
      <li class="step">
        <div class="step-bubble">
          <div class="count">5</div>
        </div>
        <div class="step-labelq ">Question No. 5</div>
      </li>
    </ul>
<!--Question Step End-->
    </div></div>
  <div><div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="py-5">C. Teacher for independent learning</div>
    </div>
      <div class="stepper-panels py-8">
        <div class="stepper-quest">
          <p class="font-semibold">3. Allows students to crate their own course with objectives and realistically define student - professor rules and make them accountable for their performance.</p>
          
          <div class="buttons">
            <button @click="color10 = 'green'"  class="rouded-full indep10">5. Outstanding</button>
            <button @click="color11 = 'green'" class="indep11">4. Very Satisfaction</button>
            <button @click="color12 = 'green'" class="indep12">3. Satisfaction</button>
            <button @click="color13 = 'green'" class="indep13">2. Fair</button>
            <button @click="color14 = 'green'" class="indep14">1. Poor</button>
          </div>
          
        </div> 
        <div class=" ml-5 mt-10">
            <!--<div class="Preview">
            <a href="/Independentq2"><button class=" btn button-next ">Preview</button></a> 
        </div>
            -->
          <div class="next">
            <a href="/Independentq4"><button class=" btn button-next ">Next</button></a> 
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
.indep {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.indep1 {
  background-color: v-bind(color1);
}
.indep2 {
  background-color: v-bind(color2);
}
.indep3 {
  background-color: v-bind(color3);
}
.indep4 {
  background-color: v-bind(color4);
}
.indep5 {
  background-color: v-bind(color5);
}
.indep6 {
  background-color: v-bind(color6);
}
.indep7 {
  background-color: v-bind(color7);
}
.indep8 {
  background-color: v-bind(color8);
}
.indep9 {
  background-color: v-bind(color9);
}
.indep10 {
  background-color: v-bind(color10);
}
.indep11 {
  background-color: v-bind(color11);
}
.indep12 {
  background-color: v-bind(color12);
}
.indep13 {
  background-color: v-bind(color13);
}
.indep14 {
  background-color: v-bind(color14);
}
.indep15 {
  background-color: v-bind(color15);
}
.indep16 {
  background-color: v-bind(color16);
}
.indep17 {
  background-color: v-bind(color17);
}
.indep18 {
  background-color: v-bind(color18);
}
.indep19 {
  background-color: v-bind(color19);
}
.indep20 {
  background-color: v-bind(color20);
}
.indep21 {
  background-color: v-bind(color21);
}
.indep22 {
  background-color: v-bind(color22);
}
.indep23 {
  background-color: v-bind(color23);
}
.indep24 {
  background-color: v-bind(color24);
}
  </style>