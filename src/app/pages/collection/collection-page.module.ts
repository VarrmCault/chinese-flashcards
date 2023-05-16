import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { CardMeaningsPipe } from "@core/pipes/card-meanings.pipe";
import { JoinPipe } from "@core/pipes/join.pipe";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxFormControlMessagesModule } from "@varrmcault/ngx-form-control-messages";
import { ButtonComponent } from "src/app/components/button/button.component";
import { CardComponent } from "src/app/components/card/card.component";
import { InlineConfirmDialogComponent } from "src/app/components/inline-confirm-dialog/inline-confirm-dialog.component";
import { PinyinFormFieldComponent } from "src/app/components/pinyin-form-field/pinyin-form-field.component";
import { CardDifficultyComponent } from "../shared/components/card-difficulty/card-difficulty.component";
import { CardEditorComponent } from "./card-editor/card-editor.component";
import { CardViewerComponent } from "./card-viewer/card-viewer.component";
import { CollectionCardsComponent } from "./collection-cards/collection-cards.component";
import { CollectionEditorComponent } from "./collection-editor/collection-editor.component";
import { CollectionListComponent } from "./collection-list/collection-list.component";
import { CardProgressBarComponent } from './card-viewer/card-progress-bar/card-progress-bar.component';

@NgModule({
  declarations: [
    CollectionListComponent,
    CollectionCardsComponent,
    CardEditorComponent,
    CollectionEditorComponent,
    CardViewerComponent,
    CardProgressBarComponent,
  ],
  imports: [
    ButtonComponent,
    CardComponent,
    CardDifficultyComponent,
    CardMeaningsPipe,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    InlineConfirmDialogComponent,
    JoinPipe,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    NgxFormControlMessagesModule,
    PinyinFormFieldComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class CollectionPageModule {}
