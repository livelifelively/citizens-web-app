import { Anchor, Title, useMantineTheme } from '@mantine/core';
import classes from './logo.module.css';
import { quicksand } from '../fonts';

/* eslint-disable-next-line */
export interface LogoProps {
  size?: string;
  color?: string;
  linksToHome?: boolean;
}

export function Logo({ size, color, linksToHome = true }: LogoProps) {
  const theme = useMantineTheme();

  const LogoContent = () => (
    <Title
      size={size || 'h2'}
      className={`${classes.logoText} ${quicksand.className}`}
      // underline={false}
      style={{ color: color || theme.colors.brandBlue[5] }}
    >
      Qbeela
    </Title>
  );

  return linksToHome ? (
    <Anchor href="/" className={classes.logo}>
      <LogoContent />
    </Anchor>
  ) : (
    <Anchor className={classes.logo}>
      <LogoContent />
    </Anchor>
  );
}

export default Logo;
