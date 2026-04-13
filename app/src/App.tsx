import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { ProductForm } from '@/components/ProductForm';
import { cn } from '@/lib/utils';
import './App.css';

// Componente wrapper para el formulario con parámetros
function ProductFormWrapper() {
  const { categoria, subcategoria } = useParams<{ categoria: string; subcategoria?: string }>();
  
  // Mapear rutas a categorías
  const categoriaMap: Record<string, string> = {
    articulos: 'articulos',
    'trabajos-grado': 'trabajos-grado',
    'informes-tecnicos': 'informes-tecnicos',
    ponencias: 'ponencias',
    libros: 'libros',
    'productos-derivados': 'productos-derivados',
    'desarrollo-software': 'desarrollo-software',
  };

  const categoriaReal = categoria ? categoriaMap[categoria] || categoria : 'articulos';
  
  return <ProductForm categoria={categoriaReal} subcategoria={subcategoria} />;
}

// Layout principal
function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        sidebarCollapsed={sidebarCollapsed}
      />
      <Sidebar collapsed={sidebarCollapsed} />
      
      <main
        className={cn(
          'transition-all duration-300 ease-smooth pt-16 min-h-screen',
          sidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'
        )}
      >
        <div className="p-4 lg:p-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:categoria/:subcategoria?" element={<ProductFormWrapper />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        }}
      />
      <MainLayout />
    </Router>
  );
}

export default App;
