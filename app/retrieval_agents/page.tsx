import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Please ask questions about Elliot&apos;s work experience! 🔗
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIntermediateStepsToggle={true}
      placeholder={
        'e.g. Tell me all about Elliot.'
      }
      emoji="🌮"
      titleText="Elliot's Retrieval Agent Bot"
    ></ChatWindow>
  );
}
