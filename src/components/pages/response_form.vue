<script setup>

  import {defineProps, ref, computed, defineExpose} from 'vue';

  const props= defineProps({
    data:Object,
  });
  props.data.currentStep--;

  const data = ref(props.data);

  const cssStyle = computed (() => {
    return {
      '--active-color':data.value.activeColor,
      '--passive-color':data.value.passiveColor,
    };
  });
  
  const nextStep =() => {
    if(data.value.currentStep < data.value.steps.length){
      data.value.currentStep++;
    }
  };


  const previousStep =() => {
    if(data.value.currentStep < data.value.steps.length){
      data.value.currentStep--;
    }
  };
  defineExpose({
    nextStep,
    previousStep,

  });
</script>

<template>

  <div class="steps-container ml-8" :style="cssStyle">
      <ul class="steps-list" >
        <li class="step" v-for="(step, index) in data.steps" :key="index" :class="(index == data.currentStep) ? 'step-active':'', (index < data.currentStep) ? 'step-done' : '', (index ==0 && index ==data.currentStep) ? 'step-done-in-advance' :''">
          <div class="step-bubble">
            <div class="step-count">{{ index + 1 }}</div>
          </div>
          <div class="step-label ml-2">Commitment</div>
          <div class="step-line">
              <div class="line-fill">
              </div>
          </div>
        </li>
      </ul>
  </div>
  <div class="stepper-content">
  
    <div class="stepper-panel">
      <div class="">A. Commitment</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest">
          <p>1. Demonstrates sensitivity to student’s ability to attend and absorb content information.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          
          <p>2. Integrates sensitivity his/her learning objectives with those of the students in a collaborative way.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>3. Makes self available to students beyond official time.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>4. Regularly comes to class on time, well - groomed and well - prepared to complete assigned responsibilities.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>5. Keeps accurate record of students’ performance and prompt submission of the same.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
        </div>
      </div>

      
  </div>

</template>


<style scoped>

.steps-container{
  width: 100%;
  margin: 0 auto;

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

.step:last-child{

  max-width: 60px;
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

.line-fill{
    width: 0;
    height: 5px;
    background-color: var(--active-color);
}


.step-done-icon{
  fill: #fff;
  width: 30px;
  height: 30px;
}

.step:last-child .step-line{
  display: none;
}

.step-active .step-bubble{
  width: 60px;
  height: 60px;
  background-color: white;
  border-color: green;
}
.step-done .step-bubble{
  width: 60px;
  height: 60px;
  background-color: green;
  border-color:green;
}

.step-done .step-count{
color: white;
}
.step-done .line-fill{
    width: 100%;
}

.step-done-in-advance .line-fill{
  width: 50%;
}
.step-count{
  color: black;
  font-weight: 500;
  font-size: 20px;
}

.step-label{

  font-weight: 500;
  font-size: 18px;
  position: absolute;
  margin-top: 5rem;
  opacity: .3;
}

.step-active .step-label,
.step-done .step-label{

  opacity: 1;
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

</style>