document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve the task description
    let taskDescription = document.getElementById('new-task-description').value;

    // Create a new list item
    let listItem = document.createElement('li');
    listItem.textContent = ` ${taskDescription} `;

    // Create a "Mark Done" button for each task
    let markDoneButton = document.createElement('button');
    markDoneButton.textContent = "Mark Done";
    markDoneButton.addEventListener('click', function() {

      // Remove the task from the list
      listItem.remove();
    });

    // Append the "Mark Done" button to the list item
    listItem.appendChild(markDoneButton);

    // Append the list item to the tasks list
    document.getElementById('tasks').appendChild(listItem);

    // Clear the input field
    document.getElementById('new-task-description').value = '';
  })
})
