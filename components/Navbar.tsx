"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">🐶 Elliot's Retrieval Bot</a>
      {/* <a className={`mr-4 ${pathname === "/chat" ? "text-white border-b" : ""}`} href="/chat">🏴‍☠️ Chat</a> */}
      {/* <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output">🧱 Structured Output</a> */}
      {/* <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">🦜 Agents</a> */}
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/retrieval_agents">🤖 Elliot's Retrieval Agent Bot</a>
    </nav>
  );
}