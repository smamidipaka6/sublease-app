import { List, ListItem } from '@mui/material';
import MessageThumbnail from './MessageThumbnail';

const ChatInboxBoxLeftMessages = () => {
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      avatar: 'https://example.com/avatar.png',
      message: 'Hi there!',
      time: '2023-10-14 12:08:06',
    },
    {
      id: 2,
      sender: 'Jane Doe',
      avatar: 'https://example.com/avatar.png',
      message: 'How are you doing?',
      time: '2023-10-14 12:08:10',
    },
    {
      id: 3,
      sender: 'New User',
      avatar: 'https://example.com/new-avatar.png',
      message: 'Another chat message',
      time: '2023-10-14 12:30:00',
    },
    {
      id: 4,
      sender: 'Alice',
      avatar: 'https://example.com/alice-avatar.png',
      message: 'Hello, everyone!',
      time: '2023-10-14 13:15:21',
    },
    {
      id: 5,
      sender: 'Bob',
      avatar: 'https://example.com/bob-avatar.png',
      message: 'Good morning!',
      time: '2023-10-14 13:20:42',
    },
    {
      id: 6,
      sender: 'Eve',
      avatar: 'https://example.com/eve-avatar.png',
      message: 'Any plans for the weekend?',
      time: '2023-10-14 14:05:17',
    },
    {
      id: 7,
      sender: 'Charlie',
      avatar: 'https://example.com/charlie-avatar.png',
      message: 'Just wanted to say hi!',
      time: '2023-10-14 14:10:30',
    },
    {
      id: 8,
      sender: 'David',
      avatar: 'https://example.com/david-avatar.png',
      message: 'Hows your day going?',
      time: '2023-10-14 15:30:55',
    },
    {
      id: 9,
      sender: 'Grace',
      avatar: 'https://example.com/grace-avatar.png',
      message: 'I love your new profile picture!',
      time: '2023-10-14 16:45:11',
    },
    {
      id: 10,
      sender: 'Olivia',
      avatar: 'https://example.com/olivia-avatar.png',
      message: 'Thank you! 😊',
      time: '2023-10-14 17:55:36',
    },
  ];
  

  return (
    <List>
      {messages.map((message) => (
        <ListItem
          key={message.id}
          sx={{
            marginBottom: 0, // Remove margin to make thumbnails touch
            padding: .25, // Remove padding to make thumbnails touch  
          }}
        >
          <MessageThumbnail imageUrl={message.avatar} text={message.message} />
        </ListItem>
      ))}
    </List>
  );
}

export default ChatInboxBoxLeftMessages;
