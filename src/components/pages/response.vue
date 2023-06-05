
<template>

<div class="body">
    <div class="wrapper-stepper">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" style="width: '+stepperProgress';">
                    <div class="stepper-item" :class="{'current': step == item, 'success': step > item}" v-for="item in 4" :key="item">
                        <div class="stepper-item-counter">
                            <img class="icon-success" src="" alt="">
                            <span class="numbers">
                                {{ item }}
                            </span>
                        </div>
                        <span class="stepper-item-title">
                            {{ item }}
                        </span>
                    </div>
                </div>
                <div class="stepper-content" >
                    <div class="stepper-pane">
                    </div>
                </div>
                <div class="controls">
                    <button class="btn" @click="step--" :disabled="step == 1">
                        Previous 
                    </button>
                    <button class="btn btn--green-1 " @click="step++" :disabled="step == 4">
                        Next
                    </button>
                </div>
            </div>
    </div>
   </div>
</div>
  
</template>

<script>
    export default{
        data: () => ({
            step:1
        }),
        computed:{
            stepperProgress(){
                return(100/3) * (this.step - 1) + '%'
            }

        }
    }
</script>