import { Member } from './member';
import { Paper } from './paper';
import { Project } from './project';
import { Patent } from './patent';

export class Category {
    _id: string;
    name: string;
    image: string;
    members: [Member];
    papers: [Paper];
    projects: [Project];
    patents: [Patent];
    document: string;
    description: string;
    link: string;
    field: string;
    featured: boolean;
}
