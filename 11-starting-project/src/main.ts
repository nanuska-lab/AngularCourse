import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConf } from './app/app.config';


bootstrapApplication(AppComponent, appConf).catch((err) => console.error(err));
