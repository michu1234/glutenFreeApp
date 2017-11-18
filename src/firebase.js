import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCmofKWebPPX0Lu29o0S7tWHSLYxKcn_n8",
    authDomain: "gluten-free-app.firebaseapp.com",
    databaseURL: "https://gluten-free-app.firebaseio.com",
    projectId: "gluten-free-app",
    storageBucket: "gluten-free-app.appspot.com",
    messagingSenderId: "679651688568"
});


export const db = app.database();
export const breakfastRecipe = db.ref('recipe/-KzFBzqObd3YQd4BNV5R/items');
export const dinnerRecipe = db.ref('recipe/-KzFDLVpBFwNy3M11h5F/items');
export const supperRecipe = db.ref('recipe/-KzFDNSr0DQLIoQj0gcD/items');
export const dessertRecipe = db.ref('recipe/-KzFDP9Odkd05I2PDHo6/items');
export const snackRecipe = db.ref('recipe/-KzFDR7BHEYcWpJDxSqW/items');