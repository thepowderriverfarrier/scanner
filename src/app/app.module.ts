//Daniels-MBP:scanner thepowderriverfrrier$ ionic cordova plugin add phonegap-plugin-barcodescanner
//> cordova plugin add phonegap-plugin-barcodescanner --save
//✔ Running command - done!
//Fetching plugin "phonegap-plugin-barcodescanner" via npm
//Saved plugin info for "phonegap-plugin-barcodescanner" to config.xml
//Daniels-MBP:scanner thepowderriverfrrier$ npm install --save @ionic-native/barcode-scanner
//+ @ionic-native/barcode-scanner@4.2.1




import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  //components directives and pipes
  declarations: [
    MyApp,
    HomePage
  ],
  //import modules
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  //components created at launch
  bootstrap: [IonicApp],
  //any component loaded by type
  //  compile a bundle for components actually used
  entryComponents: [
    MyApp,
    HomePage
  ],
  //register services for dependency injection
  //  if not here then in individual component's
  //  @Component decorator
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
