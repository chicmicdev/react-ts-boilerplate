// DirectTilePreview.tsx
import { Stage, Layer, Line, Image as KonvaImage, Rect } from 'react-konva';
import Konva from 'konva';
import './tile-editor.scss';
import { useState } from 'react';
import StickyNote from './StickyNote';

interface DirectTilePreviewProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  bgColor?: string;
  // fontColor?: string;
  // fontFamily?: string;
  // fontSize?: number | string;
  // selectedSticker?: any;
  // stickerText?: string;
  width?: number;
  height?: number;
  image?: HTMLImageElement | null;
  isMobileView?: boolean;
}

function DirectTilePreview({
  title,
  setTitle,
  description,
  setDescription,
  bgColor,
  // fontColor,
  // fontFamily,
  // fontSize,
  // selectedSticker,
  // stickerText,
  width = 430,
  height = 500,
  image,
  isMobileView = false,
}: DirectTilePreviewProps) {
  const centerX = width / 2;
  const topY = 0.05 * height;
  const midY1 = 0.25 * height;
  const midY2 = 0.7 * height;
  const bottomY = 0.95 * height;
  const sidePadding = 0.1 * width;
  const [selected, setSelected] = useState(false);
  const [descripSelected, setDescripSelected] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);
  const [descriptionHeight, setDescriptionHeight] = useState(100);
  const [headerWidth, setHeaderWidth] = useState(300);
  const [descriptionWidth, setDescriptionWidtht] = useState(300);

  const shapePoints: number[] = [
    centerX,
    topY,
    width - sidePadding - 20,
    midY1,
    width - sidePadding + 30,
    midY2,
    centerX,
    bottomY,
    sidePadding - 30,
    midY2,
    sidePadding + 20,
    midY1,
  ];

  const clipFunc = (ctx: Konva.Context) => {
    // Konva's ctx is already set up for drawing operations.
    ctx.beginPath();
    ctx.moveTo(shapePoints[0], shapePoints[1]);
    for (let i = 2; i < shapePoints.length; i += 2) {
      ctx.lineTo(shapePoints[i], shapePoints[i + 1]);
    }
    ctx.closePath();
    ctx.clip();
  };

  return (
    <div className="tile-preview-wrapper">
      <Stage
        width={isMobileView ? 300 : width}
        height={isMobileView ? 500 : height}
      >
        <Layer>
          {isMobileView ? (
            <Rect
              x={0}
              y={0}
              width={300}
              height={500}
              fill={bgColor}
              stroke="#fff"
              strokeWidth={2}
              shadowColor="black"
              shadowBlur={10}
              shadowOffset={{ x: 0, y: 2 }}
              shadowOpacity={0.3}
            />
          ) : (
            <Line
              points={shapePoints}
              closed
              fill={bgColor}
              stroke="#fff"
              strokeWidth={2}
              shadowColor="black"
              shadowBlur={10}
              shadowOffset={{ x: 0, y: 2 }}
              shadowOpacity={0.3}
            />
          )}
        </Layer>

        <Layer clipFunc={isMobileView ? undefined : clipFunc}>
          {image && (
            <KonvaImage
              image={image}
              width={isMobileView ? 300 : width}
              height={isMobileView ? 500 : height}
              x={0}
              y={0}
              listening={false}
            />
          )}
          <StickyNote
            text={title}
            x={isMobileView ? -20 : width * 0.11}
            y={isMobileView ? height * 0.001 : headerHeight}
            width={headerWidth}
            fontSize={16}
            onTextChange={(value: string) => setTitle(value)}
            height={headerHeight}
            selected={selected}
            onTextResize={(newWidth: number, newHeight: number) => {
              setHeaderWidth(newWidth);
              setHeaderHeight(newHeight);
            }}
            onClick={() => setSelected(!selected)}
            onTextClick={(newSelected: boolean) => {
              setSelected(newSelected);
            }}
            max={150}
          />
          <StickyNote
            text={description}
            x={isMobileView ? 0 : width * 0.142}
            y={isMobileView ? bottomY - 90 : bottomY - 170}
            onTextChange={(value: string) => setDescription(value)}
            width={descriptionWidth * 0.9}
            fontSize={14}
            height={descriptionHeight}
            selected={descripSelected}
            onTextResize={(newWidth: number, newHeight: number) => {
              setDescriptionHeight(newHeight);
              setDescriptionWidtht(newWidth);
            }}
            onClick={() => setDescripSelected(!descripSelected)}
            onTextClick={(newSelected: boolean) => {
              setDescripSelected(newSelected);
            }}
            max={168}
          />
        </Layer>
      </Stage>
    </div>
  );
}

export default DirectTilePreview;
