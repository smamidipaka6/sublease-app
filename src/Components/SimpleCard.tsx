import styled from 'styled-components';
import { Card, Typography, Avatar } from '@mui/material';

interface Props {
  imageUrl: string;
  text: string;
}

const CardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  border-radius: 200px !important; /* Use !important to override other styles */
  color: #fff;
  padding: 8px;
`;


const CardImage = styled(Avatar)`
  width: 100px;
  height: 100px;
  border-radius: 50%;

`;


const CardText = styled(Typography)`

  color: #000;
  padding: 4px;
  horizontal-align: middle; /* Align the text vertically */
  vertical-align: middle; /* Vertical alignment for centering */
`;


const SimpleCard = ({ imageUrl, text }: Props) => {
  return (
    <CardWrapper>
      <CardImage alt="Avatar" src={imageUrl} />
      
        <CardText variant="body1">
          {text}
        </CardText>
    
    </CardWrapper>
  );
};


export default SimpleCard;
