import { CSSProperties, useMemo } from "react";
import { COLORS } from "../constants/color";

type OutputBoxState = "NORMAL" | "ABSENT" | "CORRECT" | "PRESENT";

type OutputBoxProps = {
  char?: string;
  state: OutputBoxState;
};

type OutputRowsProps = {
  value: string;
  done: boolean;
  correctIndexes: number[];
  presentPositionIndexes: number[];
};

type Props = {
  rowsValue: string[];
  correctIndexes: number[][];
  presentPositionIndexes: number[][];
  doneFlags: boolean[];
};

function OutputBox(props: OutputBoxProps) {
  const { char, state } = props;

  const getStyleByState = (): CSSProperties => {
    switch (state) {
      case "NORMAL": {
        return {
          borderColor: "black",
        };
      }
      case "CORRECT": {
        return {
          borderColor: COLORS.correct,
          backgroundColor: COLORS.correct,
          color: "white",
        };
      }
      case "ABSENT": {
        return {
          borderColor: COLORS.absent,
          backgroundColor: COLORS.absent,
          color: "white",
        };
      }
      case "PRESENT": {
        return {
          borderColor: COLORS.present,
          backgroundColor: COLORS.present,
          color: "white",
        };
      }
      default: {
        return {};
      }
    }
  };

  return (
    <div
      className="flex w-14 h-14 md:w-16 md:h-16 justify-center items-center text-3xl font-bold border mx-1"
      style={getStyleByState()}
    >
      <span className="select-none">{char?.toUpperCase() ?? ""}</span>
    </div>
  );
}

function OutputRows(props: OutputRowsProps) {
  const { value, correctIndexes, done, presentPositionIndexes } = props;

  const getBoxState = (index: number): OutputBoxState => {
    if (done) {
      if (correctIndexes.includes(index)) {
        return "CORRECT";
      } else if (presentPositionIndexes.includes(index)) {
        return "PRESENT";
      } else {
        return "ABSENT";
      }
    } else {
      return "NORMAL";
    }
  };

  return (
    <div className="flex flex-row mb-2">
      <OutputBox char={value[0]} state={getBoxState(0)} />
      <OutputBox char={value[1]} state={getBoxState(1)} />
      <OutputBox char={value[2]} state={getBoxState(2)} />
      <OutputBox char={value[3]} state={getBoxState(3)} />
      <OutputBox char={value[4]} state={getBoxState(4)} />
    </div>
  );
}

export default function Output(props: Props) {
  const { rowsValue, correctIndexes, doneFlags, presentPositionIndexes } =
    props;

  const outputRows = useMemo(() => [0, 1, 2, 3, 4, 5], []);

  return (
    <div className="flex flex-col">
      {outputRows.map((index) => (
        <OutputRows
          key={index}
          value={rowsValue[index]}
          presentPositionIndexes={presentPositionIndexes[index]}
          correctIndexes={correctIndexes[index]}
          done={doneFlags[index]}
        />
      ))}
    </div>
  );
}
