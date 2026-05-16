import { create } from 'zustand';

interface PlanState {
  totalFriends: number;
  swipesCount: number;
  isGhostMode: boolean;
  ownerName: string;
  addSwipe: () => void;
  setGhostMode: (val: boolean) => void;
}

export const usePlanStore = create<PlanState>((set) => ({
  totalFriends: 12,
  swipesCount: 7,
  isGhostMode: false,
  ownerName: "ISHAN_SHARMA",
  addSwipe: () => set((state) => ({ swipesCount: Math.min(state.swipesCount + 1, state.totalFriends) })),
  setGhostMode: (val: boolean) => set({ isGhostMode: val }),
}));