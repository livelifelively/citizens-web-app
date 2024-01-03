import { Logo } from './logo';

export default {
  title: 'Logo',
};

export const Default = () => <Logo />;

export const WithSize = () => <Logo size="h1" />;

export const DoesntLinkToHome = () => <Logo linksToHome={false} />;

export const WithColor = () => <Logo color="gray" />;
