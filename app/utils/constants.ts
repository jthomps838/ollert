export enum HttpRequestTypes {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
}
export interface CreateBoardRequest {
    name: string;
    description: string;
    ownerId: string;
    members: string[];
    id: string;
}
