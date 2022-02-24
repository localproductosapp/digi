
import { DrawerComponent } from './../components/drawer/drawer.component';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs: IonTabs;
  selected = '';
  subscripcion

    @ViewChild(DrawerComponent) drawer: DrawerComponent;
  backdropVisible = false;

  constructor(private drawerService: DrawerService, private changeDetectorRef: ChangeDetectorRef) {
    this.drawerService.drawerOpen.subscribe(drawerData => {
      if (drawerData && drawerData.open) {
        this.drawer.openDrawer(drawerData.title);
      }

    });
  }

  ionViewWillEnter() {
    
    let arreglo=localStorage.getItem('user')

    

    this.subscripcion=JSON.parse(arreglo).subscription_id
    console.log('esta es la subscricion',this.subscripcion)
  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }
 
  toggleBackdrop(isVisible) {       
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

}
