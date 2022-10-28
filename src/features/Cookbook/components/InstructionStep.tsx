import { Recipe_AnalyzedInstruction_Step } from "../types/globalTypes";

type Props = {
  step: Recipe_AnalyzedInstruction_Step;
};

export default function InstructionStep(props: Props) {
  const { step } = props;

  return (
    <div className="flex flex-row mb-3">
      <div className="mr-3 w-4">
        <span className="font-bold text-base">{step.number}.</span>
      </div>

      <div>
        <span className="text-base">{step.step}</span>
      </div>
    </div>
  );
}
