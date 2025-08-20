import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAppearance } from "@/hooks/use-appearance"
import { useTranslation } from "react-i18next"

function Header() {
  const { theme, language, updateTheme, updateLanguage } = useAppearance()
  const { t } = useTranslation()

  return (
    <div className="header">
      <div className="brand">
        <h1>{t('common.logo')}</h1>
      </div>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>{theme.charAt(0).toUpperCase() + theme.slice(1)}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={theme} onValueChange={(value) => updateTheme(value as "light" | "dark" | "system")}>
              <DropdownMenuRadioItem value="light">{t('common.light')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">{t('common.dark')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">{t('common.system')}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>{t(`common.${language === 'en' ? 'english' : 'spanish'}`)}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={language} onValueChange={(value) => updateLanguage(value as "en" | "es")}>
              <DropdownMenuRadioItem value="en">{t('common.english')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="es">{t('common.spanish')}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header