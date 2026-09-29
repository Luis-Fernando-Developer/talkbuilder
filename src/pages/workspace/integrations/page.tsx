import { PlugZap } from "lucide-react";

export default function WorkspaceIntegrationsPage() {
  return (
    <div className="min-h-full bg-[#f7f7f8] px-6 py-7 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Workspace</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">Integrações</h2>
        <p className="mt-1 text-sm text-gray-500">Conexões que seus fluxos podem utilizar.</p>
        <div className="mt-7 rounded-xl border border-gray-200 bg-white p-8">
          <div className="flex items-center gap-3">
            <PlugZap className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Central de integrações</h3>
              <p className="mt-1 text-sm text-gray-500">A área está pronta para organizar as conexões disponíveis para cada workspace.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
