type Props = {
  onDoubleClickLogo?: () => void;
};

export default function Navbar(props: Props) {
  const { onDoubleClickLogo } = props;

  return (
    <div
      className="py-3 flex w-full justify-center border-b"
      style={{
        borderBottomColor: "#d3d6da",
      }}
    >
      <span
        className="text-3xl font-bold select-none"
        onDoubleClick={onDoubleClickLogo}
      >
        Wordol
      </span>
    </div>
  );
}
