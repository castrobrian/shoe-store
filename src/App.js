//React imports
import React, { useState } from 'react';

//App components 
import MainNavbar from './Layout/MainNavbar';


// Firebase base imports
import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDE_he3meyrV-rQVWYz4sVmY30JgoRmKsw",
  authDomain: "shoe-store-6338e.firebaseapp.com",
  projectId: "shoe-store-6338e",
  storageBucket: "shoe-store-6338e.appspot.com",
  messagingSenderId: "63381217823",
  appId: "1:63381217823:web:6d99d574dc046df10aab2a"
};

//Config
firebase.initializeApp(firebaseConfig);

//firebase funcionalitys
const firestore = firebase.firestore(); 

function App() {

  const [products, loadingProducts, error] = useCollectionData(firestore.collection('products'));

  return (
    <div className="main">
      <div className="navbar">
          <MainNavbar />
      </div>
      <ul className="productList">
       {products && products.map(product => {
         return (<li key={product.id}>{product.name}</li>)
       })}
      </ul>
    </div>
  );
}

export default App;
