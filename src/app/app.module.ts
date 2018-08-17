import { CaddyPage } from './../pages/caddy/caddy';
import { ArtistDetailPage } from './../pages/artist-detail/artist-detail';
import { MyArtistsPage } from './../pages/my-artists/my-artists';
import { MyPlaylistsPage } from './../pages/my-playlists/my-playlists';
import { MorePageComponent } from './../components/more-page/more-page';
import { PlayerComponent } from './../components/player/player';
import { ProgressBarComponent } from './../components/progress-bar/progress-bar';
import { MostPlayedPage } from './../pages/most-played/most-played';
import { SearchPage } from './../pages/search/search';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProviderTestProvider } from '../providers/provider-test/provider-test';
import { CreatePlaylistPage } from '../pages/create-playlist/create-playlist';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SearchPage,
    TabsPage,
    ProgressBarComponent,
    MostPlayedPage,
    PlayerComponent,
    MorePageComponent,
    MyPlaylistsPage,
    MyArtistsPage,
    ArtistDetailPage,
    CaddyPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SearchPage,
    TabsPage,
    MostPlayedPage,
    PlayerComponent,
    MorePageComponent,
    MyPlaylistsPage,
    MyArtistsPage,
    ArtistDetailPage,
    CaddyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderTestProvider
  ]
})
export class AppModule {}
