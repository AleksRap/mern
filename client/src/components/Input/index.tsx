import React, {
  FC, ChangeEvent, FocusEvent,
} from 'react';
import cx from 'classnames';
import { Icon, Text } from '@components';
import styles from './styles.module.scss';

type Props = {
  id?: string,
  type?: 'text' | 'number' | 'password',
  label?: string,
  positionLabel?: 'top' | 'left'
  name: string,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameInput?: string,
  classNameInputWrap?: string,
  classNameLabel?: string,
  classNameLabelWrap?: string,
  error?: boolean | string,
  disabled?: boolean,
  isCorrect?: boolean | '',
  autoComplete?: 'off' | 'on',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  required?: boolean,
};

export const Input: FC<Props> = ({
  id,
  type = 'text',
  label,
  positionLabel = 'left',
  name,
  value,
  placeholder,
  className,
  classNameInput,
  classNameInputWrap,
  classNameLabel,
  classNameLabelWrap,
  error,
  disabled = false,
  isCorrect = false,
  autoComplete = 'off',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  required,
}) => (
  <div className={cx(styles.wrap, className)}>
    <label
      htmlFor={id}
      className={cx(
        styles.label,
        styles[positionLabel],
        classNameLabelWrap,
      )}
    >
      {label && (
        <Text
          tag="span"
          color="primary"
          className={cx(
            styles.labelText,
            styles[positionLabel],
            classNameLabel,
          )}
        >
          {label}
        </Text>
      )}

      <div
        className={cx(
          styles.inputWrap,
          required && styles.required,
          classNameInputWrap,
        )}
      >
        <input
          id={id || name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          className={cx(
            styles.input,
            error && styles.error,
            (error || isCorrect) && styles.bigRightPadding,
            classNameInput,
          )}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {error && (
          <Icon
            value="cross"
            className={cx(styles.icon, styles.iconError)}
          />
        )}

        {isCorrect && !error && (
          <Icon
            value="checkmark"
            className={cx(styles.icon, styles.iconCorrect)}
          />
        )}
      </div>
    </label>

    {error && typeof error === 'string' && (
      <span className={styles.textError}>
        {error}
      </span>
    )}
  </div>
);
