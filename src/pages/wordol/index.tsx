import { Snackbar } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";

import { WelcomeImageWordol } from "../../../assets/wordol";
import { Helmet, Modal } from "../../components";
import { Keyboard, Navbar, Output } from "../../features/Wordol/components";
import { COLORS } from "../../features/Wordol/constants/color";
import { STORAGE_KEYS } from "../../features/Wordol/constants/storage";
import {
  generateRandomWord,
  isAnEnglishWord,
} from "../../features/Wordol/utils/common";
import { getFromStorage, setToStorage } from "../../utils/localStorage";
import {
  HoorayAnimationData,
  OhNoAnimationData,
} from "../../features/Wordol/lottie-files";

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
  const [presentLetters, setPresentLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [absentLetters, setAbsentLetters] = useState<string[]>([]);

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [showWelcomeHintModal, setShowWelcomeHintModal] = useState(false);

  const [isGameOver, setGameOver] = useState(false); // Flag to disable input
  const [isDevFeatureUsed, setDevFeatureUsed] = useState(false); // Flag to track double click on logo

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

  useEffect(() => {
    function checkWelcomeHint() {
      const shouldShowHintModal = !!!getFromStorage(
        STORAGE_KEYS.disableWelcomeHint
      );

      if (shouldShowHintModal) {
        setShowWelcomeHintModal(true);

        setToStorage(STORAGE_KEYS.disableWelcomeHint, true);
      }
    }

    checkWelcomeHint();
  }, []);

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
            const _presentLetters = [...presentLetters];
            const _correctLetters = [...correctLetters];
            const _absentLetters = [...absentLetters];

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

                if (!correctLetters.includes(c)) {
                  _correctLetters.push(c);
                }
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

                if (!presentLetters.includes(c)) {
                  _presentLetters.push(c);
                }
              } else {
                if (!absentLetters.includes(c)) {
                  _absentLetters.push(c);
                }
              }
            });

            _rowsDoneFlag[currentOutputRowIndex] = true;

            setRowsCorrectIndexes(_rowsCorrectIndexes);
            setRowsPresentPositionIndexes(_rowsPresentPositionIndexes);
            setRowsDoneFlag(_rowsDoneFlag);
            setCurrentOutputRowIndex((prevRowIndex) => prevRowIndex + 1);
            setCorrectLetters(_correctLetters);
            setAbsentLetters(_absentLetters);
            setPresentLetters(_presentLetters);

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
      absentLetters,
      correctLetters,
      currentOutputRowIndex,
      presentLetters,
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
    setDevFeatureUsed(true);
    setSnackbarMessage(CORRECT_WORD);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-white">
      <Helmet preset="wordol" />

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
          <Keyboard
            absentLetters={absentLetters}
            correctLetters={correctLetters}
            presentLetters={presentLetters}
            onPressKey={onPressKey}
            disableKeyboard={isGameOver}
          />
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
            <div className="flex justify-center mb-6">
              <Lottie
                loop
                animationData={HoorayAnimationData}
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <p>You guessed it in {currentOutputRowIndex} attempt(s)!</p>
            <p>
              The word was: <b>{CORRECT_WORD}</b>
            </p>

            {isDevFeatureUsed && (
              <p className="mt-3">But you are using the dev feature :(</p>
            )}
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
            <div className="flex justify-center mb-6">
              <Lottie
                loop
                animationData={OhNoAnimationData}
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  backgroundColor: "transparent",
                }}
              />
            </div>
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

      <Modal
        show={showWelcomeHintModal}
        onCloseModal={() => {
          setShowWelcomeHintModal(false);
        }}
        renderContent={() => (
          <div className="flex items-center flex-col">
            <p className="mb-6">
              Unlike the original <b>Wordle</b>, <b>Wordol</b> is not limited to
              one word per day! (Randomly generated each session)
            </p>

            <Image
              alt="Welcome hint"
              src={WelcomeImageWordol}
              className="w-60 mb-6"
            />

            <div className="flex w-full flex-col">
              <p className="mb-2">
                <b>How to play:</b>
              </p>

              <p className="mb-2">Each guess must be a valid 5-letters word.</p>

              <p className="mb-2">
                The color of the tiles will change to show how close your guess
                was to the word.
              </p>

              <p className="mb-2">
                <span
                  style={{
                    fontWeight: "bold",
                    color: COLORS.correct,
                  }}
                >
                  Green box{" "}
                </span>{" "}
                indicates the letter is in the word and in the correct spot.
              </p>

              <p className="mb-2">
                <span
                  style={{
                    fontWeight: "bold",
                    color: COLORS.present,
                  }}
                >
                  Yellow box{" "}
                </span>{" "}
                indicates the letter is in the word but in wrong spot.
              </p>

              <p>
                <span
                  style={{
                    fontWeight: "bold",
                    color: COLORS.absent,
                  }}
                >
                  Grey box{" "}
                </span>{" "}
                indicates the letter is not in the word.
              </p>
            </div>
          </div>
        )}
        containerStyle={{
          maxHeight: 600,
          overflowY: "auto",
        }}
      />
    </div>
  );
}
