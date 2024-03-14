import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeaderAvatar() {
  return (
    <div className="text-white flex hover:bg-gray-600/25 rounded p-2 gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/RelancioBorgesDev.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h4>{"Relancio Borges"}</h4>
        <h5>@{"RelancioBorgesDev"}</h5>
      </div>
    </div>
  );
}
