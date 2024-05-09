import { CircleHelp, Mail, Phone, Pin } from "lucide-react";
import React from "react";
import CardHelp from "./components/card-help";

export default function Help() {
  const cardsContent = [
    {
      title: "Nosso endereço físico",
      description: "Rua x, Bairro Y, 54",
      icon: Pin,
    },
    {
      title: "Nosso número de telefone",
      description: "(21) 99999-9999",
      icon: Phone,
    },
    {
      title: "Nosso email",
      description: "rbdev@gmail.com",
      icon: Mail,
    },
    {
      title: "FAQ",
      description: "As respostas para as perguntas mais comuns",
      icon: CircleHelp,
    },
  ];
  return (
    <div className="text-white flex flex-col gap-8">
      <h1 className="text-4xl font-bold max-sm:text-center">Ajuda</h1>

      <section className="w-full grid grid-cols-2 gap-4">
        {cardsContent.map(({ icon, title, description }, idx) => (
          <CardHelp
            key={idx}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </section>
    </div>
  );
}
