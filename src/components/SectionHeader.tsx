import "./SectionHeader.css";

type Props = {
  title: string;
};

export default function SectionHeader(props: Props) {
  const { title } = props;

  return (
    <div className="flex flex-row items-center px-6 py-3 md:px-24">
      <div className="section-header-dash mr-3" />
      <div className="p-1 bg-primary-shade rounded-xl px-3">
        <p className="text-primary font-bold">{title}</p>
      </div>
    </div>
  );
}
