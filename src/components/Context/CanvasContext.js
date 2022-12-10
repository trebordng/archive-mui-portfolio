import create from "zustand";

export const ProgressState = create((set) => ({
  intro: true,
  showAnchors: {
    AboutMe: false,
    Portrait:false,
    Skills:false
  },

  setIntro: (value) => set(() => ({ intro: value })),
  setShowAnchors: (anchor, show) =>
    set((state) => {
      state.showAnchors[anchor] = show;
      return { showAnchors: state.showAnchors };
    }),
}));
