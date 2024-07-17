export type BoardType = {
    id?: String;
    name: String;
    description?: String | null;
    ownerId: String;
    members: String[];
    createdAt?: Date;
    updatedAt?: Date;
};
