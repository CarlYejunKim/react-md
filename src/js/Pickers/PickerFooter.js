import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Buttons/Button';

/**
 * The `PickerFooter` component is a dialog footer for the `Picker` components.
 * It renders an ok and cancel button.
 */
export default class PickerFooter extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    okLabel: PropTypes.node.isRequired,
    okPrimary: PropTypes.bool.isRequired,
    onOkClick: PropTypes.func.isRequired,
    cancelLabel: PropTypes.node.isRequired,
    cancelPrimary: PropTypes.bool.isRequired,
    onCancelClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      className,
      okLabel,
      okPrimary,
      onOkClick,
      cancelLabel,
      cancelPrimary,
      onCancelClick,
    } = this.props;

    return (
      <footer className={cn('md-dialog-footer', className)}>
        <Button
          flat
          primary={cancelPrimary}
          secondary={!cancelPrimary}
          label={cancelLabel}
          onClick={onCancelClick}
        />
        <Button
          flat
          primary={okPrimary}
          secondary={!okPrimary}
          label={okLabel}
          onClick={onOkClick}
        />
      </footer>
    );
  }
}
