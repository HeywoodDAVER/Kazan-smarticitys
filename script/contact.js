// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLTG1EZJpc8-DhmsGsHGgQZAMDSfFTt54",
    authDomain: "kazan-25ef9.firebaseapp.com",
    databaseURL: "https://kazan-25ef9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kazan-25ef9",
    storageBucket: "kazan-25ef9.appspot.com",
    messagingSenderId: "537795209258",
    appId: "1:537795209258:web:61c7f7a3c4d460efed7b53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database()
  const auth = firebase.auth()

  //soumission form
  const formContact = document.querySelector('.contactForm')
  const notification = document.querySelector('.notification')

  formContact.addEventListener("submit",(e)=>{
      console.log('bjr')
      e.preventDefault();
      let objetValues = {
          nom: getValue("#contactForm-nom"),
          prenom: getValue("#contactForm-prenom"),
          email: getValue("#contactForm-email"),
          objet: getValue("#contactForm-objet"),
          message: getValue("#contactForm-message"),
      }
      console.log(objetValues)
      auth.signInAnonymously()
    .then(()=>{
        let user = auth.currentUser
        console.log(user.uid)
        objetValues.user = user.uid
        let date = Date.now()
        db.ref(`contacts/${date}`).set(objetValues)
        console.log(objetValues)
    })
    .then(()=>{
        notification.innerHTML = "contact ajouté"
        notification.classList.remove('disable')
        notification.classList.add('succes')
        formContact.classList.add('disable')
        setTimeout(()=>{
            notification.classList.add('disable')
            formContact.classList.remove('disable')
            notification.classList.remove('succes')
        },2000)
    })
    .catch((error) =>{
        console.log(error.message)
        notification.innerHTML = "une erreur serveur a été rencontrée"
        notification.classList.remove('disable')
        notification.classList.add('is-danger')
        setTimeout(()=>{
            notification.classList.add('disable')
            notification.classList.remove('is-danger')
        },2000)
    })
    formContact.reset(); 
  })
  

  const getValue = function(selector){
    return(document.querySelector(selector).value) ? document.querySelector(selector).value: ""
  }