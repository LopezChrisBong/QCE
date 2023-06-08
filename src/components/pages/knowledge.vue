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
  <div><div class="steps-container">
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
    </div></div>
  <div>    <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="">B. Knowledge of the subject matter</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest">
          <p>1. Demonstrates mastery of the subject matter (explain the subject matter without relying solely on the prescribed textbook).</p>
          
          <div class="buttons">
          <button @click="color = 'blue'"  class="rouded-full Know">5. Outstanding</button>
          <button @click="color1 = 'blue'" class="Know1">4. Very Satisfaction</button>
          <button @click="color2 = 'blue'" class="Know2"> 3. Satisfaction</button>
          <button @click="color3 = 'blue'" class="Know3">2. Fair</button>
          <button @click="color4 = 'blue'" class="Know4">1. Poor</button>
          </div>
          
          <p>2. Draws and share information on the state on the art of theory and practice in his/her discipline.</p>
          
          <div class="buttons">
            <button @click="color5 = 'blue'"  class="rouded-full Know5">5. Outstanding</button>
            <button @click="color6 = 'blue'" class="Know6">4. Very Satisfaction</button>
            <button @click="color7 = 'blue'" class="Know7">3. Satisfaction</button>
            <button @click="color8 = 'blue'" class="Know8">2. Fair</button>
            <button @click="color9 = 'blue'" class="Know9">1. Poor</button>
          </div>
          <p>3. Draws and share information on the state on the art of theory and practice in his/her discipline.</p>
          
          <div class="buttons">
            <button @click="color10 = 'blue'"  class="rouded-full Know10">5. Outstanding</button>
            <button @click="color11 = 'blue'" class="Know11">4. Very Satisfaction</button>
            <button @click="color12 = 'blue'" class="Know12">3. Satisfaction</button>
            <button @click="color13 = 'blue'" class="Know13">2. Fair</button>
            <button @click="color14 = 'blue'" class="Know14">1. Poor</button>
          </div>
          <p>4.  Explains the relevance of present topics to the previous lessons, and relates the subject matter to relevant current issues and/or daily life activities.</p>
          
          <div class="buttons">
            <button @click="color15 = 'blue'"  class="rouded-full Know15">5. Outstanding</button>
            <button @click="color16 = 'blue'" class="Know16">4. Very Satisfaction</button>
            <button @click="color17 = 'blue'" class="Know17">3. Satisfaction</button>
            <button @click="color18 = 'blue'" class="Know18">2. Fair</button>
            <button @click="color19 = 'blue'" class="Know19">1. Poor</button>
          </div>
          <p>5. Demonstrates - up - to - date knowledge and/or awareness on current trends and issues of the subject.</p>
          
          <div class="buttons">
            <button @click="color20 = 'blue'"  class="rouded-full Know20">5. Outstanding</button>
            <button  @click="color21 = 'blue'" class="Know21">4. Very Satisfaction</button>
            <button  @click="color22 = 'blue'" class="Know22">3. Satisfaction</button>
            <button  @click="color23 = 'blue'" class="Know23">2. Fair</button>
            <button  @click="color24 = 'blue'" class="Know24">1. Poor</button>
          </div>
        </div> 
        <div class="flex justify-between ml-5 mt-10">
            <div class="Preview">
            <a href="/Commitment"><button class=" btn button-next ">Preview</button></a> 
        </div>
          <div class="next">
            <a href="/Independent"><button class=" btn button-next ">Next</button></a> 
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
  button:hover{
  background-color: rgb(121, 207, 121);
}


.Know {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.Know1 {
  background-color: v-bind(color1);
}
.Know2 {
  background-color: v-bind(color2);
}
.Know3 {
  background-color: v-bind(color3);
}
.Know4 {
  background-color: v-bind(color4);
}
.Know5 {
  background-color: v-bind(color5);
}
.Know6 {
  background-color: v-bind(color6);
}
.Know7 {
  background-color: v-bind(color7);
}
.Know8 {
  background-color: v-bind(color8);
}
.Know9 {
  background-color: v-bind(color9);
}
.Know10 {
  background-color: v-bind(color10);
}
.Know11 {
  background-color: v-bind(color11);
}
.Know12 {
  background-color: v-bind(color12);
}
.Know13 {
  background-color: v-bind(color13);
}
.Know14 {
  background-color: v-bind(color14);
}
.Know15 {
  background-color: v-bind(color15);
}
.Know16 {
  background-color: v-bind(color16);
}
.Know17 {
  background-color: v-bind(color17);
}
.Know18 {
  background-color: v-bind(color18);
}
.Know19 {
  background-color: v-bind(color19);
}
.Know20 {
  background-color: v-bind(color20);
}
.Know21 {
  background-color: v-bind(color21);
}
.Know22 {
  background-color: v-bind(color22);
}
.Know23 {
  background-color: v-bind(color23);
}
.Know24 {
  background-color: v-bind(color24);
}

  </style>