import React from "react";

export default function HeaderAvatar() {
  return (
    <div className="text-white flex hover:bg-gray-600/25 rounded p-2">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4"></div>
      <div>
        <h4>{"Dazai"}</h4>
        <h5>@{"dazai26"}</h5>
      </div>
    </div>
  );
}
