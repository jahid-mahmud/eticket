export interface IQueryData {
    Entity: string;
    Filter: any;
    Fields: Array<string>
}

export interface ISaveData {
    Entity: string;
    Data: any;
}

export interface IUpdateData {
    Entity: string;
    Id: string;
    Data: any;
}

export class QueryModel implements IQueryData {

    readonly Entity: string;
    Filter: any;
    Fields: Array<any>;

    constructor(entity: string) {
        this.Entity = entity;
        this.Filter = {};
        this.Fields = [];
    }
}

export class SaveModel implements ISaveData {

    readonly Entity: string;
    Data: any;

    constructor(entity: string) {
        this.Entity = entity;
        this.Data = {};
    }
}

export class UpdateModel implements IUpdateData {

    readonly Entity: string;
    readonly Id: string;
    Data: any;

    constructor(entity: string, id: string) {
        this.Entity = entity;
        this.Id = id;
        this.Data = {};
    }
}