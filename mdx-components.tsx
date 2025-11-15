import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions} from 'fumadocs-ui/components/accordion';
import { File,Folder } from 'fumadocs-ui/components/files';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import MyImage from './components/ui/Image';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react'

import Video from './components/ui/Video';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
     Accordion,
    Accordions,
    File,
    Step,
    Steps,
    Tabs,
    Tab,
    Folder,
    Card,
    Cards,
    Video,
    MyImage,
    ExternalLink,
    Image,
    ...components,
  };
}
