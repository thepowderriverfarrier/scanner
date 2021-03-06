import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // type returned by scan function is BarcodeScanResult
  result: BarcodeScanResult;
  dataToEncode: string;

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {}

  async encodeData(){
    try{
      await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataToEncode);
    }
    catch(error){
      console.error(error);
    }
  }


  async scanBarcode(){
    try {

      const options: BarcodeScannerOptions = {
        prompt: 'Align camera with barcode',
        torchOn: true
      }

      this.result = await this.barcode.scan(options);

    }
    catch(error){
      console.error(error);
    }

  }

}
