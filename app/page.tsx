import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Please ask questions about Elliot&apos;s experience! 🔗
      </h1>
      <p>You will be be interacting with an AI system that knows a bit about Elliot - professional experience, education, awards, etc.</p>
      <p>For the technically savvy, this is a Retrieval-Augmented Generation (or RAG) system. This means that most of the responses you get back should be based on real data from the documents that Elliot gave it rather than all of the Internet data that LLMs used for training.</p>
      <p>This is a rapidly evolving field of research, and I will be regularly updating this app as I learn more.</p>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      placeholder={
        'e.g. Tell me what Elliot did at Stability AI.'
      }
      emoji="🐶"
      titleText="The 'All about Elliot's professional experience' Chatbot"
    ></ChatWindow>
  );
}
