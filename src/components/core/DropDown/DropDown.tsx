import React, { useState } from 'react';
import { Btn, Txt } from 'components';
import { useClickOutside } from 'hooks';
import { ComplexObject } from 'types';
import { StyledDropDown } from './DropDownStyle';

interface Props {
  items: ComplexObject[];
  selectedItem: object | any;
  setSelectedItem: Function;
  width: string;
  titleDefaultText: string;
  id: string;
}

export default function DropDown(props: Props): JSX.Element {
  const { items, selectedItem, setSelectedItem, width, id, titleDefaultText } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (item) => {
    if (selectedItem.key !== item.key) setSelectedItem(item);
    setIsOpen(false);
  };

  const handleDefaultValue = () => {
    // if (selectedItem) return selectedItem.value;
    // if (items?.length) return items[0].value;
    // //else if (defaultValue) return defaultValue.value;
    // else return 'global.select';
  };

  useClickOutside({
    targetID: id,
    isRunning: isOpen,
    cb: setIsOpen,
  });

  return (
    <>
      <Btn
        type="info-transparent"
        className="border-0 w-100 justify-content-center py-2 d-flex align-items-center"
        onClick={() => setIsOpen(true)}
      >
        {/*<Icon name={`arrow-${isOpen ? 'up' : 'down'}`} color="textPrimary" size="18" />*/}
        <Txt size="m">{titleDefaultText}</Txt>
      </Btn>
      <StyledDropDown width={width} isOpen={isOpen} className="position-absolute overflow-auto">
        {items.map((item) => (
          <Btn
            key={item.key}
            type="info-transparent"
            className="border-0 w-100 justify-content-start d-flex px-3 py-2"
            onClick={() => handleClick(item)}
          >
            <Txt size="s" color="PRIMARY_TEXT" className="text-nowrap">
              {item.value}
            </Txt>
          </Btn>
        ))}
      </StyledDropDown>
    </>
  );
}
