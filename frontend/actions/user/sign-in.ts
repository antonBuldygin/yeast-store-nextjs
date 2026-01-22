"use server";

import config from "@/types/config";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function signIn(formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;

  if (email !== "admin@gmail.com" && password !== "123") {
    console.log("Error");
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set(config.AUTH_COOKIE_NAME, "true");
  // TODO: Redirect to a specific address
  redirect("/", RedirectType.replace);
}
