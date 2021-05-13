import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Example() {
  const data = [
    {
      q: "What's the refund policy?",
      a: "30d money back",
    },
    {
      q: "What is REACT?",
      a: "BEST JS library",
    },

    {
      q: "What is Tailwind CSS?",
      a: "BEST css library with Next JS + React",
    },

    {
      q: "What is Headless UI?",
      a: "BEST and A simple, accessible foundation for building custom UIs that show and hide content, like toggle-able accordion panels.",
    },
  ];
  return (
    <div className="w-full px-4 pt-16">
      <div className="flex flex-col space-y-2 w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {data.map(({ q, a }) => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left 
              text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 
              focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  <span>{q}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {a}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
