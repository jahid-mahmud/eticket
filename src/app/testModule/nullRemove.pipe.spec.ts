import { NullRemovePipe } from "app/tempModules/reusables/pipes/null-remove.pipe"

describe('NullRemove Pipe',()=>{
    it('Creating an instance',()=>{
        const pipe=new NullRemovePipe();
        expect(pipe).toBeDefined();
    });
    it('Should give NA',()=>{
        const pipe=new NullRemovePipe();
        expect(pipe.transform('')).toEqual('NA');
    });
    it('Should give hello world',()=>{
        const pipe=new NullRemovePipe();
        expect(pipe.transform('hello world')).toEqual('hello world');
    })
})