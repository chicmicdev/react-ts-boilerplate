const colorOptions: string[] = [
  '#ffffff',
  '#000000',
  '#ff3b3b',
  '#9a3ffb',
  '#00ffcc',
];
const stickerOptions: (string | null)[] = [null, '⭐', '🔥', '💯', '🎉', '🚀'];

type ColorSelectorProps = {
  label: string;
  options: string[];
  selectedColor: string;
  onChange: (color: string) => void;
};

function ColorSelector({
  label,
  options,
  selectedColor,
  onChange,
}: ColorSelectorProps) {
  return (
    <div>
      <label>{label}</label>
      <div
        role="group"
        aria-labelledby="color-label"
        style={{ display: 'flex', gap: '8px', marginTop: '4px' }}
      >
        {options.map((color) => (
          <div
            key={color}
            role="button"
            tabIndex={0}
            aria-label={`Select color ${color}`}
            style={{
              width: 24,
              height: 24,
              backgroundColor: color,
              border:
                selectedColor === color ? '2px solid #fff' : '1px solid #444',
              cursor: 'pointer',
            }}
            onClick={() => onChange(color)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onChange(color);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

type TileControlsProps = {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  bgColor: string;
  setBgColor: (val: string) => void;
  fontColor: string;
  setFontColor: (val: string) => void;
  fontFamily: string;
  setFontFamily: (val: string) => void;
  fontSize: number;
  setFontSize: (val: number) => void;
  selectedSticker: string | null;
  setSelectedSticker: (val: string) => void;
  setBgImage: (image: HTMLImageElement) => void;
};

function TileControls({
  title,
  setTitle,
  description,
  setDescription,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  selectedSticker,
  setSelectedSticker,
  setBgImage,
}: TileControlsProps) {
  return (
    <div className="tile-controls">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        maxLength={55}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="custom-selection"
        maxLength={83}
      />

      <ColorSelector
        label="Background Color"
        options={colorOptions}
        selectedColor={bgColor}
        onChange={setBgColor}
      />

      <ColorSelector
        label="Font Color"
        options={colorOptions}
        selectedColor={fontColor}
        onChange={setFontColor}
      />

      <label htmlFor="font-family-select">Font Style</label>
      <select
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        id="font-family-select"
      >
        <option value="'Orbitron', sans-serif">Orbitron</option>
        <option value="'Arial', sans-serif">Arial</option>
        <option value="'Courier New', monospace">Courier New</option>
      </select>

      <label>
        Font Size
        <select value={fontSize} onChange={(e) => setFontSize(+e.target.value)}>
          <option value={18}>Small</option>
          <option value={24}>Medium</option>
          <option value={32}>Large</option>
        </select>
      </label>

      <label>
        Sticker
        <select
          value={selectedSticker ?? ''}
          onChange={(e) => {
            console.log('selectedSticker', selectedSticker);
            setSelectedSticker(e.target.value);
            if (selectedSticker) {
              setTitle(e.target.value);
            }
          }}
        >
          {stickerOptions.map((emoji) => (
            <option key={emoji ?? 'none'} value={emoji ?? ''}>
              {emoji}
            </option>
          ))}
        </select>
      </label>

      <label>
        Upload
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const objectUrl = URL.createObjectURL(file);
            const img = new window.Image();
            img.src = objectUrl;
            img.onload = () => {
              setBgImage(img);
              URL.revokeObjectURL(objectUrl); // Clean up
            };
          }}
        />
      </label>
    </div>
  );
}

export default TileControls;
