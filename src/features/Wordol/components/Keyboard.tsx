import { CSSProperties, useCallback, useEffect } from "react";

const keyboardChars: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
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
  disableKeyboard?: boolean;
};

export default function Keyboard(props: Props) {
  const { onPressKey, disableKeyboard } = props;

  const _onPressKey = (key: string) => {
    if (!disableKeyboard) onPressKey && onPressKey(key);
  };

  const onKeyUpHandler = useCallback(
    (e: KeyboardEvent) => {
      if (
        !disableKeyboard &&
        ((e.keyCode >= 65 && e.keyCode <= 90) ||
          e.key === "Backspace" ||
          e.key === "Enter")
      ) {
        onPressKey && onPressKey(e.key.toLowerCase());
      }
    },
    [onPressKey, disableKeyboard]
  );

  useEffect(() => {
    window.addEventListener("keyup", onKeyUpHandler);

    return () => window.removeEventListener("keyup", onKeyUpHandler);
  }, [onKeyUpHandler]);

  const renderKey = (key: string) => {
    switch (key) {
      case "enter": {
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
      case "backspace": {
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
            className="w-7 md:w-11 text-xs md:text-lg"
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
