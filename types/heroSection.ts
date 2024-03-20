import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokHeroSection {
  image: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  actions: storyblokButton[];
}
