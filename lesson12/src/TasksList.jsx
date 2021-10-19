import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTasks,
} from "./tasksGateway";


export default class TasksList extends Component {
  state = {
    tasks: [],
  };
  componentDidMount(){
      this.fetchTasks()
  }
  fetchTasks = () => {
    fetchTasksList()
      .then((tasksList) => {
        this.setState({ tasks: tasksList });
      });
  };

  handleTaskDelete = (id) => {
      deleteTasks(id).then(()=>this.fetchTasks())  
  };

  handleTaskStatusChange = (id) => {
    const tasksToUpdate = this.state.tasks.find(task => task.id === id)
    const updatedTask = {
      ...tasksToUpdate,
      done: !tasksToUpdate.done,
    };
    updateTask(id,updatedTask)
    .then(()=>this.fetchTasks())

  };
  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask)
    .then(()=>this.fetchTasks());
  };
  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              onDelete={this.handleTaskDelete}
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}
