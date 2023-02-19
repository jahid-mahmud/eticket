import { UrlRemoveForPdfPipe } from "app/tempModules/reusables/pipes/url-remove-for-pdf.pipe"

describe('UrlRemoveForPdf Pipe',()=>{
    it('Creating an instance',()=>{
        const pipe=new UrlRemoveForPdfPipe();
        expect(pipe).toBeDefined();
    });
    it('Should give test.pdf',()=>{
        const pipe=new UrlRemoveForPdfPipe();
        expect(pipe.transform('https://www.google.com/test.pdf')).toEqual('test.pdf');
    });
    it('Should give hello world',()=>{
        const pipe=new UrlRemoveForPdfPipe();
        expect(pipe.transform('hello world')).toEqual('hello world');
    })
})