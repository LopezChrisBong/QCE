
<template>
  <div class="flex">
    <div class="">
      <div class="flex flex-col h-screen p-3 bg-white shadow w-60">
          <div class="space-y-3">
              <div class="flex items-center">
                     <h2 class="text-xl font-bold">DNSC QCE </h2>
              </div>
              <div class="flex-1">
                  <ul class="pt-2 pb-4 space-y-1 text-sm">
                    
                      <li class="rounded-sm hover:bg-lime-200">
                          <a
                              href="#"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6 text-green-600"
                              >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                  />
                              </svg>

                              <span class="text-green-600">Dashboard</span>
                          </a>
                      </li>
                      <li>
					<button @click="isHidden = !isHidden" type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <!--This icon in Component base-->
               <Icon :name="'pdf'"/>
    
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Faculty Evaluation</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
					<ul id="dropdown-example" class=" py-2 space-y-2" v-show="!isHidden">
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">IAAS</a>
						</li>
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">IC</a>
						</li>
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">ILEGG</a>
						</li>
            <li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">ITED</a>
						</li>
					</ul>
				</li>
                     <!-- 
                      <li class="rounded-sm ">
                          <a
                              href="#"
                              class="flex items-center p-2 space-x-3 rounded-md hover:bg-lime-200"
                          >
                       <Icon :name="'pdf'"/>

                              <span>Faculty Evaluation</span>
                          </a>
                      </li>
                    -->
                      
                      <li class="rounded-sm hover:bg-lime-200">
                          <a
                              href="#"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                          <!--This icon in Component base-->
                       <Icon :name="'printer'"/>

                              <span>Print Reports</span>
                          </a>
                      </li>

                      
                      <li class="rounded-sm  hover:bg-lime-200">
                          <a
                              href="Commitment"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                          <!--This icon in Component base-->
                       <Icon :name="'question'"/>

                              <span>QCE Questions</span>
                          </a>

                      </li>
       
                  
                  </ul>
              </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-12">
            <div class="grid grid-cols-2 gap-6 mb-6 lg:grid-cols-4">
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-green-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-xl font-semibold text-gray-900">
                        Students
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                      6,230 Evaluators
                    </div> </div>
                    <div class="mt-1 text-3xl font-semibold text-gray-900">
                      6,230 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                    </div>
                   
                    <div class="text-sm font-medium bg-green-500 truncate line-fill rounded-sm">
                      s
                    </div>
                    
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-blue-500 border rounded-md h-16 w-16 -mr-16"> </div>

                    <div class="mt-1 text-xl font-semibold text-gray-900">
                        Peer
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                      63 Evaluators
                    </div>
                  </div>
                    <div class="mt-1 text-3xl font-semibold text-gray-900">
                      63 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-blue-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-orange-500 border rounded-md h-16  w-16 -mr-16"> </div>
                    <div class="mt-1 text-xl font-semibold text-gray-900">
                        Self
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                      121 Evaluators
                    </div>
                    </div>
                    <div class="mt-1 text-3xl font-semibold text-gray-900">
                      121 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-orange-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-violet-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-xl font-semibold text-gray-900">
                        Supervisor
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                      4 Evaluators
                    </div>
                    </div>
                    <div class="mt-1 text-3xl font-semibold text-gray-900">
                      4 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-violet-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
            </div>
            <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div class="flex justify-between bg-gray-200 py-3 rounded-lg">
                  
                  <div class="flex  w-15 h-8 bg-white ml-4 mt-1 rounded-lg"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="ml-5"><rect width="256" height="256" fill="none"/><circle cx="116" cy="116" r="84" fill="none" stroke="#004" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></svg>

                              <input type="text" placeholder="Search"  class="rounded-lg pr-16 text-lg pl-2 tex"> </div>
                  <div class=""><Button class="btn mr-4">Filter</Button></div>
                </div>
                <div class=" flex justify-center">
                  <table class="table-fixed">
                      <thead>
                        <tr>
                          <th >#</th>
                          <th >Evaluator Name</th>
                          <th >Date Evaluation</th>
                          <th >Evaluator Type</th>
                          <th >Evaluation Result</th>
                          <th ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jane Cooper</td>
                          <td>2/19/21</td>
                          <td>Student</td>
                          <td>20</td>
                          <td> <a
                              href="FacultyReport"
                              class="flex items-center p-2 space-x-3 rounded-md "
                          ><button class="btn btn--green-1">View</button></a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Wade Warren</td>
                          <td>5/7/16</td>
                          <td>Peer</td>
                          <td>14</td>
                          <td> <a
                              href="FacultyReport"
                              class="flex items-center p-2 space-x-3 rounded-md "
                          ><button class="btn btn--green-1">View</button></a></td>

                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Esther Howard</td>
                          <td>9/18/16</td>
                          <td>Supervisor</td>
                          <td>10</td>
                          <td> <a
                              href="FacultyReport"
                              class="flex items-center p-2 space-x-3 rounded-md "
                          ><button class="btn btn--green-1">View</button></a></td>

                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Cameron Williamson</td>
                          <td>2/11/12</td>
                          <td>Student</td>
                          <td>16</td>
                          <td> <a
                              href="FacultyReport"
                              class="flex items-center p-2 space-x-3 rounded-md "
                          ><button class="btn btn--green-1">View</button></a></td>
                        </tr>
                         <tr>
                          <td>5</td>
                          <td>Brooklyn Simmons</td>
                          <td>9/18/16</td>
                          <td>Student</td>
                          <td>17</td>
                          <td> <a
                              href="FacultyReport"
                              class="flex items-center p-2 space-x-3 rounded-md "
                          ><button class="btn btn--green-1">View</button></a></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
      </div>
  </div> 


</template>
<script>
import Icon from '../icon.vue'                
export default {
  components: {
    Icon
  },
  methods: {
    view(){
      
    }
  },
  data(){
    return{isHidden:true}
  }
}
</script>

<style>
.line-fill{
  width: 100%;
  height: 5px;
}
table {
  width: 100%;
  text-align: center;
  
}
table th{
  text-align: center;
  border-bottom: solid 1px;
  border-color:rgb(227, 227, 227);
}
table tr{
  border-bottom: solid 1px;
  border-color:rgb(227, 227, 227);
}
table td{
  padding: 1rem;
  align-content: right;
}


</style>
