import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {Chart} from "chartjs/chart";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAjE0FBnUug2cuuNczA3bquVU29Og0F92A",
    authDomain: "zecaurubank.firebaseapp.com",
    projectId: "zecaurubank",
    storageBucket: "zecaurubank.appspot.com",
    messagingSenderId: "744611004831",
    appId: "1:744611004831:web:dadfa13411768e47fefdaa",
    measurementId: "G-3PRNGQLHMK",
  // ...
  // The value of `databaseURL` depends on the location of the database
     databaseURL: "https://zecaurubank-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const usersRef = ref(db, '/Users');
onValue(usersRef, (snapshot) => {
  const data = snapshot.val();
    console.log(data)
});
var labels = [
  'teste',
  'test',
  'tes',
  'te'
]
var data = {
  labels: labels,
  datasets: {
    label: 'nomes',
    backgroundColor: 'rgb(727372)',
    borderColor: 'rgb(151515)',
    data: [12, 33, 29, 30, 98],
  }
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const graph = new Chart(
  document.getElementById('teste'),
  config
);
