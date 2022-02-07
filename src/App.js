import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import PhonebookForm from './components/phonebookForm';
import ContactsList from './components/contacts/contactsList';
import ContactsFilter from './components/contacts/contactsFilter';
import ThemeSwitch from './components/themeSwitch';
import {
  Wrapper,
  Title,
  ContactsContainer,
  ContactsTitle,
  PartsOfWord,
  PhonebookFormWrapper,
} from './App.styled';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './constantStyles/theme';

export default function App() {
  const themeStyle = useSelector(state => state.themeStyle);

  return (
    <>
      <ThemeProvider theme={theme[themeStyle]}>
        <GlobalStyle />
        <Wrapper>
          <PhonebookFormWrapper>
            <ThemeSwitch />
            <Title>
              Phone
              <PartsOfWord>book</PartsOfWord>
            </Title>
            <PhonebookForm />
          </PhonebookFormWrapper>
          <ContactsContainer>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactsFilter />
            <ContactsList />
          </ContactsContainer>
          <Toaster position="bottom-center" reverseOrder={false} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
