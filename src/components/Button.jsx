import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  download = false, 
  outline = false, 
  external = false 
}) => {
  const baseClasses = `
    inline-block px-6 py-3 rounded-full font-medium transition duration-300
    ${outline 
      ? 'border-2 border-[#800000] text-[#800000] hover:text-white' 
      : 'bg-[#800000] text-white'}
    hover:bg-gradient-to-r from-rose-600 to-pink-500
  `;

  // External link or download
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  // Internal route
  return (
    <Link to={to} className={baseClasses}>
      {children}
    </Link>
  );
};

export default Button;
