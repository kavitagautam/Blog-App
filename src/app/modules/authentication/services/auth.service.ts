import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  // Sign in with Google
  GoogleAuth() {
    // return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  // AuthLogin(provider:any) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //   .then((result:any) => {
  //       console.log('You have been successfully logged in!')
  //   }).catch((error:any) => {
  //       console.log(error)
  //   })
  // }

}