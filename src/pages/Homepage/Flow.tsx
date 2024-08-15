import { useNavigate } from "react-router-dom"
import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import Message from "../../components/Message/Message";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFgIGChsuIIrODTCJckEKvxeGpWoRwmnI",
  authDomain: "shui-post-app.firebaseapp.com",
  projectId: "shui-post-app",
  storageBucket: "shui-post-app.appspot.com",
  messagingSenderId: "130510282879",
  appId: "1:130510282879:web:17a2900c3cae40223ddf4a",
  measurementId: "G-MGY35D10NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Flow() {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  const navigate = useNavigate();

  const goToWrite = () => {
    navigate('/write')
  }


  async function getMessages() {
    const listOfMessages = await getDocs(collection(db, "Messages"));
    const messages: DocumentData[] = [];

    listOfMessages.forEach((doc) => {
      const message = doc.data();
      console.log(message);
      
      messages.push(message);
    });
    setMessages(messages);
  }
  useEffect(() => {
  getMessages();
  }, []);


function renderMessages() {
  return messages.map((message) => {
    return (
        <Message
        text={message.text}
        username={message.username}
        />
    )
  })
}

  return (
    <main>
      <h1>Flow</h1>
      {renderMessages()}
      <button  onClick={goToWrite} type="button" >Go to Write</button>
    </main>
  )
}

export default Flow
