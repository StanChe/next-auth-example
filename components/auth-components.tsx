import {  signOut } from "auth"
import { Button } from "./ui/button"

import { SignInForm } from './SignInForm.client'; 

export function SignIn({
  ...props
}: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <SignInForm {...props} />
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
