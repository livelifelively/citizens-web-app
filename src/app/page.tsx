import { Welcome } from '@/src/components/welcome/welcome';
import { ColorSchemeToggle } from '@/src/components/color-scheme-toggle/color-scheme-toggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
