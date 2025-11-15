import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGlobalState = create(
  persist(
    (set, get) => ({
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set({sidebarOpen: !get().sidebarOpen}),
      chatOpen: false,
      setChatOpen: (open) => set({ chatOpen: open }),
      sidebarWidth: () => {
                            const isOpen = get().sidebarOpen;
                            if (window.innerWidth > 1000) {
                            return isOpen ? "15vw": "6vw";
                            }
                            else{
                            return isOpen ? "25vw": "6vw";
                            }
                        }

    }),
    {
      name: 'user-storage', // key name in localStorage
      getStorage: () => localStorage, // optional, default is localStorage
    }
  )
);



export default useGlobalState;
