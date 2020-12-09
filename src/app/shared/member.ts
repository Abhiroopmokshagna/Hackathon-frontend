import { Patent } from './patent';
import { Paper } from './paper';
import { Project } from './project';

export class Member {
    _id: string;
    name: string;
    image: string;
    designation: string;
    abbr: string;
    field: string;
    featured: boolean;
    description: string;
    patents: Patent[];
    papers: Paper[];
    projects: Project[];
}
