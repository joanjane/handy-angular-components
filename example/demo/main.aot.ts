import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { DemoModuleNgFactory } from './demo.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(DemoModuleNgFactory);
