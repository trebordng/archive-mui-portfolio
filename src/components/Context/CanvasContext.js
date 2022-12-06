import create from "zustand";

export const ProgressState = create((set) => ({
  intro: false,
  showAnchors: {
    AboutMe: false,
    Portrait:false
  },

  setIntro: (value) => set(() => ({ intro: value })),
  setShowAnchors: (anchor, show) =>
    set((state) => {
      state.showAnchors[anchor] = show;
      return { showAnchors: state.showAnchors };
    }),
}));
