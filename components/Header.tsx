import Link from "next/link";

export default function Home() {
  return (
    <div>
    <ul className="flex gap-10 bg-blue-500 text-center h-screen">
      <li><Link href="./">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">Contact Us</Link></li>
    </ul>
    
  
    </div>
    );
}
