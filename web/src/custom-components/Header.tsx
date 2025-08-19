import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAppearance } from "@/hooks/use-appearance"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "react-i18next";

type Theme = 'light' | 'dark' | 'system';
type Language = 'en' | 'es';

function Header() {
  const { appearance, updateAppearance } = useAppearance()
  const { language, updateLanguage} = useLanguage()
  const { t } = useTranslation()

  const theme = {'light': t('global.light'), 'dark':t('global.dark'), 'system':t('global.system')};
  const languages = ['en', 'es'];

  return (
    <div className="header">
      <div className="brand">
        <img src="/a-icon.png" alt="logo" />
      </div>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>{theme[appearance]}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={appearance} onValueChange={(value) => updateAppearance(value as Theme)}>
              {(Object.keys(theme) as Theme[]).map((t) => (
                <DropdownMenuRadioItem key={t} value={t}>
                  {theme[t]}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>{ language === 'en' ? t('global.english') : t('global.spanish')}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={language} onValueChange={(value) => updateLanguage(value as Language)}>
              {languages.map((lang) => (
                <DropdownMenuRadioItem key={lang} value={lang}>
                  {lang === 'en' ? t('global.english') : t('global.spanish')}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header