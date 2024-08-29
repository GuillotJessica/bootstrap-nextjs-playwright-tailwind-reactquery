import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="blue">Home</h1>
      <Link href="/home/about">About</Link>
    </div>
  );
}
