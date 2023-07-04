# To Do List

## Description

This is a simple web application that allows you to create and manage a to-do list. You can add tasks, mark them as completed, and remove them from the list. The application uses HTML, CSS, and JavaScript to provide a user-friendly interface for managing your tasks.

## Features

Add Task: Enter a task in the input field and click the "Add Task" button to add it to the list.

- Mark as Completed: Once a task is completed, you can mark it as done by clicking the "Done" button next to the task.
- Remove Task: If you want to delete a task from the list, click the "Delete" button associated with the task.
  Clear Completed Tasks: To remove all completed tasks from the list, click the "Clear" button at the bottom of the completed tasks section.
- Persistence: The application uses local storage to store the tasks, so they will persist even if you close or refresh the page.

## Usage

1. Open the application in your web browser.
2. Enter a task description in the input field at the top of the page.
3. Click the "Add Task" button or press Enter to add the task to the list.
4. Repeat steps 2 and 3 to add more tasks.
5. To mark a task as completed, click the "Done" button next to the task.
6. To remove a task from the list, click the "Delete" button associated with the task.
7. To clear all completed tasks, click the "Clear" button at the bottom of the completed tasks section.

## Customization

You can customize the application by modifying the HTML, CSS, and JavaScript files. Feel free to change the styling, add new features, or enhance the existing functionality to suit your needs.

## Functions and expressions

Below are the detailed explanations for each function and expression used in the JavaScript code:

- `saveTasks()`: This function is used to save the tasks in the local storage. It serializes the tasks array into a JSON string and stores it under the "tasks" key.

- `saveTasksDone()`: This function is used to save the completed tasks in the local storage. It serializes the tasksDone array into a JSON string and stores it under the "tasksDone" key.

- `createTaskElement(taskText)`: This function is responsible for creating a new task element in the DOM. It takes the task text as input, creates the necessary HTML elements (div, span, buttons), assigns appropriate class names to them, and appends them to the task container. It also attaches event listeners to the delete and done buttons to handle their respective actions.

- `createDoneTaskElement(taskText)`: This function is responsible for creating a new completed task element in the DOM. It takes the task text as input, creates the necessary HTML elements (div, span, button), assigns appropriate class names to them, and appends them to the completed task container. It also attaches an event listener to the clear button to handle the action of clearing all completed tasks.

- `clearDoneTasks()`: This function is triggered when the clear button is clicked in the completed task section. It removes all child elements from the completed task container, clears the tasksDone array, and saves the changes to the local storage.

- Event listeners: The code contains event listeners for the "Add Task" button and the clear button of completed tasks. These event listeners handle the corresponding actions when the buttons are clicked.

- Initialization: The code initializes the tasks and tasksDone arrays by retrieving their values from the local storage using `getItem()` method. It then populates the task and completed task containers by calling the `createTaskElement()` and `createDoneTaskElement()` functions for each task in the arrays.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgments

- The application was developed using HTML, CSS, and JavaScript.
  Special thanks to the open-source community for providing useful resources and inspiration for building this application.

## Author

This project, named "To-Do List," was implemented by Mostafa Soliman Fadali. The project showcases the author's proficiency in HTML, CSS, and JavaScript, demonstrating their ability to create a responsive web page with interactive features.
