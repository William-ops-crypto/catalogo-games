import { ButtonContainer } from './styles';

const ButtonMenu = ({title, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {title}
      </ButtonContainer>
    );
  }
  
  export default ButtonMenu;