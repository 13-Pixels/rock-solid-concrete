import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface featuredProducts{
    headings: storyblokHeadings[];
    products: productsArray[];
}

export interface productsArray{
    content: contentObj;
}

export interface contentObj{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton;
    subTitle: string;
}