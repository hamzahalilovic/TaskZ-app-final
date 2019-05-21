import firebase from "../firebase";

class taskServiceClass {
    
    getTasks() {
        let tasks = [];
        return firebase
        .database()
        .ref("/tasks")
        .once("value")
        .then(function(snapshot) {
            
            for (let i in snapshot.val()) {
                let item = snapshot.val()[i];
                // item.id = i;
                tasks.push(item);
            }
            return tasks
        });
    }
    
    addTask(title, listId) {
        
        // Get a key for a new Post.
        var newListKey = firebase
        .database()
        .ref()
        .child("tasks")
        .push().key;
        
        let listData = {
            title,
            id: newListKey,
            listId
        }
        
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates["/tasks/" + newListKey] = listData;
        
        return firebase
        .database()
        .ref()
        .update(updates);
    }
    
    editTask(taskData) {
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`/tasks/${taskData.id}`] = taskData;
        
        return firebase
        .database()
        .ref()
        .update(updates);
    }
    
    deleteTask(id) {
        
        firebase
        .database()
        .ref(`/tasks/${id}`).remove()
    }
}

const taskService = new taskServiceClass();
export default taskService;