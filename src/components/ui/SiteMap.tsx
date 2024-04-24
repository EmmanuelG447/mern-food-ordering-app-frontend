import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SiteMapProps {
  containerStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  headingStyle?: React.CSSProperties;
}

const SiteMap: React.FC<SiteMapProps> = ({ containerStyle, linkStyle, headingStyle }) => {
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/search/city/a', label: 'Search Restaurant' },
    { path: '/order-status', label: 'Order Status' },
    { path: '/user-profile', label: 'User Profile' },
    { path: '/manage-restaurant', label: 'Mamage Restaurant' },
    // Agrega otras rutas según sea necesario
  ];

  return (
    <div style={containerStyle}>
      {/* Aplicar estilos al encabezado */}
      <h3 style={headingStyle}>Site Map</h3>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            {/* Aplicar estilos a los enlaces */}
            <Link
              to={route.path}
              style={{
                ...linkStyle,
                fontWeight: location.pathname === route.path ? 'bold' : 'normal'
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
