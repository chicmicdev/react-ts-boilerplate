import React, { useCallback } from 'react';
import ResizableText from './ResizableText';
import EditableTextInput from './EditableTextInput';

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

interface EditableTextProps {
  x: number;
  y: number;
  isEditing: boolean;
  isTransforming: boolean;
  onToggleEdit: (
    e: React.KeyboardEvent<HTMLTextAreaElement> | React.MouseEvent | unknown
  ) => void;
  onToggleTransform: (e: React.MouseEvent | unknown) => void;
  onChange: (value: string) => void;
  onResize: (width: number, height: number) => void;
  text: string;
  width: number;
  height: number;
  fontSize: number;
  max: number;
}

function EditableText({
  x,
  y,
  isEditing,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onChange,
  onResize,
  text,
  width,
  height,
  fontSize,
  max,
}: EditableTextProps) {
  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );

  const handleEscapeKeys = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (
        (e.keyCode === RETURN_KEY && !e.shiftKey) ||
        e.keyCode === ESCAPE_KEY
      ) {
        onToggleEdit(e);
      }
    },
    [onToggleEdit]
  );

  if (isEditing) {
    return (
      <EditableTextInput
        x={x}
        y={y}
        width={width}
        height={height}
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleEscapeKeys}
        fontSize={fontSize}
        max={max}
      />
    );
  }
  return (
    <ResizableText
      x={x}
      y={y}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onDoubleClick={onToggleEdit}
      onResize={onResize}
      text={text}
      width={width}
      fontSize={fontSize}
    />
  );
}

export default EditableText;
