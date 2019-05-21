import firebase from "../firebase";


class AuthServiceClass {
    
    isAuthenticated() {
        return localStorage.getItem('token') ? true : false;
    } 
    
    logIn(user) {
        localStorage.setItem('token', user.id);
        localStorage.setItem('user', user.firstName);
    }
    
    signUp(userData){
        // Get a key for a new Post.
        var newListKey = firebase
        .database()
        .ref()
        .child("users")
        .push().key;
        
        userData.id = newListKey
        
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates["/users/" + newListKey] = userData;
        
        return firebase
        .database()
        .ref()
        .update(updates)
    }
    
    logOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    
    getUsers() {
        let users = [];
        return firebase
        .database()
        .ref("/users")
        .once("value")
        .then(function(snapshot) {
            
            for (let i in snapshot.val()) {
                let item = snapshot.val()[i];
                // item.id = i;
                users.push(item);
            }
            return users
        });
    }
}

const AuthService = new AuthServiceClass();
export default AuthService;