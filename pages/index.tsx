import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

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

export default function Home() {
  const [name, setName] = useState<string>("siddhesh");
  const [number, setNumber] = useState<number>(1999);
  const [candidate, setCandidate] = useState<Student>({
    title: "Athlete",
    age: 22,
    isMale: true,
  });
  return (
    <div>
      <Head>
        <title>Next + TypeScript App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Start - TypeScript with Next.js</h1>
      <h2>
        Your name is {name} {candidate.title}.
      </h2>

      <Header headerTitle="Search Page" />
    </div>
  );
}
