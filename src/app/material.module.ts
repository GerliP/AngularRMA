import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
    declarations: [],
    imports: [ 
        MatToolbarModule,
        MatInputModule, 
        MatFormFieldModule, 
        MatIconModule, 
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
    ],
    exports: [
        MatToolbarModule,
        MatInputModule, 
        MatFormFieldModule, 
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
    ],
    providers: [],
})
export class MaterialModule {}