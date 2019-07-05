document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    const myPost = db.collection("posts").doc("firstpost");

    myPost.onSnapshot(doc => {
        $("#posts").empty();
        const data = doc.data();
        const postsData = $("<h4>")
        postsData.html(data.title)
        $("#posts").append(postsData);
    })

});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const greeting = $("<h4>");
            greeting.text(` ${user.displayName}`);
            $("#authentication").append(greeting);
            console.log(user);
        })
        .catch(console.log)
}



