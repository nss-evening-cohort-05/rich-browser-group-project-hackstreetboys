var movieAPI = ((oldFirebase) => {

    oldFirebase.registerUser = (credentials) => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    oldFirebase.loginUser = (credentials) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    oldFirebase.firebaseCredentials = () => {
        return new Promise((resolve, reject) => {
            $.ajax("apiKeys.json")
                .done((data) => {
                    resolve(data);
                })
                .fail((error) => {
                    reject(error);
                });
        });
    };

    oldFirebase.credentialsCurrentUser = () => {
        return firebase.auth().currentUser;
    };

    oldFirebase.logoutUser = () => {
        firebase.auth().signOut();
    };

    oldFirebase.deleteMovie = (apiKeys) => {
        return new Promise ((resolve, reject) => {
            $.ajax({
                method: 'DELETE',
                url:`${apiKeys.databaseURL}/seed/${movies}.json`
            }).done(() => {
                resolve();
            }).fail((error) => {
                reject(error);
            });
        });
    };

    return oldFirebase;

})(movieAPI || {});
