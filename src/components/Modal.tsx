import { CSSProperties, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

export type ModalActionButton = {
  onClick: () => void;
  label: string;
};

type Props = {
  show: boolean;
  title?: string;
  description?: string;
  onCloseModal?: () => void;
  renderContent?: () => ReactNode;
  actionButtons?: ModalActionButton[];
  containerStyle?: CSSProperties;
};

export default function Modal(props: Props) {
  const {
    show,
    onCloseModal = () => {},
    title,
    description,
    renderContent,
    actionButtons,
    containerStyle,
  } = props;

  return (
    <Transition appear show={show} as={Fragment}>
      <div
        className="absolute z-10 top-0 bottom-0 left-0 right-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Dialog
          as="div"
          className="absolute inset-0 z-10 overflow-y-auto"
          onClose={onCloseModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                style={containerStyle}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                  {renderContent && renderContent()}
                </div>

                <div className="flex flex-1 mt-4 flex-row">
                  <div className="flex flex-1">
                    {actionButtons?.map((b) => (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 text-sm font-medium text-primary border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-2"
                        onClick={b.onClick}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-1 justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 text-sm font-medium text-primary border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={onCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </div>
    </Transition>
  );
}
