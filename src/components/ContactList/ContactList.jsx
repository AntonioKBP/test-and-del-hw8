import { List, ListItem, ListItemBtn } from './ContactList.styled';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const ContactList = ({ users, onDeleteContact }) => {
  return (
    <List>
      {users.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            {name}: {phone}
            <ListItemBtn type="button" onClick={() => onDeleteContact(id)}>
              <RiDeleteBin2Line />
            </ListItemBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
