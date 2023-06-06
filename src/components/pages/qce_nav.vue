<template>
 <div>
    <div class="flex justify-between ml-8">
        <div>
            <nav class="flex justify-left space-x-10 main-nav ">
            <img alt="Vue logo" class="logo" src="../../assets/pix/SummerLms.gif" width="125" height="125" />
            <a href="/" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Dashboard</a>
            <a href="/Commitment" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">QCE FORM</a>
            </nav>
        </div>
        <div class="flex mr-4 z-index-1">
            <select class="border rouded-lg">
                <option></option>
                <option>Setting</option>
                <option>Profile</option>
                <option>Logout</option>
            </select>
            <img src="../../assets/pix/Profile.png" alt="" width="50" height="50">
        </div>
  </div>
  <div class="hidden">
      <nav class="flex justify-left  nav_sec">
        <div class="space-x-10 mt-4 mb-4 ml-15 sec_nav ">
          <router-link to="/qceevaluation"><a href="/dashboard" class="pt-5 pb-5 font-bold px-3 py-2 text-slate-1000 rounded-lg  hover:text-slate-900">QCE Faculty Evaluation</a></router-link>
         <router-link to="response"><a href="/team" class="pt-5 pb-5 font-bold px-3 py-2 text-slate-1000 rounded-lg  hover:text-slate-900">Responses</a></router-link> 
        </div>
    </nav>
  </div>

</div> 


</template>