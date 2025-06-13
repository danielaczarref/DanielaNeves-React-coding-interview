import { Box, Typography, Avatar, Input } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';
import { useState } from 'react';
import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [isClickedName, setIsClickedName] = useState(false);
  const [isClickedEmail, setIsClickedEmail] = useState(false);

  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Typography onClick={() => setIsClickedName(!isClickedName)} textAlign="center" mt={2}>
          {isClickedName ? (
            <Input />) : (<Typography>{name}</Typography>)
          }
          <Typography onClick={() => setIsClickedEmail(!isClickedEmail)} variant="caption" color="text.secondary">
            {isClickedEmail ? (<Input />) : (<Typography>{email}</Typography> )}
          </Typography>
        </Typography>
      </Box>
    </Card>
  );
};
