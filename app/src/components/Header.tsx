import { Bell, Menu, User, ChevronDown, LogOut, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  onMenuToggle: () => void;
  sidebarCollapsed?: boolean;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="text-ucal-gray hover:text-ucal-blue hover:bg-ucal-light-blue transition-colors"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Logo y Título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-ucal flex items-center justify-center shadow-ucal">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm lg:text-base font-semibold text-gray-800 leading-tight">
                Sistema de Seguimiento
              </h1>
              <p className="text-xs text-ucal-gray hidden lg:block">
                Productos Académicos - UCAL
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Notificaciones */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-ucal-gray hover:text-ucal-blue hover:bg-ucal-light-blue transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ucal-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-ucal-orange"></span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notificaciones
                <Badge variant="secondary" className="bg-ucal-orange text-white text-xs">
                  3 nuevas
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-64 overflow-y-auto">
                <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                  <span className="text-sm font-medium text-gray-800">
                    Nuevo artículo aprobado
                  </span>
                  <span className="text-xs text-gray-500">
                    Su artículo "Inteligencia Artificial en Educación" ha sido aprobado
                  </span>
                  <span className="text-xs text-ucal-orange">Hace 2 horas</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                  <span className="text-sm font-medium text-gray-800">
                    Recordatorio de entrega
                  </span>
                  <span className="text-xs text-gray-500">
                    El informe técnico vence en 3 días
                  </span>
                  <span className="text-xs text-ucal-orange">Hace 5 horas</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                  <span className="text-sm font-medium text-gray-800">
                    Revisión completada
                  </span>
                  <span className="text-xs text-gray-500">
                    Su trabajo de grado ha sido revisado
                  </span>
                  <span className="text-xs text-ucal-orange">Ayer</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-ucal-blue cursor-pointer">
                Ver todas las notificaciones
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Perfil de Usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 lg:px-3 hover:bg-ucal-light-blue transition-colors"
              >
                <Avatar className="h-8 w-8 border-2 border-ucal-blue">
                  <AvatarImage src="" alt="Usuario" />
                  <AvatarFallback className="bg-ucal-blue text-white text-sm">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    Juan Díaz
                  </p>
                  <p className="text-xs text-ucal-gray">
                    Estudiante
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-ucal-gray hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4 text-ucal-gray" />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4 text-ucal-gray" />
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <HelpCircle className="mr-2 h-4 w-4 text-ucal-gray" />
                Ayuda
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
