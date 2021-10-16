enum ColorButton {
  primary,
  secondary,
  error,
  transparent
}

enum SizeButton {
  small,
  normal,
  big,
}

export type ButtonColor = keyof typeof ColorButton;
export type ButtonSize = keyof typeof SizeButton;
