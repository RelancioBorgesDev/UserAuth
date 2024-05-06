"use client";
import SocialLoginOption from "@/components/social-login-option/social-login-option";
import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function AuthOptions() {
  return (
    <div className="w-full flex items-center justify-around gap-4">
      <SocialLoginOption icon={FaGithub} href="#" text="Github" />
    </div>
  );
}
