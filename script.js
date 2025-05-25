function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => {
        taskList.removeChild(li);
      };

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = '';
      taskInput.focus();
}
