import Head from "next/head";

type Props = {
  title?: string;
};

export default function CookbookHeader(props: Props) {
  const { title } = props;

  return (
    <Head>
      <title>{title ?? "Cookbook"}</title>
      <meta name="title" content="Cookbook" key="title" />
      <meta
        name="description"
        content="Cookbook is a free website to browse recipes."
        key="description"
      />
    </Head>
  );
}
