import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Have a conversation with an LLM using RAG about Elliot Winard 🔗
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      placeholder={
        'Let\'s chat about Elliot Winard\'s experience to see if he meets your company\'s needs!'
      }
      emoji="🐶"
      titleText="The 'All about Elliot Winard's experience' Chatbot"
    ></ChatWindow>
  );
}
