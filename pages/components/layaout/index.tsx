import { useEffect, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('my-body-class'); // Añade la clase deseada al body

    return () => {
      document.body.classList.remove('my-body-class'); // Remueve la clase al desmontar el componente
    };
  }, []);

  return <div>{children}</div>;
};

export default Layout;
