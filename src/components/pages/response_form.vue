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
      <ul class="steps-list">
        <li class="step" v-for="(step, index) in data.steps" :key="index" :class="(index == data.currentStep) ? 'step-active':'', (index < data.currentStep) ? 'step-done' : '', (index ==0 && index ==data.currentStep) ? 'step-done-in-advance' :''">
          <div class="step-bubble">
            <div class="step-count">{{ index + 1 }}</div>
          </div>
          <div class="step-label ml-2">loved</div>
          <div class="step-line">
              <div class="line-fill"></div>
          </div>
        </li>
      </ul>
  </div>

  <div class="stepper-content">
    <div class="stepper-pane"></div>
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
</style>