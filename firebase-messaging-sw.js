importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB6cVs2gz7hMk2iMmUMFZ0cSULKTVRiIkI",
  authDomain: "tic-tac-toe-96ab2.firebaseapp.com",
  projectId: "tic-tac-toe-96ab2",
  storageBucket: "tic-tac-toe-96ab2.firebasestorage.app",
  messagingSenderId: "277095072468",
  appId: "1:277095072468:web:3c82669a5b0922168fb141"
});

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  var title = payload.notification && payload.notification.title
    ? payload.notification.title : 'XO Arena';
  var body = payload.notification && payload.notification.body
    ? payload.notification.body : '';
  return self.registration.showNotification(title, {
    body: body,
    icon: 'https://cartunizetoonshindi-ops.github.io/xo-tournament/icon.png',
    vibrate: [200, 100, 200],
    tag: 'xo-notification',
    renotify: true
  });
});
