
var task = [];
var taskTF = [];
const task_list = document.getElementById('task_list');
const btn=document.getElementById('bton');

let data=JSON.parse(localStorage.getItem('task'));
let dataTF=JSON.parse(localStorage.getItem('taskTF'));
var i=0;
for (let x of data){
   document.createElement("li");
            let li = document.createElement('li');
            li.innerHTML = `<content class=${upclass(dataTF[i])} onclick="let indexTF = task.indexOf(this.innerText); 
            if(this.className=='deco' || this.className=='deco cuspor' ){this.className='cuspor';taskTF[indexTF]=0;}else{this.className='deco';taskTF[indexTF]=1;}; act(); save(); CommentStyle(); ">${x}</content>
      
         <div class="cuspor"><i style="margin-right: 10px;" class="fa-regular fa-pen-to-square"
          onclick="input_task.value=this.closest('li').childNodes[0].innerText;
          input_task.setAttribute('index', task.indexOf(input_task.value));btn.innerText='EDIT TASK';
         "></i>
         
             <i class="fa-solid fa-x" onclick="
             let index = task.indexOf(this.closest('li').childNodes[0].innerText);
        task.splice(index, 1); 
        taskTF.splice(index, 1); act() ; 
        this.closest('li').remove(); save();
        "></i>  
             </div>`;
             CommentStyle();
            document.getElementById('task_list').appendChild(li);
            i+=1;
            
        
}
task=data;
taskTF=dataTF;
actlocal(); 



function getInfor() {
   event.preventDefault();
   let input_task = document.getElementById('input_task');
   if (!(input_task.value == ''))
      if (!(input_task.getAttribute("index") == -1)) {
                     task[input_task.getAttribute("index")] = input_task.value;  
                     task_list.children[input_task.getAttribute("index")].children[0].innerText=input_task.value;
                     console.log( task_list.children[input_task.getAttribute("index")].innerText);
                     input_task.setAttribute('index',-1)
           save();
           btn.innerText='ADD TASK';}
       else {

         task.push(input_task.value);
         let val = 0;
         taskTF.push(val);

         document.createElement("li");
         if (!(input_task.value == '')) {
            let li = document.createElement('li');
            li.innerHTML = `<content class="block" onclick="let indexTF = task.indexOf(this.innerText);
            if(this.className=='deco'|| this.className=='deco cuspor' ){this.className='cuspor';taskTF[indexTF]=0;}else{this.className='deco';taskTF[indexTF]=1;}; act(); save();CommentStyle(); ">${input_task.value}</content>
      
         <div class="cuspor"><i style="margin-right: 10px;" class="fa-regular fa-pen-to-square"
          onclick="input_task.value=this.closest('li').childNodes[0].innerText;
          input_task.setAttribute('index', task.indexOf(input_task.value));btn.innerText='EDIT TASK';
         "></i>
             <i class="fa-solid fa-x" onclick="
             let index = task.indexOf(this.closest('li').childNodes[0].innerText);
        task.splice(index, 1); 
        taskTF.splice(index, 1); act();  
        this.closest('li').remove() ;save(); 
        "></i>  
             </div>`;
             CommentStyle();
            document.getElementById('task_list').appendChild(li);
            save();
         };
      }
   input_task.value = '';
};



function act() {
   var sum = 0;
   for (let x of taskTF) {
      sum += x;
   }
   const result = document.getElementById('result');
    if (sum != 0) { result.innerHTML = `Yeah, ${sum} task completed` } else {
      result.innerHTML = ``;
   }
   
};



function emptyid() {
   for (let x of task_list.childNodes)
      if (x.id == 'edit')
         return true;
   return false;
}

function save(){
   // localStorage.clear();
   localStorage.setItem('task',JSON.stringify(task));
   localStorage.setItem('taskTF',JSON.stringify(taskTF));
}

function save_ncl(){
   localStorage.setItem('task',JSON.stringify(task));
   localStorage.setItem('taskTF',JSON.stringify(taskTF));
}


function actlocal() {
   var sum = 0;
   for (let x of dataTF) {
      sum += x;
   }
   const result = document.getElementById('result');
   if (sum != 0) { result.innerHTML = `Yeah, ${sum} task completed` } else {
      result.innerHTML = ``;
   }
};

function upclass(x){
   if(x==1) return "deco";
   if(x==0) return "cuspor";
   
}
function CommentStyle() {
        var comment_deco = document.querySelectorAll(".deco");
       

        comment_deco.forEach(function(el){
          el.classList.add("cuspor");
        });

       
    }




