import firebase from "../firebase";

class listServiceClass {
    
    getLists() {
        let lists = [];
        return firebase
        .database()
        .ref("/lists")
        .once("value")
        .then(function(snapshot) {
            
            for (let i in snapshot.val()) {
                let item = snapshot.val()[i];
                // item.id = i;
                lists.push(item);
            }
            return lists
        });
    }
    
    addList(title) {
        
        let token = localStorage.getItem('token')

        // Get a key for a new Post.
        var newListKey = firebase
        .database()
        .ref()
        .child("lists")
        .push().key;
        
        let listData = {
            title,
            id: newListKey,
            userId: token
        }
        
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates["/lists/" + newListKey] = listData;
        
        return firebase
        .database()
        .ref()
        .update(updates);
    }
    
    editList(listData) {
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`/lists/${listData.id}`] = listData;
        
        return firebase
        .database()
        .ref()
        .update(updates);
    }
    
    deleteList(id) {
        
        firebase
        .database()
        .ref(`/lists/${id}`).remove()
    }
}

const listService = new listServiceClass();
export default listService;