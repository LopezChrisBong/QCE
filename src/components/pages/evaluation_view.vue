
<template>
    <div class="bg-slate-100">
    <div class="flex justify-left font-bold px-5 py-4">
      <b><p id="Faculty_text" class="font-bold md:font-bold md:text-sm">QCE Faculty Evaluation</p></b> 
    </div>
    
    <div class=" pb-4">
      <div class="">
        <div></div>
        <div>
          <div class="flex justify-center ml-20 mr-20 border rounded-md bg-white py-3 pl-5 pr-5">
          <div>
            <div class="flex justify-between">
            <span class="faculty-text font-bold text-xl">Teacher Name 1</span>
            <Select class="border rounded-lg p-1 mb-2">
                <Option>Students</Option>
                <Option>Peer</Option>
                <Option>Self</Option>
                <Option>Supervisor</Option>
            </Select>
            </div>
                <table class="border-collapse border">
                <thead>
                  <tr>
                    <th class="border border-slate-300">Student</th>
                    <th class="border border-slate-300">Commitment</th>
                    <th class="border border-slate-300">Knowledge of the Subject Matter</th>
                    <th class="border border-slate-300">Teaching for the Independent Learning</th>
                    <th class="border border-slate-300">Management of Learning</th>
                    <th class="border border-slate-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300 td-left">1</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left"> <router-link to="/evaluationview"><button class="rounded-lg bg-green-600 mt-2 p-2 pl-4 pr-4 mr-6">View</button></router-link>
                       </td>
                    
                  </tr>
                  <tr>
                    <td class="border border-slate-300 td-left">2</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left"> <router-link to="/evaluationview"><button class="rounded-lg bg-green-600 mt-2 p-2 pl-4 pr-4 mr-6">View</button></router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 td-left">3</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left"> <router-link to="/evaluationview"><button class="rounded-lg bg-green-600 mt-2 p-2 pl-4 pr-4 mr-6">View</button></router-link>
                       </td></tr>
                  <tr>
                    <td class="border border-slate-300 td-left">4</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left"> <router-link to="/evaluationview"><button class="rounded-lg bg-green-600 mt-2 p-2 pl-4 pr-4 mr-6">View</button></router-link>
                       </td> </tr>
                  <tr>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left">5</td>
                    <td class="border border-slate-300 td-left"> <router-link to="/evaluationview"><button class="rounded-lg bg-green-600 mt-2 p-2 pl-4 pr-4 mr-6">View</button></router-link>
                       </td> </tr>
                </tbody>
              </table>
        <div id="Button_Next">
     <router-view />
        </div>

        <div class="mt-5 font-bold text-xl mb-6">
        Student General Report
        </div>

        <div>
            <p class="font-bold text-l">Average</p>
            <table class="border-collapse border average">
                <thead>
                    <tr>
                        <th class="border border-slate-300">
                            Commitment
                        </th>
                        <th class="border border-slate-300">
                            Knowledge of the Subject Matter
                        </th>
                        <th class="border border-slate-300">
                            Teaching for the Independent Learning
                        </th>
                        <th class="border border-slate-300">
                            Management of Learning
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300">25</td>
                        <td class="border border-slate-300">25</td>
                        <td class="border border-slate-300">25</td>
                        <td class="border border-slate-300">25</td>
                    </tr>
                </tbody>
            </table>

        </div>
          </div>
         
        </div> 
        
        </div>
      </div>

     
    </div>
    </div>
    
    </template>
    
    <style scoped>
    .average{
        text-align: center;
    }
    </style>
    