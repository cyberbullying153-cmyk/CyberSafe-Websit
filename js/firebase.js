import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyBQukwDZKUaeCheXpDhlgyxYfsr8E7SVhA",

authDomain: "cybersafe-22ac4.firebaseapp.com",

projectId: "cybersafe-22ac4",

storageBucket: "cybersafe-22ac4.firebasestorage.app",

messagingSenderId: "381504496598",

appId: "1:381504496598:web:e3dbaa382c13127d4d3a77",

measurementId: "G-CB1L3GCR2P"

};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);
