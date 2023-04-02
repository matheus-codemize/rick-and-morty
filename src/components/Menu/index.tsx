import React, { useEffect, useState, useCallback } from 'react';

import { useRouter } from 'next/router';

import styles from './styles';
import { MenuItemProps, MenuProps } from './types';

const menuItems: Array<MenuItemProps> = [
  { path: '/home', label: 'Home' },
  { path: '/characters', label: 'Characters' },
  { path: '/about', label: 'About' },
];

const Menu: React.FC<MenuProps> = props => {
  const { direction } = props;

  const router = useRouter();

  const [selected, setSelected] = useState<string>(router.pathname);
  const [, setSelectedIndex] = useState<number>(
    menuItems.findIndex(menu => menu.path === router.pathname),
  );

  useEffect(() => {
    const pathname = router.pathname;

    setSelected(pathname);
    setSelectedIndex(menuItems.findIndex(menu => menu.path === pathname));
  }, [router.pathname]);

  const handleRouter = useCallback(
    (path: string) => {
      if (path !== selected) {
        router.push(path);
      }
    },
    [selected],
  );

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div className={`container ${direction}`}>
        <ul>
          {menuItems.map((menu, index, array) => (
            <li
              key={index}
              onClick={() => handleRouter(menu.path)}
              onMouseMove={() => {
                if (index !== array.length - 1) {
                  setSelectedIndex(index);
                }
              }}
              className={selected === menu.path ? 'selected' : 'default'}>
              <p>{menu.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Menu;
