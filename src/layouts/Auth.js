import { AuthLayout as Container, Page } from '../components';

export default function AuthLayout({ background, children }) {
  return (
    <Page background={background}>
      <Container width="400px" height="520px">
        {children}
      </Container>
    </Page>
  );
}
