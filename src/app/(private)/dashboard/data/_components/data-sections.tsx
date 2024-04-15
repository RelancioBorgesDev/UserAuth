"use client";
import React, { useState } from "react";
import DataNav from "./data-nav";
import Commits from "./sections/commits";
import Repos from "./sections/repos";
import Profile from "./sections/profile";

interface DataSectionsProps {}
export default function DataSections({}: DataSectionsProps) {
  const [dataSection, setDataSection] = useState<string>("perfil");
  function handleDataSection(dataSec: string) {
    setDataSection(dataSec);
  }

  function renderSection() {
    switch (dataSection) {
      case "perfil": {
        return <Profile />;
      }
      case "repos": {
        return <Repos />;
      }
      case "commits": {
        return <Commits />;
      }
      default: {
        return <Profile />;
      }
    }
  }
  return (
    <>
      <DataNav
        dataSection={dataSection}
        handleDataSection={handleDataSection}
      />
      <section>{renderSection()}</section>
    </>
  );
}
