// Wrapper.tsx
import { useState } from 'react';
// import Slider from 'react-slick';
// import TilePreview from './TilePreview';
import TileControls from './TileControls';
import './tile-editor.scss';
// import DirectTilePreview from './DirectTilePreview';

interface WrapperProps {
  isWithControls?: boolean;
}

function Wrapper({ isWithControls = false }: WrapperProps) {
  const [title, setTitle] = useState<string>('What’s on your MYN?');
  const [description, setDescription] = useState<string>(
    'What a ride this year has been! it’s been an epic adventure!'
  );
  // const ShowPreview = isWithControls ? TilePreview : DirectTilePreview;
  const [bgColor, setBgColor] = useState<string>('#9a3ffb');
  const [fontColor, setFontColor] = useState<string>('#ffffff');
  const [fontFamily, setFontFamily] = useState<string>(
    "'Orbitron', sans-serif"
  );
  const [fontSize, setFontSize] = useState<number>(24);
  const [selectedSticker, setSelectedSticker] = useState<string>('');
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  console.log('bgImage', bgImage);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="app-container">
      {isWithControls && (
        <div className="controls-container">
          <TileControls
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            bgColor={bgColor}
            setBgColor={setBgColor}
            fontColor={fontColor}
            setFontColor={setFontColor}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontSize={fontSize}
            setFontSize={setFontSize}
            selectedSticker={selectedSticker}
            setSelectedSticker={setSelectedSticker}
            setBgImage={setBgImage}
          />
        </div>
      )}
      {/* commented due to typescript issue */}
      {/* <div className="slider-container">
        <Slider {...settings}>
          <div>
            <ShowPreview
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              bgColor={bgColor}
              fontColor={fontColor}
              fontFamily={fontFamily}
              fontSize={fontSize}
              selectedSticker={selectedSticker}
              image={bgImage}
            />
          </div>
          <div>
            <ShowPreview
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              bgColor={bgColor}
              fontColor={fontColor}
              fontFamily={fontFamily}
              fontSize={fontSize}
              selectedSticker={selectedSticker}
              image={bgImage}
              isMobileView
            />
          </div>
        </Slider>
      </div> */}
    </div>
  );
}

export default Wrapper;
