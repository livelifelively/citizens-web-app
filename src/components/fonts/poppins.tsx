import { Poppins } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
});
