import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8GNkGaJWx--TyJUlNyPBL2L-5fcyMdt8",
    authDomain: "reactclass-todoapp.firebaseapp.com",
    databaseURL: "https://reactclass-todoapp.firebaseio.com",
    storageBucket: "reactclass-todoapp.appspot.com",
    messagingSenderId: "533369736188"
  };
  firebase.initializeApp(config); 

  var dbRef = firebase.database().ref();

  dbRef.set({
    appName: 'Todo App', 
    app: { version: 1, name: 'Todo App' },
    user: {userId: 12, name: 'Anton'}
  });

  var todosRef = dbRef.child('todos');

  todosRef.on('child_added', (snapshot)=>{
    console.log('todos child_added', snapshot.key, snapshot.val());
  });

  todosRef.push({text: 'Walk the dog'});
  todosRef.push({text: 'Run in the morning'});
  
  // var notesRef = dbRef.child('notes');
  // var newNote = notesRef.push();

  // notesRef.on('child_added', (snapshot)=>{
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });

  // notesRef.on('child_changed', (snapshot)=>{
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });

  // notesRef.on('child_removed', (snapshot)=>{
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });

  
  // newNote.set({
  //   text: 'Walk the dog'
  // });

  // console.log('New note id', newNote.key);

  // notesRef.push({text: 'Run in the morning'});

// fetch the value
  // dbRef.once('value').then((snaphot) => {
  //   console.log('Got entire db', snaphot.val());
  // }).catch((err) => {
  //   console.log('Unable to fetch value', e);
  // });  

// dbRef.child('app').once('value').then((snapshot) => {
//     console.log('Got', snapshot.key, snapshot.val());
//   })


  // var logData = (snapshot) => {
  //   console.log('Got on value', snapshot.val());
  // };

  // dbRef.child('user').on('value', logData);
  // dbRef.child('user').update({name: 'Roman'});
  // dbRef.child('app').update({version: '1.9'});


  // dbRef.on('value', logData);
  // dbRef.off(logData);

  // dbRef.child('user').set({name: 'Nick'});

  // dbRef.child('user').update({name: 'Nikolai'});

  // dbRef.update({
  //   'app/version': 1.1,
  //   'user/name': 'Mike'
  // })

  // // dbRef.child('app/version').remove()
  // dbRef.child('app').update({
  //   version: null // same as  remove
  // })