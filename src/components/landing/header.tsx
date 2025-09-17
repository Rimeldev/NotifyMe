import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="container flex items-center justify-between p-4 glass-card">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Bell className="text-primary" />
          <span>NotifyAI</span>
        </div>
        <Button asChild className="cta-primary hidden sm:flex">
          <a href="#cta">Accès VIP</a>
        </Button>
      </nav>
    </header>
  );
}
