import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem } from './ui/select';
import { useTranslation } from 'react-i18next';
import { SelectTrigger } from '@radix-ui/react-select';

const languages = {
    en: 'English',
    es: 'Spanish',
    pt: 'Portuguese',
};

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: keyof typeof languages) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Select onValueChange={changeLanguage}>
            <SelectTrigger className="outline-none">
                <div className={'text-slate-900 border rounded-full border-slate-900 p-[11px]'}>
                    <Globe className={'size-4 md:size-6'} />
                </div>
            </SelectTrigger>
            <SelectContent>
                {Object.keys(languages).map(lng => (
                    <SelectItem key={lng} value={lng}>
                        {languages[lng as keyof typeof languages]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
