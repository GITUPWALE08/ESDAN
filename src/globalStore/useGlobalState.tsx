import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  chatOpen: boolean;
  toggleChat: () => void;
}

export const useGlobalState = create<GlobalState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      chatOpen: false,
      toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
    }),
    {
      name: 'esdan-storage',
    }
  )
);