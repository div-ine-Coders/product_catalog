import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import cn from 'classnames';
import styles from './Dropdown.module.scss';

interface Props {
  items: string[] | number[];
  activeItem?: string | number;
  isBig?: boolean;
  click?: () => void;
}

export const Dropdown: React.FC<Props> = ({
  items = ['Item 1', 'Item 2', 'Item 3'],
  activeItem = 'Item 2',
  isBig = true,
  click,
}) => {
  return (
    <Select.Root value={activeItem.toString()} onValueChange={click}>
      <Select.Trigger
        className={cn('buttonText', styles.selectTrigger, {
          [styles.selectTriggerBig]: isBig,
        })}
      >
        <Select.Value />
        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.selectContent} position="popper">
          <Select.Viewport className={styles.selectViewport}>
            {items.map((label, idx) => (
              <Select.Item
                key={idx}
                value={label.toString()}
                className={cn(styles.selectItem, {
                  [styles.selectItemBig]: isBig,
                })}
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
