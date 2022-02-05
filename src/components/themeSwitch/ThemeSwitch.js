import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import Switch from 'react-switch';
import { Text, Wrapper, Label } from './ThemeSwitch.styled';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeSwitch() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const themeStyle = useSelector(state => state.contacts.themeStyle);

  const handleChange = checked => {
    checked
      ? dispatch(actions.themeChange('dark'))
      : dispatch(actions.themeChange('light'));
  };

  useEffect(() => {
    themeStyle === 'dark' ? setChecked(true) : setChecked(false);
  }, [themeStyle]);

  return (
    <Label>
      <Switch
        checked={checked}
        onChange={handleChange}
        height={30}
        width={65}
        offColor="#c05805"
        onColor="#cdbea7"
        uncheckedIcon={<Text>DAY MODE</Text>}
        checkedIcon={<Text>NIGHT MODE</Text>}
        uncheckedHandleIcon={
          <Wrapper>
            <FaSun />
          </Wrapper>
        }
        checkedHandleIcon={
          <Wrapper>
            <FaMoon />
          </Wrapper>
        }
      />
    </Label>
  );
}
