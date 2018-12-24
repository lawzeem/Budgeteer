import { Component } from '@angular/core';

import { ActivityPage } from '../activity/activity';
import { SettingsPage } from '../settings/settings';
//import { NewTPage } from '../NewT/NewT';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ActivityPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
