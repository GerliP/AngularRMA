import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule, MatCardHeader } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';


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
        MatAutocompleteModule,
        MatTableModule,
    ],
    exports: [
        MatToolbarModule,
        MatInputModule, 
        MatFormFieldModule, 
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatAutocompleteModule,
        MatTableModule, 
        
        
       

    ],
    providers: [],
})
export class MaterialModule {}