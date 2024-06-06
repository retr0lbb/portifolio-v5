import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

// Definindo os tipos
type Selection = string | Set<string>;

export default function LanguageButton() {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["Linguagem"]));

  // Função para lidar com a mudança de seleção, convertendo o tipo adequadamente
  const handleSelectionChange = (keys: Selection) => {
    if (typeof keys === "string") {
      setSelectedKeys(new Set([keys]));
    } else {
      setSelectedKeys(keys);
    }
  };

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
            handleSelectionChange(keys as any)
        }}
      >
        <DropdownItem key="Português">Português</DropdownItem>
        <DropdownItem key="Inglês">Inglês</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
// see this: https://www.youtube.com/watch?v=duqmeJbxVIk