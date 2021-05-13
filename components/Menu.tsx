import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import { Menu, Transition } from "@headlessui/react";

// to make it more powerful
interface Person {
  title: string;
  age: number;
}
interface Student extends Person {
  // required
  isMale: boolean;
  // optional
  degree?: {
    title: string;
    year: number;
  };
}

// const Homes:React.FC = () => {} A functional component
const [name, setName] = useState<string>("siddhesh");
const [number, setNumber] = useState<number>(1999);
const [candidate, setCandidate] = useState<Student>({
  title: "Athlete",
  age: 22,
  isMale: true,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next + TypeScript + Headless UI App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu>
        {/* render props */}
        {({ open }) => (
          <>
            <Menu.Button className="rounded bg-purple-500 p-4 m-5 ">
              Menu
            </Menu.Button>
            {/* Use the Transition component. */}
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex flex-col">
                <Menu.Item>
                  {({ active }) => (
                    <a className={`p-2 ${active && "bg-green-400"}`}>
                      Option one
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  {({ active, disabled }) => (
                    <a
                      className={`p-2 ${active && "bg-purple-400"} ${
                        disabled && "bg-red-200"
                      }`}
                    >
                      Option Two
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className={`p-2 ${active && "bg-green-400"}`}>
                      Option Three
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
