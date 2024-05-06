import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSession } from "@/utils/getUserInfo";
import { useEffect, useState } from "react";

interface HeaderAvatarProps {
  profile_pic: string;
}

export default function HeaderAvatar({ profile_pic }: HeaderAvatarProps) {
  const [userInitials, setUserInitials] = useState<string | undefined>("");

  async function getUserName() {
    const session = await getSession();

    let userName = "";
    if (session) {
      userName = session.user.name;
    }

    setUserInitials(userName?.split("")[0]);
  }
  useEffect(() => {
    getUserName();
  }, []);
  return (
    <div className="text-white flex hover:bg-gray-600/25 rounded p-2 gap-4 w-full">
      <Avatar>
        <AvatarImage src={profile_pic} />
        <AvatarFallback className="text-black">{userInitials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
