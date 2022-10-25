import { Disclosure as RawDisclosure } from "@headlessui/react";
import { ExpandMore } from "@mui/icons-material";
import { ReactNode } from "react";

import { COLORS } from "../constants/colors";

type Props = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function Disclosure(props: Props) {
  const { title, defaultOpen, children } = props;

  return (
    <RawDisclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <RawDisclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left font-medium  hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
            <span
              style={{
                color: COLORS.PRIMARY,
                fontWeight: "bold",
              }}
            >
              {title}
            </span>
            <ExpandMore
              className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
              style={{
                color: COLORS.PRIMARY,
              }}
            />
          </RawDisclosure.Button>
          <RawDisclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {children}
          </RawDisclosure.Panel>
        </>
      )}
    </RawDisclosure>
  );
}
