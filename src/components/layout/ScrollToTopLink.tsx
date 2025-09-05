
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// // Custom Link component that scrolls to top on click
// const ScrollToTopLink: React.FC<{
//   to: string;
//   children: React.ReactNode;
//   className?: string;
// }> = ({ to, children, className }) => {
//   const navigate = useNavigate();

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault(); // Prevent default Link behavior
//     navigate(to); // Navigate to the target route
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
//   };

//   return (
//     <Link to={to} onClick={handleClick} className={className}>
//       {children}
//     </Link>
//   );
// };

// export default ScrollToTopLink;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ScrollToTopLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | (() => void); // Corrected type
}> = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof onClick === 'function') {
      if (onClick.length === 0) {
        (onClick as () => void)(); // Handle () => void functions (e.g., closeMenu)
      } else {
        onClick(e); // Handle MouseEventHandler (e.g., with event)
      }
    }
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;