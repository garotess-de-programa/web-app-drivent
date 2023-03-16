import { UnavailablePage } from './Unavailable';
import * as S from '../Typography';

export function Page(props) {
  return (
    <>
      <S.StyledTypography variant="h4">{props.title}</S.StyledTypography>
      {props.error ? (
        <UnavailablePage>
          <S.StyledTypography variant="h6" {...props} />
        </UnavailablePage>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
