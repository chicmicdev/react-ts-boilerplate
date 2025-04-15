// TilePreview.tsx
import {
  Stage,
  Layer,
  Text,
  Line,
  Image as KonvaImage,
  Rect,
} from 'react-konva';
import './tile-editor.scss';
import Konva from 'konva';

interface TilePreviewProps {
  title: string;
  description: string;
  bgColor: string;
  fontColor: string;
  fontFamily: string;
  fontSize?: number;
  width?: number;
  height?: number;
  image?: HTMLImageElement | null;
  isMobileView?: boolean;
}

function TilePreview({
  title,
  description,
  bgColor,
  fontColor,
  fontFamily,
  fontSize,
  width = 430,
  height = 500,
  image,
  isMobileView = false,
}: TilePreviewProps) {
  const centerX = width / 2;
  const topY = 0.05 * height;
  const midY1 = 0.25 * height;
  const midY2 = 0.7 * height;
  const bottomY = 0.95 * height;
  const sidePadding = 0.1 * width;

  const shapePoints = [
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
        {/* Background shape */}
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

        {/* Content layer */}
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
          <Text
            text={title}
            x={isMobileView ? sidePadding - 20 : sidePadding + 45}
            y={isMobileView ? midY1 - 100 : midY1 - 15}
            width={width * 0.6}
            fontSize={fontSize}
            fontFamily={fontFamily}
            fill={fontColor}
            align="center"
          />
          <Text
            text={description}
            x={isMobileView ? sidePadding - 20 : sidePadding + 44}
            y={isMobileView ? bottomY - 70 : bottomY - 120}
            width={width * 0.6}
            fontSize={16}
            fontFamily={fontFamily}
            fill={fontColor}
            align="center"
          />
          {/* 
          Uncomment if you want to use sticker text
          <Group x={width / 2 - 75} y={midY2 - 40} draggable>
            <Text
              text={selectedSticker}
              fontSize={42}
              fill={fontColor}
              width={150}
              align="center"
            />
            <Text
              text={stickerText}
              y={50}
              fontSize={18}
              fill={fontColor}
              width={150}
              align="center"
            />
          </Group>
          */}
        </Layer>
      </Stage>
    </div>
  );
}

export default TilePreview;
