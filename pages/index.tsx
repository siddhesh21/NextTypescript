import Head from "next/head";
import { useState } from "react";

interface Student {
  // required
  title: string;
  age: number;
  isMale: boolean;
  // optional
  degree?: {
    title: string;
    year: number;
  };
}

export default function Home() {
  const [name, setName] = useState<string>("siddhesh");
  const [number, setNumber] = useState<number>(1999);
  const [candidate, setCandidate] = useState<Student>({
    title: "Athlete",
    age: 22,
    isMale: true,s
  });
  return (
    <div>
      <Head>
        <title>Next + TypeScript App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Start - TypeScript with Next.js</h1>
      <h2>
        Your name is {name} {candidate.degree.title}.
      </h2>
    </div>
  );
}
