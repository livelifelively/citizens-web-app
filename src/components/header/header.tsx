import {
  // AppShell,
  Burger,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Button,
  useMantineTheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
// import { useSession, signIn, signOut } from 'next-auth/react';

import Logo from '@/components/logo/logo';
import classes from './header.module.css';

// const { Header } = AppShell;

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
  session: any;
  signOut: any;
  signIn: any;
}

export function AppHeader({ navbarOpened, toggleNavbar, session, signIn, signOut }: HeaderProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const { data: session } = useSession();

  const theme = useMantineTheme();

  return (
    // <Header px="lg" py="sm" className={classes.header}>
    <Box
      px="lg"
      py="sm"
      className={classes.header}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Group>
        <Burger
          hiddenFrom="sm"
          opened={navbarOpened}
          onClick={toggleNavbar}
          color={theme.colors.gray[6]}
        />
        <Logo />
      </Group>

      <Group visibleFrom="sm">
        {session && (
          <Button variant="default" size="xs" onClick={() => signOut()}>
            Logout
          </Button>
        )}
        {!session && (
          <Button variant="default" size="xs" onClick={() => signIn()}>
            Login
          </Button>
        )}
        <ActionIcon
          variant="light"
          onClick={() => toggleColorScheme()}
          size={30}
          color={colorScheme === 'dark' ? 'yellow.8' : 'brandBlue.5'}
        >
          {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
        </ActionIcon>
      </Group>
    </Box>
    // </Header>
  );
}

export default AppHeader;
