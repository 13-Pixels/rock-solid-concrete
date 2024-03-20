import { storyblokAsset, storyblokHeadings, storyblokButton } from "../types/storyblokMain";

export interface storyblokService {
  image: storyblokAsset;
  headings: storyblokHeadings[];
  subTitle: string;
  actions: storyblokButton[];
}
