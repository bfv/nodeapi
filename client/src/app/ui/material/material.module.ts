import { NgModule } from '@angular/core';
import { MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdToolbarModule,
        MdTooltipModule,
    ],
    exports: [
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdToolbarModule,
        MdTooltipModule
    ],
    declarations: [  ],
    providers: [],
})
export class MaterialModule {}
