let tasks = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs" },
    { id: 2, title: "Morning workout", description: "30 minutes cardio" },
    { id: 3, title: "Meeting with the client", description: "Discuss project progress" },
    { id: 4, title: "Submit report", description: "Submit weekly progress report" },
    { id: 5, title: "Clean the house", description: "Vacuum and dust the living room" },
    { id: 6, title: "Buy gift for John", description: "Pick up a birthday present" },
    { id: 7, title: "Read a book", description: "Finish chapter 5 of the book" },
    { id: 8, title: "Cook dinner", description: "Prepare pasta with tomato sauce" },
    { id: 9, title: "Complete coding task", description: "Finish task management API" },
    { id: 10, title: "Call mom", description: "Check in and chat with mom" }
  ];
  
let id = 1;

module.exports = {
  tasks,
  generateId: () => id++,
};
