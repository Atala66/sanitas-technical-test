import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'src/views/home/home.module';
// import { ScrollingModule} from '@angular/cdk/scrolling';
import { DataPipe } from 'src/components/photo-viewer/photo-viewer/data.pipe';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomeModule],
  providers: [DataPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
