import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherServiceService } from './weather-service/weather-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer-component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CurrentWeatherComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
