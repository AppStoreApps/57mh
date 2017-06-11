import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform, NavController, Tabs, ToastController } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { AppVersion } from '@ionic-native/app-version';
import { Headers, Http } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';

declare var codePush: any;
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabs: Tabs;
  backButtonPressed: boolean = false;
  itimer = null;
  apkDownloadUrl='';
  fileTransfer: TransferObject;

  tab1Root = 'NewPage';
  tab2Root = 'HomePage';
  tab3Root = 'ClassifyPage';
  tab4Root = 'CollectPage';

  constructor(
    public navCtrl: NavController, 
    public platform: Platform, 
    public http: Http, 
    public toastCtrl: ToastController, 
    public appVersion: AppVersion, 
    public alertCtrl: AlertController, 
    public file: File,
    public fileOpener: FileOpener, 
    public transfer: Transfer, 
    public pubilcService: pubilcService
    ) {
    this.pageBack();
    appVersion.getVersionNumber().then((version) => {
      this.pubilcService.Version = version;
    });
    codePush.sync();
  }

  //app版本获取
  getAppVersion() {

    let url = "http://www.devonhello.com/chihu/appversion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(res.json()[0]["v"]);
        if (res.json()[0]["v"] != this.pubilcService.Version) {
          //可升级
          this.apkDownloadUrl = res.json()[0]["url"];
          this.fileTransfer = this.transfer.create();
          this.AppV();
        }
      });
  }

  //下载最新版本
  download() {
    var _that = this;
    var apkurl = this.file.externalDataDirectory + 'buka.apk';
    this.fileTransfer.download(this.apkDownloadUrl, apkurl).then((entry) => {
      //打开apk
      this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
        .then(() => console.log('File is opened'))
        .catch(e => alert('Error：' + e));

    }, (error) => {
      // handle error
    });

  }

  AppV() {


    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否要更新到最新版本?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.download();
          }
        }
      ]
    });

    alert.present();
  }

  pageBack() {

    this.platform.registerBackButtonAction((): any => {
      this.pubilcService.presentLoadingDismiss();
      let activeVC = this.navCtrl.getActive();
      let page = activeVC.instance;
      page.tabs
      if (!(page instanceof TabsPage)) {
        if (!this.navCtrl.canGoBack()) {
          return this.showExit();
        }
        return this.navCtrl.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        return this.showExit();
      }

      return activeNav.pop();

    }, 101);
  }

  //双击退出提示框
  showExit() {
    var _that = this;
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.presentToast();
      this.backButtonPressed = true;
      if (this.itimer) {
        clearTimeout(this.itimer);
      }
      this.itimer = setTimeout(() => {
        _that.backButtonPressed = false
      }, 2000);
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '再次点击返回退出APP',
      duration: 2000
    });
    toast.present();
  }
}
