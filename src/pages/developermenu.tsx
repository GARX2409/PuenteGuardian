import React from 'react';
import { 
  User as UserIcon, 
  UserPlus as AddUserIcon, 
  BarChart as StatisticsIcon, 
  FileText as JournalIcon, 
  LogOut as LogoutIcon 
} from 'lucide-react';

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  color: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ 
  icon, 
  label, 
  href, 
  onClick, 
  color 
}) => {
  const buttonClasses = `
    w-full 
    flex 
    items-center 
    justify-center 
    py-3 
    rounded-lg 
    transition-all 
    hover:scale-105 
    hover:shadow-lg
    ${color}
  `;

  const content = (
    <div className={buttonClasses} onClick={onClick}>
      <span className="mr-2">{icon}</span>
      {label}
    </div>
  );

  return href 
    ? <a href={href} className="block">{content}</a>
    : <button type="button" className="w-full">{content}</button>;
};

const DeveloperMenu: React.FC = () => {
  const handleLogout = () => {
    console.log('Logging out');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Bienvenido Desarrollador
        </h1>

        <div className="space-y-4">
          <MenuButton 
            icon={<UserIcon />}
            label="Información Personal"
            href="/informacion-personal"
            color="bg-blue-500 text-white"
          />

          <MenuButton 
            icon={<AddUserIcon />}
            label="Agregar Usuarios"
            href="/agregar-usuarios"
            color="bg-green-500 text-white"
          />

          <MenuButton 
            icon={<StatisticsIcon />}
            label="Estadísticas"
            href="/estadisticas"
            color="bg-purple-500 text-white"
          />

          <MenuButton 
            icon={<JournalIcon />}
            label="Mediaciones Activas"
            href="/mediaciones-activas"
            color="bg-yellow-500 text-white"
          />

          <MenuButton 
            icon={<LogoutIcon />}
            label="Cerrar Sesión"
            onClick={handleLogout}
            color="bg-red-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DeveloperMenu;