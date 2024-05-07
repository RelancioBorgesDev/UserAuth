import { Moon } from "lucide-react";
import Logo from "@/components/logo/logo";
import React from "react";
import HeaderSearch from "./components/header-search/header-search";
import HeaderDropdownAvatar from "./components/header-dropdown-avatar/header-dropdown-avatar";
import HeaderDropdownNotifications from "./components/header-dropdown-notifications/header-dropdown-notifications";

export default function DashboardHeader() {
  return (
    <header className="border-b-2 border-zinc-950 w-full py-2 px-5 flex items-center justify-between ">
      <Logo variant={"white"} />
      <HeaderSearch />
      <div className="flex items-center gap-8">
        <Moon className="text-white" />
        <HeaderDropdownNotifications />
        <HeaderDropdownAvatar />
      </div>
    </header>
  );
}
