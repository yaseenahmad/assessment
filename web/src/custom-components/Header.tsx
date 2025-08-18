"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAppearance } from "@/hooks/use-appearance"
import { useLanguage } from "@/hooks/use-language"

function Header() {
  const { appearance, updateAppearance } = useAppearance()
  const { language, updateLanguage} = useLanguage()

  return (
    <div className="header">
      <div className="brand">
        <h1>Logo</h1>
      </div>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>{appearance.charAt(0).toUpperCase() + appearance.slice(1)}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={appearance} onValueChange={(value) => updateAppearance(value as "light" | "dark" | "system")}>
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>{ language === 'en' ? 'English' : 'Spanish' }</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={language} onValueChange={(value) => updateLanguage(value as "en" | "es")}>
              <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="es">Spanish</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header