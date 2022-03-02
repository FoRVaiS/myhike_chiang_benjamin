(() => {
  db.collection('quotes').doc('monday').onSnapshot(doc => {
    document.getElementById('quote').innerText = doc.data().quote;
  });

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const currentUser = db.collection('users').doc(user.uid);

      currentUser.get().then(doc => {
        const { name } = doc.data();

        document.getElementById('name').innerText = name;
      });
    }
  });
})();
