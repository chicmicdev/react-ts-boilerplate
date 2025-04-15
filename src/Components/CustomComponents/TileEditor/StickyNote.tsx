import { useState, useEffect, useCallback } from 'react';
import { Group, Rect } from 'react-konva';
import EditableText from './EditableText';

interface StickyNoteProps {
  color?: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onClick: () => void;
  onTextResize: (newWidth: number, newHeight: number) => void;
  onTextChange: (text: string) => void;
  selected: boolean;
  onTextClick: (editing: boolean) => void;
  fontSize: number;
  max: number;
}

function StickyNote({
  color,
  text,
  x,
  y,
  width,
  height,
  onClick,
  onTextResize,
  onTextChange,
  selected,
  onTextClick,
  fontSize,
  max,
}: StickyNoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  useEffect(() => {
    if (!selected && isEditing) {
      setIsEditing(false);
    } else if (!selected && isTransforming) {
      setIsTransforming(false);
    }
  }, [selected, isEditing, isTransforming]);

  const toggleEdit = useCallback(() => {
    setIsEditing((prev) => {
      onTextClick(!prev);
      return !prev;
    });
  }, [onTextClick]);

  const toggleTransforming = useCallback(() => {
    setIsTransforming((prev) => {
      onTextClick(!prev);
      return !prev;
    });
  }, [onTextClick]);

  return (
    <Group x={x} y={y}>
      <Rect
        x={20}
        y={20}
        width={width}
        height={height + 40}
        fill={color}
        shadowColor="black"
        shadowOffsetY={10}
        shadowOffsetX={0}
        shadowBlur={30}
        shadowOpacity={0.6}
        perfectDrawEnabled={false}
      />
      <Rect
        x={0}
        y={0}
        width={width + 40}
        height={height + 60}
        fill={color}
        perfectDrawEnabled={false}
        onClick={onClick}
        onTap={onClick}
      />
      <EditableText
        x={20}
        y={40}
        text={text}
        width={width}
        height={height}
        onResize={onTextResize}
        isEditing={isEditing}
        isTransforming={isTransforming}
        onToggleEdit={toggleEdit}
        onToggleTransform={toggleTransforming}
        onChange={onTextChange}
        fontSize={fontSize}
        max={max}
      />
    </Group>
  );
}

export default StickyNote;
