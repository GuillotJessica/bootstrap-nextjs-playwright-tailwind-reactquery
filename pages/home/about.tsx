import Link from "next/link";

export default function About() {
  return (
    <div>
      <main>
        <h1>About Page</h1>
        <p>
          <Link href="/home">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  );
}
