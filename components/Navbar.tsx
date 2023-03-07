import styles from './Navbar.module.css'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import { FC } from 'react';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar:FC = () => {
  return (
    <nav className={ styles['menu-container'] } >
        {
          menuItems.map((el,idx)=>(
            <ActiveLink key={idx} text={el.text} href={el.href} />
          ))
        }
       
        
    </nav>
  )
}
