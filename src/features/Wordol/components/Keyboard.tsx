import { CSSProperties } from "react";

const keyboardChars: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["ENTER", "z", "x", "c", "v", "b", "n", "m", "BACKSPACE"],
];

const commonKeyStyle: CSSProperties = {
  backgroundColor: "#d3d6da",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: 12,
  justifyContent: "center",
  fontWeight: "700",
  marginLeft: 4,
  marginRight: 4,
  borderRadius: 4,
  height: 58,
};

type Props = {
  onPressKey?: (key: string) => void;
};

export default function Keyboard(props: Props) {
  const { onPressKey } = props;

  const _onPressKey = (key: string) => {
    onPressKey && onPressKey(key);
  };

  const renderKey = (key: string) => {
    switch (key) {
      case "ENTER": {
        return (
          <div
            className="w-11 md:w-16 text-xs md:text-lg"
            style={{
              ...commonKeyStyle,
            }}
            onClick={() => _onPressKey(key)}
          >
            <span className="select-none">ENTER</span>
          </div>
        );
      }
      case "BACKSPACE": {
        return (
          <div
            className="w-11 md:w-16 text-xs md:text-lg"
            style={{
              ...commonKeyStyle,
            }}
            onClick={() => _onPressKey(key)}
          >
            <span className="select-none">{`<--`}</span>
          </div>
        );
      }
      default: {
        return (
          <div
            className="w-8 md:w-11 text-xs md:text-lg"
            style={{
              ...commonKeyStyle,
            }}
            onClick={() => _onPressKey(key)}
          >
            <span className="select-none">{key.toUpperCase()}</span>
          </div>
        );
      }
    }
  };

  return (
    <div>
      {keyboardChars.map((keyboardRow, i) => {
        return (
          <div
            key={i}
            className="flex flex-row justify-center"
            style={{
              marginBottom: 8,
            }}
          >
            {keyboardRow.map((c) => renderKey(c))}
          </div>
        );
      })}
    </div>
  );
}
