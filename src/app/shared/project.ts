import { Member } from './member';

export class Project {
    _id: string;
    name: string;
    image: string;
    document: string;
    field: string;
    link: string;
    description: string;
    members: Member[];
}