import React, { useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { useRouter } from "next/router";

export default function LanguageButton() {
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = React.useState<string>("pt"); // Estado inicial com 'pt'

  // Verifica o locale atual ao carregar a página
  useEffect(() => {
    setSelectedLocale(router.locale || router.defaultLocale || "pt");
  }, [router.locale]);

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Dropdown size="sm">
      <DropdownTrigger>
        <Button variant="bordered" size="md" className="flex items-center justify-center text-xl" isIconOnly>
          <MdOutlineTranslate />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Seleção de idioma"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={[selectedLocale]}
        onSelectionChange={(keys: any) => handleLocaleChange(keys[0] as string)}
      >
        <DropdownItem startContent={<GiBrazilFlag />} onClick={() => handleLocaleChange("pt")} key="pt">
          Português
        </DropdownItem>
        <DropdownItem startContent={<LiaFlagUsaSolid />} onClick={() => handleLocaleChange("en")} key="en">
          Inglês
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
