import DataNavItem from "./data-nav-item";

interface DataNavProps {
  dataSection: string | undefined;
  handleDataSection: (dataSec: string) => void;
}

export default function DataNav({
  dataSection,
  handleDataSection,
}: DataNavProps) {
  return (
    <nav className="list-none">
      <ul className="flex items-center gap-8">
        <DataNavItem
          variant={dataSection === "perfil" ? "white" : null}
          onClick={() => handleDataSection("perfil")}
        >
          Perfil
        </DataNavItem>
        <DataNavItem
          variant={dataSection === "repos" ? "white" : null}
          onClick={() => handleDataSection("repos")}
        >
          Repositórios
        </DataNavItem>
        <DataNavItem
          variant={dataSection === "commits" ? "white" : null}
          onClick={() => handleDataSection("commits")}
        >
          Commits
        </DataNavItem>
      </ul>
    </nav>
  );
}
