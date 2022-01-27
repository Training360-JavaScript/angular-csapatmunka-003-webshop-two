import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Fountain Pens';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Business & Casual', link: '/cat01' },
    { text: 'Calligraphy', link: '/cat02' },
  ];

  constructor() {}
}
