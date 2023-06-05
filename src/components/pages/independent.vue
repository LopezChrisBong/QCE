<template>
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
    </div>
  
  
    <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="">C. Teacher for independent learning</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest">
          <p>1. Creates teaching strategies that allow students to practice using concepts they need to understand (interactive discussion).</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          
          <p>2.  Enhances student self - esteem and/or gives due to practice using concepts they need to understand (interactive discussion).</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>3. Allows students to crate their own course with objectives and realistically define student - professor rules and make them accountable for their performance.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>4. Allows students to think independently and make their own decisions and holding them accountable for their performance based largely on their success in executing decisions.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>5. Encourages students to learn beyond what is required and help/guide the students how to apply the concepts learned.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
        </div> 
        <div class="flex justify-between ml-5 mt-10">
            <div class="Preview">
            <a href="/Knowledge"><button class=" btn button-next ">Preview</button></a> 
        </div>
          <div class="next">
            <a href="/Management"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
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
  </style>