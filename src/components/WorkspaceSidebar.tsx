"use client";

import { Activity, Boxes, Home, Plug, Settings2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { configsRoute, workspaceRoot } from "../lib/workspaceRoutes";

export default function WorkspaceSidebar() {
  const navigate = useNavigate();
  const { profile, currentWorkspace } = useAuth();
  const { pathname } = useLocation();
  const slug = currentWorkspace?.slug ?? profile?.slug;

  const items = [
    { label: "Visão geral", icon: Home, route: `/${slug}/workspace/overview`, active: pathname.endsWith("/workspace/overview") },
    { label: "Fluxos", icon: Boxes, route: workspaceRoot(slug), active: /^\/[^/]+\/workspace\/?$/.test(pathname) || pathname.includes("/workspace/folder/") },
    { label: "Execuções", icon: Activity, route: `/${slug}/workspace/executions`, active: pathname.includes("/workspace/executions") },
    { label: "Integrações", icon: Plug, route: `/${slug}/workspace/integrations`, active: pathname.includes("/workspace/integrations") },
  ];

  return (
    <aside className="w-[220px] shrink-0 border-r border-white/10 bg-[#0b0a10] text-white flex flex-col">
      <div className="px-4 pt-5 pb-3">
        <div className="text-[10px] font-semibold tracking-[0.22em] text-white/35 uppercase">Workspace</div>
        <div className="mt-1 truncate text-sm font-semibold text-white/90">
          {currentWorkspace?.name ?? (slug ? `@${slug}` : "Meu workspace")}
        </div>
      </div>

      <nav className="px-2 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.route)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                item.active
                  ? "bg-white/10 text-white"
                  : "text-white/55 hover:bg-white/5 hover:text-white/90"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-2">
        <button
          type="button"
          onClick={() => navigate(configsRoute(slug))}
          className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
            pathname.includes("/workspace/configs")
              ? "bg-white/10 text-white"
              : "text-white/55 hover:bg-white/5 hover:text-white/90"
          }`}
        >
          <Settings2 className="h-4 w-4 shrink-0" />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  );
}
