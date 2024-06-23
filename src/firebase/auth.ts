import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./config";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/drive.readonly');

export interface IUser {
  name: string,
  email: string,
  photo_url: string,
  token?: string
}

export const logginWithGoogle = async (): Promise<IUser> => {
  const response = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(response);
  const accessToken = credential?.accessToken ?? "";

  const user: IUser = {
    email: response.user.email ?? "",
    name: response.user.displayName ?? "",
    photo_url: response.user.photoURL ?? "",
    token: accessToken
  };
  return user;
}

export const logout = async () => {
  const response = await signOut(auth)
  return response;
}
