import React, { useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = React.useState(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    setYear(year);
  }, []);

  return (
    <div className="footer">
      <p>
        Mancoba Sihlongonyane &copy;
        {' '}
        {year}
      </p>

    </div>
  );
};

export default Footer;
