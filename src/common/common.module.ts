import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/aaxios.adapter';

@Module({
    providers: [ AxiosAdapter ],
    exports: [ AxiosAdapter ] 
})
export class CommonModule {}
