import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

/**
 * Generated class for the SalesPointListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales-point-list',
  templateUrl: 'sales-point-list.html',
})
export class SalesPointListPage {
  coupon_list:any=[];
  karigar_point:any={};
  loading:Loading;
  filter:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPointListPage');
    this.getCoupanHistory();
    this.presentLoading();
  }


  doRefresh(refresher) 
  {
    console.log('Begin async operation', refresher);
    this.getCoupanHistory(); 
    refresher.complete();
  }
  



  getCoupanHistory()
  {
    console.log('coupan');
    this.filter.limit=0;
    this.service.post_rqst( {'filter':this.filter,'karigar_id': this.service.karigar_id },'app_karigar/couponHistory').subscribe( r =>
      {
        console.log(r);
        this.loading.dismiss();
        this.coupon_list=r['coupon'];
       
        
      });
    }
    presentLoading() 
    {
      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        dismissOnPageChange: false
      });
      this.loading.present();
    }
    
    flag:any='';
    loadData(infiniteScroll)
    {
      console.log('loading');
      this.filter.limit=this.coupon_list.length;
      this.service.post_rqst( {'filter':this.filter,'karigar_id': this.service.karigar_id },'app_karigar/couponHistory').subscribe( r =>
        {
          console.log(r);
          if(r['coupon'] == '')
          { this.flag=1;}
          else
          {
            setTimeout(()=>{
              this.coupon_list=this.coupon_list.concat(r['coupon']);
              console.log('Asyn operation has stop')
              infiniteScroll.complete();
            },1000);
          }
        });
      }

}
