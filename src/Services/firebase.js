import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPMvBND7M789pUZZOPOkRRAICCZyern2k",
    authDomain: "react-coderhouse-d7a9d.firebaseapp.com",
    projectId: "react-coderhouse-d7a9d",
    storageBucket: "react-coderhouse-d7a9d.appspot.com",
    messagingSenderId: "946803103741",
    appId: "1:946803103741:web:de6fdc9ac69f850c402b94"
  };

const app = initializeApp(firebaseConfig);

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProducts() {
  const collectionRef = collection(db, "products");
  let results = await getDocs(collectionRef);

  let productos = results.docs.map((prod) => {
    return {
      id: prod.id,
      ...prod.data(),
    }
    });

  return productos;
}

export async function getProduct(idProduct) {
  const refDocs = doc(db, "products", idProduct);
  const results = await getDoc(refDocs);
  if (results.exists()) {
    return { id: results.id, ...results.data() };
  }
}

export async function getProductsByCategory(idCategory) {
  const collectionRef = collection(db, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategory)
  );

  let results = await getDocs(queryCat);

  let dataProduct = results.docs.map((prod) => {
    return {
      id: prod.id,
      ...prod.data(),
    };
  });

  return dataProduct;
}

export async function createBuyOrder(productsData){
  const referencia = collection(db, "notaPedido");
  let respuesta = await addDoc(referencia, productsData)
  return respuesta.id;
}


export default FirebaseApp;
