import React from 'react';
import { AlertDialog } from 'radix-ui';
import cn from 'classnames';
import styles from './ShopingCart.module.scss';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';

interface Props {
  click?: () => void; //function to clear the cart
}

export const ShopingCartDialog: React.FC<Props> = ({ click }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        className={cn(styles.alertDialogTrigger, 'buttonText')}
      >
        <DefaultButton>Checkout</DefaultButton>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.alertDialogOverlay} />
        <AlertDialog.Content className={styles.alertDialogContent}>
          <AlertDialog.Title className={styles.alertDialogTitle}>
            <h3>Confirm checkout</h3>
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.alertDialogDescription}>
            Checkout is not implemented yet. Do you wan&apos;t to clear the
            Cart?
          </AlertDialog.Description>
          <div className={styles.alertDialogControl}>
            <AlertDialog.Cancel
              className={cn(
                styles.alertDialogControlButtonCancel,
                'buttonText',
              )}
            >
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action
              className={cn(
                styles.alertDialogControlButtonSubmit,
                'buttonText',
              )}
              onClick={click}
            >
              Clear
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
