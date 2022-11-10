import { Snackbar } from "@mui/material";
import { useCallback, useState } from "react";

import { Modal } from "../../components";
import { Keyboard, Navbar, Output } from "../../features/Wordol/components";
import {
  generateRandomWord,
  isAnEnglishWord,
} from "../../features/Wordol/utils/common";

const CORRECT_WORD = generateRandomWord();

export default function MainPage() {
  const [currentOutputRowIndex, setCurrentOutputRowIndex] = useState(0);
  const [rowsValue, setRowsValue] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [rowsCorrectIndexes, setRowsCorrectIndexes] = useState<number[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const [rowsPresentPositionIndexes, setRowsPresentPositionIndexes] = useState<
    number[][]
  >([[], [], [], [], [], []]);
  const [rowsDoneFlag, setRowsDoneFlag] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);

  const [isGameOver, setGameOver] = useState(false); // Flag to disable input

  const setRowValue = useCallback(
    (newValue: string) => {
      setRowsValue((prevRowsValue) => {
        return prevRowsValue.map((prevRowValue, i) => {
          if (i === currentOutputRowIndex) {
            return newValue;
          } else {
            return prevRowValue;
          }
        });
      });
    },
    [currentOutputRowIndex]
  );

  const onPressKey = useCallback(
    (key: string) => {
      let currentValue = rowsValue[currentOutputRowIndex];
      let _correctWord = CORRECT_WORD;

      if (key === "enter") {
        if (currentOutputRowIndex < 6) {
          if (currentValue.length < 5) {
            setSnackbarMessage("Not enough letter");
          } else if (!isAnEnglishWord(currentValue)) {
            setSnackbarMessage("Not in word list");
          } else if (currentValue.length === 5) {
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

            const wordMatched = currentValue.toLowerCase() === CORRECT_WORD;
            // Win
            if (wordMatched) {
              setShowWinModal(true);
              setGameOver(true);
            }
            // Lose
            else if (currentOutputRowIndex === 5 && !wordMatched) {
              setShowLoseModal(true);
              setGameOver(true);
            }
          }
        }
      } else if (key === "backspace") {
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
    },
    [
      currentOutputRowIndex,
      rowsCorrectIndexes,
      rowsDoneFlag,
      rowsPresentPositionIndexes,
      rowsValue,
      setRowValue,
    ]
  );

  const onClickNewGame = () => {
    window.location.reload();
  };

  const onDoubleClickLogo = () => {
    setSnackbarMessage(CORRECT_WORD);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar onDoubleClickLogo={onDoubleClickLogo} />

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
          <Keyboard onPressKey={onPressKey} disableKeyboard={isGameOver} />
        </div>
      </div>

      <Snackbar
        open={!!snackbarMessage}
        onClose={() => {
          setSnackbarMessage("");
        }}
        message={snackbarMessage}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        autoHideDuration={1000}
      />

      <Modal
        title="Hooray!"
        show={showWinModal}
        onCloseModal={() => {
          setShowWinModal(false);
        }}
        renderContent={() => (
          <div>
            <p>You guessed it in {currentOutputRowIndex} attempt(s)!</p>
            <p>
              The word was: <b>{CORRECT_WORD}</b>
            </p>
          </div>
        )}
        actionButtons={[
          {
            label: "New Game",
            onClick: onClickNewGame,
          },
        ]}
      />

      <Modal
        title="Oh no!"
        show={showLoseModal}
        onCloseModal={() => {
          setShowLoseModal(false);
        }}
        renderContent={() => (
          <div>
            <p>{`You failed to guessed the word :(`}</p>
            <p>
              The word was: <b>{CORRECT_WORD}</b>
            </p>
          </div>
        )}
        actionButtons={[
          {
            label: "New Game",
            onClick: onClickNewGame,
          },
        ]}
      />
    </div>
  );
}
