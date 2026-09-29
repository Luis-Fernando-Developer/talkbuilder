export default function WorkspaceExecutionsPage() {
  return (
    <div className="min-h-full bg-[#f7f7f8] px-6 py-7 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Workspace</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">Execuções</h2>
        <p className="mt-1 text-sm text-gray-500">Acompanhe o histórico e o resultado das suas automações.</p>
        <div className="mt-7 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-gray-700">O histórico de execuções será exibido aqui.</p>
          <p className="mt-1 text-xs text-gray-400">A interface já está preparada para receber os eventos reais do Flow.</p>
        </div>
      </div>
    </div>
  );
}
