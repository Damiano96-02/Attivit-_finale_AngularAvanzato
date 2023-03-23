import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './App/app.module';
import { AppModule } from './App_Operazioni_Crud/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
