import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, NgZone, OnInit, Output } from '@angular/core';

import { NavController } from 'ionic-angular';

import KRGlue from '@lyracom/embedded-form-glue';


declare const KR: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private readonly _idInputEmail: string;

  constructor(public navCtrl: NavController, private readonly _NgZone: NgZone, @Inject(DOCUMENT) readonly document: Document) {
    // this.payed = new EventEmitter<any>();
    // this.failure = new EventEmitter<any>();
    this._idInputEmail = 'acme-email-data';
  }
  title = 'ionic3-lyra';

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    const publicKey = '79568046:testpublickey_f0jGS6Bmz1ODPJTyg7Q26UD7nQo52MEYv0gR2jNteruVQ';
    const formToken =
      '04KLRZ4Uw9Tbmb6JIfzU2q_w19AeyJhbW91bnQiOjUwMDAsImN1cnJlbmN5IjoiUEVOIiwibW9kZSI6IlRFU1QiLCJ2ZXJzaW9uIjozLCJvcmRlcklkIjoiUG9saXphIDEyMyIsInNob3BOYW1lIjoiUHJ1ZWJhcyBNdWx0aXBsaWNhIiwiY2F0ZWdvcmllcyI6eyJjcmVkaXRDYXJkcyI6eyJhcHBJZCI6ImNhcmRzIiwicGFyYW0iOlsiQU1FWCIsIk1BU1RFUkNBUkQiLCJWSVNBIiwiRElORVJTIl19LCJkZWJpdENhcmRzIjp7ImFwcElkIjoiY2FyZHMiLCJwYXJhbSI6WyJBTUVYIiwiTUFTVEVSQ0FSRF9ERUJJVCIsIk1BU1RFUkNBUkQiLCJWSVNBIiwiVklTQV9FTEVDVFJPTiIsIlZJU0FfREVCSVQiLCJESU5FUlMiXSwiZmllbGRzIjp7Imluc3RhbGxtZW50TnVtYmVyIjp7InJlcXVpcmVkIjpmYWxzZSwiaGlkZGVuIjp0cnVlfX19fSwiY2FyZHMiOnsiQU1FWCI6eyJmaWVsZHMiOnsic2VjdXJpdHlDb2RlIjp7Im1heExlbmd0aCI6NH0sImluc3RhbGxtZW50TnVtYmVyIjp7InZhbHVlIjoiMSIsInZhbHVlcyI6eyIxIjoiMTo6OjoifSwicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6ZmFsc2UsImhpZGRlbiI6ZmFsc2UsImNsZWFyT25FcnJvciI6ZmFsc2V9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn0sIk1BU1RFUkNBUkRfREVCSVQiOnsiZmllbGRzIjp7InNlY3VyaXR5Q29kZSI6eyJyZXF1aXJlZCI6ZmFsc2V9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn0sIk1BU1RFUkNBUkQiOnsiZmllbGRzIjp7InNlY3VyaXR5Q29kZSI6eyJyZXF1aXJlZCI6ZmFsc2V9LCJpbnN0YWxsbWVudE51bWJlciI6eyJ2YWx1ZSI6IjEiLCJ2YWx1ZXMiOnsiMSI6IjE6Ojo6In0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJWSVNBIjp7ImZpZWxkcyI6eyJzZWN1cml0eUNvZGUiOnsicmVxdWlyZWQiOmZhbHNlfSwiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiIxIiwidmFsdWVzIjp7IjEiOiIxOjo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImNhcmRIb2xkZXJOYW1lIjp7InJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJWSVNBX0VMRUNUUk9OIjp7ImZpZWxkcyI6eyJjYXJkSG9sZGVyTmFtZSI6eyJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiREVGQVVMVCI6eyJmaWVsZHMiOnsicGFuIjp7Im1pbkxlbmd0aCI6MTAsIm1heExlbmd0aCI6MTksInZhbGlkYXRvcnMiOlsiTlVNRVJJQyIsIkxVSE4iXSwicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImV4cGlyeURhdGUiOnsicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sInNlY3VyaXR5Q29kZSI6eyJtaW5MZW5ndGgiOjMsIm1heExlbmd0aCI6MywidmFsaWRhdG9ycyI6WyJOVU1FUklDIl0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOnRydWUsImhpZGRlbiI6ZmFsc2UsImNsZWFyT25FcnJvciI6dHJ1ZX19fSwiRElORVJTIjp7ImZpZWxkcyI6eyJzZWN1cml0eUNvZGUiOnsicmVxdWlyZWQiOmZhbHNlfSwiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiIxIiwidmFsdWVzIjp7IjEiOiIxOjo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiVklTQV9ERUJJVCI6eyJmaWVsZHMiOnsiY2FyZEhvbGRlck5hbWUiOnsicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6ZmFsc2UsImhpZGRlbiI6ZmFsc2UsImNsZWFyT25FcnJvciI6ZmFsc2V9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn19fQe902'
    KRGlue.loadLibrary('https://api.lyra.com', publicKey) /* Load the remote library */
      .then(({ KR }) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          'kr-language': 'es-ES',
          'kr-placeholder-card-holder-name': 'Juan' /* to update initialization parameter */
        })
      )
      .then(({ KR }) => KR.addForm('#myPaymentForm')) /* add a payment form  to myPaymentForm div*/
      .then(({ KR, result }) => KR.showForm(result.formId)) /* show the payment form */
      .then(({ KR }) => this._KREvents(KR));
  }

  private _KREvents(KR: any) {
    KR.onSubmit(this._onSubmit.bind(this));
    KR.onError(this._onError.bind(this));
    KR.onFormReady(this._onFormReady.bind(this));
  }

  private _onSubmit(event: any): void {
    this._NgZone.run(() => {
      const input: HTMLInputElement = this.document.getElementById(this._idInputEmail) as HTMLInputElement;
      console.log('_onSubmit', event);
      // this.payed.next({ ...event, email: input && input.value });
    });
  }

  private _onError(event: any): void {
    this._NgZone.run(() => {
      console.log('_onError', event);
      // this.failure.next(event);
    });
  }

  private _onFormReady(event: any): void {
    this._NgZone.run(() => {
      const input: HTMLInputElement = this.document.getElementById(this._idInputEmail) as HTMLInputElement;
      if (event && input) {
        // input.value = this.email;
        console.log('_onFormReady', event);
      }
    });
  }
}
