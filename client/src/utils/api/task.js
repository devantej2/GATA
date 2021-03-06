import axios from "axios";

const task =  {
    get: function () {
        return axios.get("/api/user/tasks");
    },
    //get task
    getOne: function (id) {
        return axios.get("/api/user/tasks" + id);
    },
    //delete tasks
    delete: function(id) {
        return axios.delete("/api/user/tasks/" + id);
    },
    //save a task
    save: function (taskData) {
        return axios.post("/api/user/tasks", taskData);
    }
}

export default task;