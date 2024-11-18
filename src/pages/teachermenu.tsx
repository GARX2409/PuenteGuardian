import React from 'react';
import { 
  User as UserIcon, 
  FileText as JournalIcon, 
  MessageCircle as ChatIcon, 
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

const TeacherMenu: React.FC = () => {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Bienvenido Docente
        </h1>

        <div className="space-y-4">
          <MenuButton 
            icon={<UserIcon />}
            label="Información Personal"
            href="/informacion-personal"
            color="bg-blue-500 text-white"
          />

          <MenuButton 
            icon={<JournalIcon />}
            label="Mediaciones Activas"
            href="/mediaciones-activas"
            color="bg-green-500 text-white"
          />

          <MenuButton 
            icon={<ChatIcon />}
            label="Solicitar Mediación"
            href="/solicitar-mediacion"
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

export default TeacherMenu;