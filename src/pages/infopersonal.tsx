import React, { useState } from 'react';
import { 
  Camera as CameraIcon, 
  Edit as EditIcon, 
  ArrowLeft as BackIcon 
} from 'lucide-react';

const PersonalInfo: React.FC = () => {
  const [username, setUsername] = useState('NombreDeUsuario');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadImage = () => {
    if (selectedFile) {
      // Implement image upload logic
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpdateInfo = () => {
    // Implement update logic
    if (newUsername) setUsername(newUsername);
    console.log('Información actualizada');
  };

  const handleBackToMenu = () => {
    // Implement navigation back to menu
    console.log('Regresar al menú');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Información Personal</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <img 
              src={profileImage} 
              alt="Foto de Perfil" 
              className="w-36 h-36 rounded-full object-cover mx-auto mb-3"
            />
            
            <div className="flex justify-center items-center space-x-2 mb-4">
              <input 
                type="file" 
                id="upload" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
              <label 
                htmlFor="upload" 
                className="flex items-center cursor-pointer bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                <CameraIcon className="mr-2" size={20} />
                Actualizar Foto
              </label>
              {selectedFile && (
                <button 
                  onClick={handleUploadImage} 
                  className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
                >
                  Subir
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <p className="mt-1 text-lg font-semibold">{username}</p>
            </div>

            <div>
              <label htmlFor="newUsername" className="block text-sm font-medium text-gray-700">
                Nuevo Nombre de Usuario
              </label>
              <input 
                type="text" 
                id="newUsername"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                Nueva Contraseña
              </label>
              <input 
                type="password" 
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button 
              onClick={handleUpdateInfo}
              className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <EditIcon className="mr-2" size={20} />
              Actualizar Información
            </button>
          </div>
        </div>

        <button 
          onClick={handleBackToMenu}
          className="mt-4 w-full flex items-center justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          <BackIcon className="mr-2" size={20} />
          Regresar al Menú
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;