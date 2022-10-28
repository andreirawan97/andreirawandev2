import { ReactElement, useEffect } from "react";

type Props = {
  children: ReactElement;
  title?: string;
};

export default function Page(props: Props) {
  const { title } = props;

  useEffect(() => {
    if (title) {
      window.document.title = title;
    }
  }, [title]);

  return props.children;
}
