import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Dummy data for the cards
const cardData = [
  {
    title: "What is Git?",
    description:
      "Learn about the basics of Git and why it's essential for version control.",
    link: "/lesson-1",
  },
  {
    title: "Git Installation",
    description:
      "Step-by-step guide on how to install Git on your operating system.",
    link: "/lesson-2",
  },
  {
    title: "Basic Git Commands",
    description:
      "Explore common Git commands like commit, push, pull, and branch.",
    link: "/lesson-3",
  },
  {
    title: "Git Best Practices",
    description:
      "Discover useful tips and guidelines for working with Git effectively.",
    link: "/lesson-4",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Search Bar */}
      <div className="row-start-1 w-full flex justify-end p-4">
        <Input type="search" placeholder="Search lessons..." className="max-w-sm" />
      </div>

      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Git Course for Beginners!
          </h1>
          <p className="text-sm/6 font-[family-name:var(--font-geist-mono)]">
            This is a cool thing.
          </p>
        </div>
      </main>

      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full row-start-3">
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
