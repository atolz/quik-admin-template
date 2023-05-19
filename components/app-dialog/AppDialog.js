import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

// Pass in a maxwidth: max-w-2xl as panelClassName to contain modal:: makes it responseive
// Modal fills by default
function AppDialog({ isOpen = false, header = true, setIsOpen = () => {}, panelClassName, title = "Title", children }) {
  function handleDeactivate() {
    // ...
  }

  return (
    /*
      Pass `isOpen` to the `open` prop, and use `onClose` to set
      the state back to `false` when the user clicks outside of
      the dialog or presses the escape key.
    */
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[20000]">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
        <Transition.Child enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0" />{" "}
        </Transition.Child>

        <div className="fixed inset-0 grid justify-items-center items-center p-4 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel class={` relative bg-white rounded-lg shadow dark:bg-gray-700 w-full  h-auto  md:h-auto max-w-[405px] ${panelClassName}`}>
              {/* <!-- Modal content --> */}

              {/* <!-- Modal header --> */}
              {header ? (
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <Dialog.Title class="text-xl font-semibold text-gray-900 dark:text-white">{title}</Dialog.Title>

                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  class="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              )}
              {/* <!-- Modal body --> */}
              <Dialog.Description>{children}</Dialog.Description>

              {/* <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"></div> */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AppDialog;
