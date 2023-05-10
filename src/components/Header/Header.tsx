import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

type Header = {
  children?: React.ReactNode;
  links: Array<{
    title: string;
    href: string;
  }>;
};

export default function Header({ children, links }: Header) {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <ul className={styles.linksGroup}>
        {links &&
          links.map((link, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <li>
                <NavLink to={link.href} className={styles.link}>
                  {link.title}
                </NavLink>
              </li>
              {location.pathname === link.href && (
                <div className={styles.linkLine} />
              )}
            </div>
          ))}
      </ul>
      {children && children}
    </header>
  );
}
