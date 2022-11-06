import { useState } from "react";
import { Keyboard, Navbar, Output } from "../../features/Wordol/components";

const MOCK_CORRECT_WORD = "stale";

export default function MainPage() {
  const [currentOutputRowIndex, setCurrentOutputRowIndex] = useState(0);
  const [rowsValue, setRowsValue] = useState<string[]>(["", "", "", "", ""]);
  const [rowsCorrectIndexes, setRowsCorrectIndexes] = useState<number[][]>([
    [],
    [],
    [],
    [],
    [],
  ]);
  const [rowsPresentPositionIndexes, setRowsPresentPositionIndexes] = useState<
    number[][]
  >([[], [], [], [], []]);
  const [rowsDoneFlag, setRowsDoneFlag] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const setRowValue = (newValue: string) => {
    setRowsValue((prevRowsValue) => {
      return prevRowsValue.map((prevRowValue, i) => {
        if (i === currentOutputRowIndex) {
          return newValue;
        } else {
          return prevRowValue;
        }
      });
    });
  };

  const onPressKey = (key: string) => {
    let currentValue = rowsValue[currentOutputRowIndex];
    let _correctWord = MOCK_CORRECT_WORD;

    if (key === "ENTER") {
      if (currentValue.length === 5) {
        const _rowsCorrectIndexes = [...rowsCorrectIndexes];
        const _rowsPresentPositionIndexes = [...rowsPresentPositionIndexes];
        const _rowsDoneFlag = [...rowsDoneFlag];

        currentValue.split("").forEach((c, i) => {
          if (c === _correctWord[i]) {
            _rowsCorrectIndexes[currentOutputRowIndex].push(i);

            // Omit the found char so it won't appear on next checking
            let splittedCorrectWord = _correctWord.split("");
            let foundIndex = splittedCorrectWord.findIndex((e) => e === c);
            _correctWord = _correctWord
              .split("")
              .map((c, j) => {
                if (j === foundIndex) {
                  return "_";
                } else {
                  return c;
                }
              })
              .join("");
          } else if (_correctWord.includes(c)) {
            _rowsPresentPositionIndexes[currentOutputRowIndex].push(i);

            // Omit the found char so it won't appear on next checking
            let splittedCorrectWord = _correctWord.split("");
            let foundIndex = splittedCorrectWord.findIndex((e) => e === c);
            _correctWord = _correctWord
              .split("")
              .map((c, j) => {
                if (j === foundIndex) {
                  return "_";
                } else {
                  return c;
                }
              })
              .join("");
          }
        });

        _rowsDoneFlag[currentOutputRowIndex] = true;

        setRowsCorrectIndexes(_rowsCorrectIndexes);
        setRowsPresentPositionIndexes(_rowsPresentPositionIndexes);
        setRowsDoneFlag(_rowsDoneFlag);
        setCurrentOutputRowIndex((prevRowIndex) => prevRowIndex + 1);
      }
    } else if (key === "BACKSPACE") {
      if (currentValue.length > 0) {
        const newValue = currentValue.slice(0, -1);

        setRowValue(newValue);
      }
    } else {
      if (currentValue.length < 5) {
        currentValue += key;

        setRowValue(currentValue);
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />

      <div
        className="flex flex-1 flex-col"
        style={{
          maxWidth: 460,
        }}
      >
        <div className="flex flex-2 items-center justify-center">
          <Output
            rowsValue={rowsValue}
            presentPositionIndexes={rowsPresentPositionIndexes}
            correctIndexes={rowsCorrectIndexes}
            doneFlags={rowsDoneFlag}
          />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Keyboard onPressKey={onPressKey} />
        </div>
      </div>
    </div>
  );
}
