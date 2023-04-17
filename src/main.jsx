import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BookList } from './Components/BookList'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { App } from './App';

firebase.initializeApp({
		type: import.meta.env.VITE_TYPE,
		projectId: import.meta.env.VITE_PROJECT_ID,
		private_key_id: import.meta.env.VITE_PRIVATE_KEY_ID,
		private_key: import.meta.env.VITE_PRIVATE_KEY,
		client_email:import.meta.env.VITE_CLIENT_EMAIL,
		client_id: import.meta.env.VITE_CLIENT_ID,
		auth_uri: import.meta.env.VITE_AUTH_URI,
		token_uri: import.meta.env.VITE_TOKEN_URI,
		auth_provider_x509_cert_url:import.meta.env.VITE_AUTH_PROVIDER_X509_CERT_URL,
		client_x509_cert_url: import.meta.env.VITE_CLIENT_X509_CERT_URL
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<App />
  </React.StrictMode>,
)
