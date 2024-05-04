import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 fixed top-28 pl-4">
      <Link href="/products#cool">Cool Stuff</Link>
    </div>
  );
}
