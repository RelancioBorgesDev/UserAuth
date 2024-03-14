import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeaderAvatar() {
  return (
    <div className="text-white flex hover:bg-gray-600/25 rounded p-2 gap-4 w-full">
      <Avatar>
        <AvatarImage src="https://github.com/RelancioBorgesDev.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
    </div>
  );
}
