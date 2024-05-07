"use client";
import React, { useEffect, useState } from "react";
import DataNav from "./data-nav";
import Repos from "./sections/repos";
import Profile from "./sections/profile";
import { getSession } from "@/utils/getUserInfo";
import AuthOptions from "@/app/auth/(auth)/sign-up/_components/auth-options/auth-options";

interface DataSectionsProps {}
export default function DataSections({}: DataSectionsProps) {
  const [dataSection, setDataSection] = useState<string>("perfil");
  const [hasToken, setHasToken] = useState<boolean>(false);
  function handleDataSection(dataSec: string) {
    setDataSection(dataSec);
  }

  useEffect(() => {
    async function fetchData() {
      const session = await getSession();
      const accToken = session?.accessToken;
      if (accToken) {
        setHasToken(true);
      }
    }

    fetchData();
  }, []);

  function renderSection() {
    switch (dataSection) {
      case "perfil": {
        return <Profile />;
      }
      case "repos": {
        return <Repos />;
      }
      default: {
        return <Profile />;
      }
    }
  }
  return (
    <>
      {hasToken ? (
        <>
          <DataNav
            dataSection={dataSection}
            handleDataSection={handleDataSection}
          />
          <section className="max-lg:w-full">{renderSection()}</section>
        </>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center gap-8 h-96">
            <h1 className="text-5xl font-bold">
              Por favor conecte no github para ver seus dados
            </h1>
            <button className=" px-4 py-2 rounded-lg text-white">
              <AuthOptions />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
