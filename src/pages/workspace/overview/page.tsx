"use client";

import { Activity, ArrowRight, Boxes, CheckCircle2, Plug, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useWorkspace } from "../../../context/WorkspaceContext";
import { workspaceRoot } from "../../../lib/workspaceRoutes";

export default function WorkspaceOverviewPage() {
  const navigate = useNavigate();
  const { profile, currentWorkspace } = useAuth();
  const { items } = useWorkspace();
  const slug = currentWorkspace?.slug ?? profile?.slug;
  const flows = items.filter((item) => item.type === "bot");

  const stats = [
    { label: "Fluxos", value: String(flows.length), icon: Boxes },
    { label: "Execuções", value: "—", icon: Activity },
    { label: "Sucesso", value: "—", icon: CheckCircle2 },
    { label: "Integrações", value: "—", icon: Plug },
  ];

  return (
    <div className="min-h-full bg-[#f7f7f8] px-6 py-7 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Command Center</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
            Olá, {currentWorkspace?.name ?? profile?.display_name ?? "seja bem-vindo"}.
          </h2>
          <p className="mt-1 text-sm text-gray-500">Uma visão rápida do seu workspace e das automações.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{stat.label}</span>
                  <Icon className="h-4 w-4 text-gray-400" />
                </div>
                <div className="mt-4 text-3xl font-semibold text-gray-900">{stat.value}</div>
                {stat.value === "—" && <div className="mt-1 text-xs text-gray-400">Dados disponíveis em breve</div>}
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_.9fr]">
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h3 className="font-semibold text-gray-900">Seus fluxos</h3>
                <p className="text-xs text-gray-400">Acesse rapidamente suas automações.</p>
              </div>
              <button type="button" onClick={() => navigate(workspaceRoot(slug))} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
                Ver todos <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              {flows.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {flows.slice(0, 6).map((flow) => (
                    <button
                      key={flow.id}
                      type="button"
                      onClick={() => navigate(`/${slug}/workspace/bot/${flow.id}`)}
                      className="group rounded-lg border border-gray-200 p-4 text-left transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{flow.emoji || "🤖"}</span>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-gray-900">{flow.title}</div>
                          <div className="mt-1 truncate text-xs text-gray-400">{flow.description || "Automação"}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 px-6 py-12 text-center">
                  <Zap className="h-6 w-6 text-gray-300" />
                  <p className="mt-3 text-sm font-medium text-gray-700">Seu workspace ainda está vazio.</p>
                  <p className="mt-1 text-xs text-gray-400">Crie seu primeiro fluxo para começar a automatizar.</p>
                  <button type="button" onClick={() => navigate(workspaceRoot(slug))} className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                    Criar fluxo
                  </button>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-4">
              <h3 className="font-semibold text-gray-900">Atividade</h3>
              <p className="text-xs text-gray-400">Eventos e execuções do workspace.</p>
            </div>
            <div className="flex min-h-[260px] flex-col items-center justify-center px-6 text-center">
              <Activity className="h-7 w-7 text-gray-300" />
              <p className="mt-3 text-sm font-medium text-gray-700">Nenhuma execução registrada ainda.</p>
              <p className="mt-1 max-w-xs text-xs leading-5 text-gray-400">Quando o histórico de execuções estiver disponível, ele aparecerá aqui.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
