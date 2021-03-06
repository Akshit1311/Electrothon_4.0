import { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      M.toast({ html: `welcome ${result.user.displayName}`, classes: "green" });
    } catch (err) {
      M.toast({ html: err.message, classes: "red" });
    }
  };
  return (
    <div className="container center">
      <h1> Please LOGIN </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
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
          LOGIN
        </button>
        <Link href="/signup">
          <a>
            <h5>Don&apos;t have an account? Sign-Up</h5>
          </a>
        </Link>
      </form>
    </div>
  );
}
