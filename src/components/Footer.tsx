import { Link } from 'react-router-dom';
import SiteMap from '../components/ui/SiteMap';

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MernEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </span>
        {/* Integra el componente SiteMap aquí */}
        <SiteMap 
          containerStyle={{ marginTop: '20px' }} // Estilo del contenedor
          headingStyle={{ color: '#fff', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }} // Estilo del encabezado
          linkStyle={{ color: '#fff', textDecoration: 'none' }} // Estilo de los enlaces
        />
      </div>
    </div>
  );
};

export default Footer;
