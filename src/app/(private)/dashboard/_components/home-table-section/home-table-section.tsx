"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
import React, { useEffect, useState } from "react";

type ProjectDataType = {
  name: string;
  date: string;
  language: string;
};
export default function HomeTableSection() {
  const { repos } = useGithubDataContext();
  const [projectData, setProjectData] = useState<ProjectDataType[]>([]);

  useEffect(() => {
    setProjectData(() =>
      repos.map((repo) => ({
        name: repo.name,
        date: repo.created_at,
        language: repo.language,
      }))
    );
  }, [repos]);

  function formatDate(data: string) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, "0");
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <Table>
      <TableCaption>Uma lista dos seus projetos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Nome do Projeto</TableHead>
          <TableHead className="w-full">Data</TableHead>
          <TableHead className="text-right">Linguagens</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectData.slice(0, 8).map((data, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell className="font-medium">
              {formatDate(data.date)}
            </TableCell>
            <TableCell className="text-right flex gap-2">
              {data.language}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
