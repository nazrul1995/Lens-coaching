"use client"

import { LogIn } from "@/app/lib/actions/auth"
export default function Login() {
  return (
    <div>
      <p>You are not signed in</p>
      <button className="btn btn-primary" onClick={()=>LogIn("github")}>Sign In with github</button>
    </div>
  )
}
