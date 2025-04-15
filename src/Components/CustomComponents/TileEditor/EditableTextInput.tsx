import React from 'react';
import { Html } from 'react-konva-utils';

function getStyle(width: number, height: number, fontSize: number) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  const baseStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    border: 'none',
    padding: '0px',
    margin: '0px',
    background: 'none',
    outline: 'none',
    resize: 'none',
    color: 'black',
    fontSize,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
  if (isFirefox) {
    return baseStyle;
  }
  return {
    ...baseStyle,
    margintop: '-4px',
  } as React.CSSProperties;
}

interface EditableTextInputProps {
  x: number;
  y: number;
  width: number;
  height: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  fontSize: number;
  max: number;
}

function EditableTextInput({
  x,
  y,
  width,
  height,
  value,
  onChange,
  onKeyDown,
  fontSize,
  max,
}: EditableTextInputProps) {
  const style = getStyle(width, height, fontSize);
  return (
    <Html groupProps={{ x, y }} divProps={{ style: { opacity: 1 } }}>
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
        maxLength={max}
      />
    </Html>
  );
}

export default EditableTextInput;
