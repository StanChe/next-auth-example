"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import nacl from 'tweetnacl';
import util from 'tweetnacl-util';
import bs58 from 'bs58';


export function SignInForm(props: React.ComponentPropsWithRef<typeof Button>) {
  const handleSignIn = async () => {
    const keyPair = nacl.sign.keyPair();
    const publicKeyBase64 = bs58.encode(keyPair.publicKey);
    console.log("Key Pair generated. Do not share this with anyone! This is just for demo purposes.")
    console.log("Public Key:", publicKeyBase64);
    console.log("Private Key:", util.encodeBase64(keyPair.secretKey));
    await signIn('google', {}, { nonce: publicKeyBase64 });
  };

  return (
    <form
      onSubmit={(e) => {
        console.log("Sign in form submitted");
        e.preventDefault();
        handleSignIn();
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}
