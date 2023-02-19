import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FileUploadService {

    constructor(private _httpClient: HttpClient) { }

    public uploadFile(image: FormData): Observable<any> {
        return this._httpClient.post(`${GetDomain("STORAGE")}/upload`, image);
    }

    public updateFile(fileName: string, data: any): Observable<any> {
        return this._httpClient.patch(`${GetDomain("STORAGE")}/update/${fileName}`, data);
    }

    public deleteFile(fileName: string): Observable<any> {
        return this._httpClient.delete(`${GetDomain("STORAGE")}/delete/${fileName}`);
    }

    public getFileSaveData(file: File, purpose?: string, desc?: string): FormData {

        let formData = new FormData();
        formData.append("title", file.name);
        formData.append("purpose", purpose || "");
        formData.append("description", desc || "");
        formData.append('file', file);
        return formData;
    }

    public getFileUpdateData(file: File): FormData {
        let formData = new FormData();
        formData.append("title", file.name);
        formData.append('file', file);
        return formData;
    }


}

