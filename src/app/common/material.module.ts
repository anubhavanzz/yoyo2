import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
    declarations: [],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatTooltipModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatTooltipModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule
    ]
})
export class MaterialModule { }
