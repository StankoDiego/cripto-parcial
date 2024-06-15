import { GoogleAuthProvider, UserCredential, signInWithPopup, signOut } from "firebase/auth";
import auth from "./config";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export interface IUser {
  name: string,
  email: string,
  photo_url: string
}

export const logginWithGoogle = async (): Promise<IUser> => {
  const responseGoogle = new GoogleAuthProvider()
  const response = await signInWithPopup(auth, responseGoogle)

  const user: IUser = {
    email: response.user.email ?? "",
    name: response.user.displayName ?? "",
    photo_url: response.user.photoURL ?? ""
  };
  return user;
}

export const logout = async () => {
  const response = await signOut(auth)
  return response;
}


