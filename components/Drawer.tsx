'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@/i18n/navigation';
// import Link from 'next/link';
import { BriefcaseBusiness } from 'lucide-react';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const navItems = [
    {
      id: 1,
      name: 'Home',
      icon: <BriefcaseBusiness size={20} />,
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      icon: <BriefcaseBusiness size={20} />,
      href: '/about',
    },
    {
      id: 3,
      name: 'Prices',
      icon: <BriefcaseBusiness size={20} />,
      href: '/prices',
    },
    {
      id: 4,
      name: 'Contacts',
      icon: <BriefcaseBusiness size={20} />,
      href: '/contacts',
    },
    {
      id: 5,
      name: 'Portfolio',
      icon: <BriefcaseBusiness size={20} />,
      href: '/portfolio',
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.href}>
              <ListItemButton className="flex flex-row gap-2">
                <span>{item.icon}</span>
                {item.name}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
