import { useRef, useEffect, useCallback } from 'react';
import { Text, Transformer } from 'react-konva';
import type Konva from 'konva';

interface ResizableTextProps {
  x: number;
  y: number;
  text: string;
  isSelected: boolean;
  width: number;
  onResize: (width: number, height: number) => void;
  onClick?: (e: React.MouseEvent | unknown) => void;
  onDoubleClick?: (e: React.MouseEvent | unknown) => void;
  fontSize?: number;
}

function ResizableText({
  x,
  y,
  text,
  isSelected,
  width,
  onResize,
  onClick,
  onDoubleClick,
  fontSize = 14,
}: ResizableTextProps) {
  const textRef = useRef<Konva.Text>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (
      isSelected &&
      transformerRef.current !== null &&
      textRef.current !== null
    ) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const handleResize = useCallback(() => {
    if (textRef.current !== null) {
      const textNode = textRef.current;
      const newWidth = textNode.width() * textNode.scaleX();
      const newHeight = textNode.height() * textNode.scaleY();
      textNode.setAttrs({
        width: newWidth,
        scaleX: 1,
      });
      onResize(newWidth, newHeight);
    }
  }, [onResize]);

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={false}
      flipEnabled={false}
      enabledAnchors={['middle-left', 'middle-right']}
      boundBoxFunc={(_oldBox, newBox) => {
        const updatedBox = { ...newBox, width: Math.max(30, newBox.width) };
        return updatedBox;
      }}
    />
  ) : null;

  return (
    <>
      <Text
        x={x}
        y={y}
        ref={textRef}
        text={text}
        fill="white"
        fontFamily="sans-serif"
        fontSize={fontSize}
        perfectDrawEnabled={false}
        onTransform={handleResize}
        onClick={onClick}
        onTap={onClick}
        onDblClick={onDoubleClick}
        onDblTap={onDoubleClick}
        width={width}
        align="center"
      />
      {transformer}
    </>
  );
}

export default ResizableText;
