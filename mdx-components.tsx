import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions} from 'fumadocs-ui/components/accordion';
import { File,Folder } from 'fumadocs-ui/components/files';
import { Card, Cards } from 'fumadocs-ui/components/card';
// import { House } from 'lucide-react';
import Video from './components/ui/Video';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
     Accordion,
    Accordions,
    File,
    Folder,
    Card,
    Cards,
    Video,
    ...components,
  };
}
