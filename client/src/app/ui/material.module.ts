import { NgModule } from '@angular/core';
import { MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdToolbarModule,
    ],
    exports: [
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdToolbarModule,
    ],
    declarations: [  ],
    providers: [],
})
export class MaterialModule {}
