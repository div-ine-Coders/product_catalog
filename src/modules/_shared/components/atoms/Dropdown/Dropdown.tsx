import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import styles from './Dropdown.module.scss';

type Props = {
  items: string[] | number[];
  activeItem?: string | number;
  click?: () => void;
};

export const Dropdown: React.FC<Props> = ({
  items = ['Item 1', 'Item 2', 'Item 3'],
  activeItem = 'Item 2',
  click,
}) => {
  return (
    <Select.Root value={activeItem.toString()} onValueChange={click}>
      <Select.Trigger className={styles['select-trigger']}>
        <Select.Value />
        <Select.Icon className={styles['select-icon']}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles['select-content']} position="popper">
          <Select.Viewport className={styles['select-viewport']}>
            {items.map((label, idx) => (
              <Select.Item
                key={idx}
                value={label.toString()}
                className={styles['select-item']}
              >
                <Select.ItemText>{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
