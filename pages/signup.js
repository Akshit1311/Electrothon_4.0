import { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";
import { async } from "@firebase/util";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({
        displayName: name,
      });
      M.toast({ html: `welcome ${result.user.displayName}`, classes: "green" });
    } catch (err) {
      M.toast({ html: err.message, classes: "red" });
    }
  };
  return (
    <div className="container center">
      <h1> Please SIGN-Up</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn #ffab91 deep-orange lighten-3">
          SIGN-IN
        </button>
        <Link href="/login">
          <a>
            <h5>Already have an account? Login here</h5>
          </a>
        </Link>
      </form>
    </div>
  );
}
