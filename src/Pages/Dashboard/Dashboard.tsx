import { useTranslation } from 'react-i18next';
import { Sun } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { useTheme } from '@/Components/ui/theme-provider';

export default function Dashboard() {
  const { t } = useTranslation();
  const { setTheme } = useTheme();
  return (
    <div>
      Dashboard{t('hello_world') || ''}
      <Button>Click me</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
