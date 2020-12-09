import { Member } from './member';

export class Patent {
    _id: string;
    name: string;
    image: string;
    document: string;
    field: string;
    link: string;
    description: string;
    authors: Member[];
}