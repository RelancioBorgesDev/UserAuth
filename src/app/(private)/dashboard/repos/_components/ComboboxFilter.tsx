"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
type FrameworksType = {
  value: string;
  label: string;
};
const frameworks: FrameworksType[] = [];

export function ComboboxFilter() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [languages, setLanguages] = React.useState<string[]>([]);
  const { repos } = useGithubDataContext();

  React.useEffect(() => {
    const allLanguages: { [key: string]: number } = {};

    repos.forEach((repo) => {
      if (repo.language) {
        allLanguages[repo.language] = (allLanguages[repo.language] || 0) + 1;
      }
    });
    const sortedLanguages = Object.keys(allLanguages).sort(
      (a, b) => allLanguages[b] - allLanguages[a]
    );
    const limitedLanguages = sortedLanguages.slice(0, 5);

    setLanguages(limitedLanguages);
  }, [repos]);

  React.useEffect(() => {
    languages.forEach((lang) => {
      if (
        frameworks.length === 0 ||
        !frameworks.some((frame) => frame.value === lang.toLowerCase())
      ) {
        frameworks.push({
          value: lang.toLowerCase(),
          label: lang,
        });
      }
    });
  }, [languages]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>Nenhum encontrado.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {frameworks.map((framework, idx) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
