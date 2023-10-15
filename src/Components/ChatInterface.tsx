import { Container, Grid, Box } from '@mui/material';
import ChatInboxBoxLeft from './ChatInboxBoxLeftMessages';
import ChatInboxRight from './ChatInputBoxRight';

const ChatInterface = () => {
  return (
    <Box
      sx={{
        height: '100vh', // Set the height to 100% of viewport height
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <Container>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6} sx={{ height: '100%' }}>
              <Box
                sx={{
                  height: '100vh',
                  width: '85%', // Set the width to 100% to fill the container
                  backgroundColor: '#ffffff',
                  padding: '1px',
                  display: 'flex',
                  justifyContent: 'center', // Center horizontally
                  //alignItems: 'center',    // Center vertically
                }}
              >
                <ChatInboxBoxLeft />
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ height: '100%' }}>
              <Box
                sx={{
                  height: '100%',
                  backgroundColor: '#ffffff',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <ChatInboxRight />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ChatInterface;
