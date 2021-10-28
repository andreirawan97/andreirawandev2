import "./Rating.css";

type Props = {
  rating: number;
};

export default function Rating(props: Props) {
  const { rating } = props;

  const arrRating = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row">
      {arrRating.map((val) =>
        val <= rating ? (
          <div className="rating border-primary bg-primary" />
        ) : (
          <div className="rating border-primary" />
        )
      )}
    </div>
  );
}
