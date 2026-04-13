import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ClipboardList,
  Mic,
  BookOpen,
  Package,
  Code,
  Home,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { menuData } from '@/data/menuData';

interface SidebarProps {
  collapsed: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  FileText,
  GraduationCap,
  ClipboardList,
  Mic,
  BookOpen,
  Package,
  Code,
  Home,
};

export function Sidebar({ collapsed }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['articulos']);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (itemId: string) => {
    const item = menuData.find((m) => m.id === itemId);
    if (!item?.children) return false;
    return item.children.some((child) => location.pathname === child.path);
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 bottom-0 gradient-ucal-sidebar transition-all duration-300 ease-smooth z-40 overflow-hidden',
        collapsed ? 'w-[72px]' : 'w-[280px]'
      )}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden py-4">
        <nav className="px-2">
          {menuData.map((item) => {
            const Icon = iconMap[item.icon] || Home;
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.id);
            const isParentActive = isActiveParent(item.id);
            const isItemActive = item.path ? isActive(item.path) : false;

            return (
              <div key={item.id} className="mb-1">
                {/* Menu Item */}
                <button
                  onClick={() => {
                    if (hasChildren) {
                      toggleExpand(item.id);
                    } else if (item.path) {
                      navigate(item.path);
                    }
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                    isItemActive || isParentActive
                      ? 'bg-ucal-orange/20 border-l-3 border-ucal-orange text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                    collapsed && 'justify-center px-2'
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5 flex-shrink-0 transition-transform duration-200',
                      !collapsed && 'group-hover:scale-110'
                    )}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left text-sm font-medium truncate">
                        {item.label}
                      </span>
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-300',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      )}
                    </>
                  )}
                </button>

                {/* Submenu */}
                {!collapsed && hasChildren && (
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-smooth',
                      isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="mt-1 ml-4 pl-3 border-l-2 border-ucal-orange/40">
                      {item.children?.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => navigate(child.path)}
                          className={cn(
                            'w-full flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 group',
                            isActive(child.path)
                              ? 'bg-white/15 text-white border-l-2 border-ucal-orange'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          )}
                        >
                          <ChevronRight className="h-3 w-3 flex-shrink-0 opacity-60" />
                          <span className="text-left text-xs leading-tight">
                            {child.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer del Sidebar */}
        {!collapsed && (
          <div className="mt-8 mx-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ucal-orange flex items-center justify-center">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">UCAL</p>
                <p className="text-white/60 text-xs">Formación Humana</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
