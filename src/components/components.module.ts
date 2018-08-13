import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { PlayerComponent } from './player/player';
import { MorePageComponent } from './more-page/more-page';
@NgModule({
	declarations: [ProgressBarComponent,
    PlayerComponent,
    MorePageComponent],
	imports: [PlayerComponent],
	exports: [ProgressBarComponent,
    PlayerComponent,
    MorePageComponent]
})
export class ComponentsModule {}
