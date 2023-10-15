import React from 'react';
import styled from 'styled-components';
import { Card, Typography, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  imageUrl: string;
  text: string;
  
}

const CardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  border-radius: 10px !important; /* Use !important to override other styles */
  height: 50px;
  width: 300px;
  color: #fff;
  padding: 8px;
  position: relative; /* Add relative positioning to the card */
`;

const CardImage = styled(Avatar)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CardText = styled(Typography)`
  color: #000;
  padding: 4px;
  horizontal-align: middle; /* Align the text vertically */
  vertical-align: middle; /* Vertical alignment for centering */
`;

const MessageThumbnail: React.FC<Props> = ({ imageUrl, text}) => {
  return (
    <CardWrapper>
      <CardImage alt="Avatar" src={imageUrl} />
      <CardText variant="body1">{text}</CardText>
      <IconButton
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
        }}
      >
        <DeleteIcon />
      </IconButton>
    </CardWrapper>
  );
};

export default MessageThumbnail;
