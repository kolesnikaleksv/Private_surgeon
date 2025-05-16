'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIconBlack from '@/components/icons/LogoIconBlack';
import PhoneLink from '@/components/PhoneLink';
import DialogWithForm from '@/components/DialogWithForm';
import {
  BriefcaseBusiness,
  Building2,
  FileBadge,
  House,
  PanelRightClose,
  UserPen,
} from 'lucide-react';

export default function MobileMenuDrawer() {
  const [open, setOpen] = React.useState(false);
  const n = useTranslations('NavbarLinks');

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    {
      id: 1,
      name: `${n('home')}`,
      icon: <House size={20} />,
      href: '/',
    },
    {
      id: 2,
      name: `${n('about')}`,
      icon: <Building2 size={20} />,
      href: '/about',
    },
    {
      id: 3,
      name: `${n('prices')}`,
      icon: <FileBadge size={20} />,
      href: '/prices',
    },
    {
      id: 4,
      name: `${n('contacts')}`,
      icon: <UserPen size={20} />,
      href: '/contacts',
    },
    {
      id: 5,
      name: `${n('portfolio')}`,
      icon: <BriefcaseBusiness size={20} />,
      href: '/portfolio',
    },
  ];

  return (
    <div className="xl:hidden">
      <div onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            fontSize: 45,
            stroke: '#d8e7f4b3',
            strokeWidth: 1,
            borderRadius: 2,
            cursor: 'pointer',
            '&:hover': {
              bgcolor: 'rgb(216, 231, 244)',
            },
          }}
          aria-hidden="false"
        />
      </div>

      <Drawer
        anchor="right"
        color="red"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Prevents unmounting, avoiding focus issues
        }}
      >
        <div
          onClick={toggleDrawer(false)}
          className="absolute top-2 right-2 onClick={toggleDrawer(false)}"
        >
          <PanelRightClose size={20} />
        </div>
        <Link href={'/'}>
          <LogoIconBlack className="h-10 sm:h-14 mr-10" />
        </Link>
        <PhoneLink />
        <p className="text-[rgb(115_115_115)]">Choose a page</p>
        <Box sx={{ pt: 2.5 }} role="presentation" onClick={toggleDrawer(false)}>
          <List className="">
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <Link href={item.href}>
                  <ListItemButton className="flex flex-row gap-4 whitespace-nowrap">
                    <span>{item.icon}</span>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <div className="flex flex-1 justify-center items-end pb-4">
          <div onClick={() => setOpen(false)} className="cursor-pointer">
            <DialogWithForm hideForMobile={false} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
