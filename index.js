const form = document.querySelector("form");
const task = document.querySelector(".list-task");
const done = document.querySelector('.done')


function createList(){
    let taskData = `<p class="task-content"><span>task : </span>${form.task.value}</p>
                    <p class="task-discripition"><span>task descripition : </span>${form.descripition.value}</p>`
    return taskData;
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskConent = document.createElement("div");
    taskConent.classList.add('task-container')
    taskConent.innerHTML = createList(); 
    task.appendChild(taskConent);
    form.reset()
    
})

done.addEventListener("click", (e)=>{
    const taskContainer = document.querySelector(".task-container");
    taskContainer.remove();
    

})