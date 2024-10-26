"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/lib/supabase/products";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const SignIn = () => {
  return (
    <div className="bg-black py-12 absolute top-0 w-full">
      <div className="w-[24%] mx-auto">
      <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
      </div>
    </div>
  );
};

export default SignIn;
