import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import { IconType } from "react-icons";

type Selection = string | Set<string>;

export default function LanguageButton() {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["Português"]));
  const [selectedFlag, setSelectedFlag] = React.useState<IconType>(GiBrazilFlag)

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
    <Dropdown size="sm">
      <DropdownTrigger>
        <Button variant="flat" size="sm"  className="capitalize" startContent={selectedFlag as any}>
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
            handleSelectionChange(keys as any)
            console.log(keys)
        }}
      >
        <DropdownItem startContent={<GiBrazilFlag />} onClick={() => setSelectedFlag(GiBrazilFlag)} key="Português">Português</DropdownItem>
        <DropdownItem startContent={<LiaFlagUsaSolid />} onClick={() => setSelectedFlag(LiaFlagUsaSolid)} key="Inglês">Inglês</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
// see this: https://www.youtube.com/watch?v=duqmeJbxVIk