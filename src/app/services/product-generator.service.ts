import { Injectable } from '@angular/core';
import {
  ProductAvailabilityEnum,
  ProductModel,
  ProductPricePerEnum,
} from '../models/product.model';
import { ProductDetailComponent } from '../content/product-list/product-detail/product-detail.component';

@Injectable({
  providedIn: 'root',
})
export class ProductGeneratorService {
  lastID = 0;
  products: ProductModel[] = [];
  private readonly imagePaths: string[] = [
    'assets/instruments/1.jpg',
    'assets/instruments/2.jpg',
    'assets/instruments/3.jpg',
    'assets/instruments/4.jpg',
    'assets/instruments/5.jpg',
    'assets/instruments/6.jpg',
    'assets/instruments/7.png',
    'assets/instruments/8.jpg',
    'assets/instruments/9.jpg',
    'assets/instruments/10.jpg',
    'assets/instruments/11.jpg',
    'assets/instruments/12.jpg',
    'assets/instruments/13.jpg',
    'assets/instruments/14.png',
    'assets/instruments/15.jpg',
    'assets/instruments/16.jpg',
    'assets/instruments/17.jpg',
    'assets/instruments/18.jpg',
    'assets/instruments/19.jpg',
    'assets/instruments/20.jpg',
    'assets/instruments/21.jpg',
    'assets/instruments/22.jpg',
    'assets/instruments/23.jpg',
  ];

  private readonly categories = {
    Katalog: {
      'Dechové nástroje': {
        Dřevěné: {
          'Zobcové flétny': {
            Sopraninové: {
              // bedrock
            },
            Sopránové: {
              // bedrock
            },
            Altové: {
              // bedrock
            },
            Tenorové: {
              // bedrock
            },
            Basové: {
              // bedrock
            },
            'Ostatní zobcové flétny': {
              // bedrock
            },
          },
          'Příčné flétny': {
            'Uzavřené klapky': {
              // bedrock
            },
            'Otevřené klapky (French)': {
              // bedrock
            },
            Pikoly: {
              // bedrock
            },
            'Altové a basové': {
              // bedrock
            },
          },
          Klarinety: {
            'Es klarinety': {
              // bedrock
            },
            'B klarinety': {
              // bedrock
            },
            'A klarinety': {
              // bedrock
            },
            'Ostatní klarinety': {
              // bedrock
            },
            Soudky: {
              // bedrock
            },
            Korpusy: {
              // bedrock
            },
          },
          Saxofony: {
            Sopránové: {
              // bedrock
            },
            Altové: {
              // bedrock
            },
            Tenorové: {
              // bedrock
            },
            Barytonové: {
              // bedrock
            },
            'Ostatní saxofony': {
              // bedrock
            },
            'popruhy pro saxofony': {
              // bedrock
            },
          },
          Hoboje: {
            Poloautomatické: {
              // bedrock
            },
            Automatické: {
              // bedrock
            },
          },
          Fagoty: {
            // bedrock
          },
          'Hubičky na dřevěné nástroje': {
            'Pro Es klarinety': {
              // bedrock
            },
            'Pro B klarinety': {
              // bedrock
            },
            'Pro altklarinety': {
              // bedrock
            },
            'Pro basklarinety': {
              // bedrock
            },
            'Pro soprán saxofon - kaučuk': {
              // bedrock
            },
            'Pro soprán saxofony - kov': {
              // bedrock
            },
            'Pro alt saxofony - kaučuk': {
              // bedrock
            },
            'Pro alt saxofony - kov': {
              // bedrock
            },
            'Pro tenor saxofony - kaučuk': {
              // bedrock
            },
            'Pro tenor saxofony - kov': {
              // bedrock
            },
            'Pro baryton saxofony - kaučuk': {
              // bedrock
            },
            'Pro baryton saxofony - kov': {
              // bedrock
            },
            'Pro bassaxofony- kov': {
              // bedrock
            },
            'Pro ostatní dřevěné nástroje': {
              // bedrock
            },
          },
          'Ligatury a kloboučky': {
            // bedrock
          },
          'Plátky a strojky': {
            'Plátky pro Es klarinety': {
              // bedrock
            },
            'Plátky pro B klarinety': {
              // bedrock
            },
            'Plátky pro basklarinety': {
              // bedrock
            },
            'Plátky pro soprán soxofony': {
              // bedrock
            },
            'Plátky pro alt saxofony': {
              // bedrock
            },
            'Plátky pro tenor saxofony': {
              // bedrock
            },
            'Plátky pro baryton saxofony': {
              // bedrock
            },
            'Příslušenství pro plátky a strojky': {
              // bedrock
            },
            'Plátky pro ostatní jednoplátkové nástroje': {
              // bedrock
            },
            'Strojky pro hoboje a fagoty': {
              // bedrock
            },
          },
          'Příslušenství pro dřevěné dechové nástroje': {
            'Příslušenství pro hoboje': {
              // bedrock
            },
            'Příslušenství pro saxofony': {
              // bedrock
            },
            'Příslušenství pro klarinety': {
              // bedrock
            },
            'Pomůcky na cvičení': {
              // bedrock
            },
            'Příslušenství pro zobcové flétny': {
              // bedrock
            },
            'Příslušenství pro příčné flétny': {
              // bedrock
            },
            'Příslušenství pro fagoty a kontrafagoty': {
              // bedrock
            },
          },
          'Pouzdra pro dřevěné dechové nástroje': {
            'Pouzdra pro saxofony': {
              // bedrock
            },
            'Pouzdra pro příčné flétny': {
              // bedrock
            },
            'Pouzdra pro klarinety': {
              // bedrock
            },
            'Pouzdra pro hoboje a anglické rohy': {
              // bedrock
            },
            'Pouzdra pro zobcové flétny': {
              // bedrock
            },
          },
        },
        Žesťové: {
          Trubky: {
            // fakebedrock
          },
          Křídlovky: {
            // fakebedrock
          },
          Trombony: {
            // fakebedrock
          },
          'Lesní rohy': {
            // fakebedrock
          },
          Tuby: {
            'B tuby': {
              // bedrock
            },
            'F tuby': {
              // bedrock
            },
            'C tuby': {
              // bedrock
            },
            'Es tuby': {
              // bedrock
            },
          },
          Tenory: {
            // bedrock
          },
          Barytony: {
            // bedrock
          },
          Dusítka: {
            'Pro trubky': {
              // bedrock
            },
            'Pro křídlovky': {
              // bedrock
            },
            'Pro lesní rohy': {
              // bedrock
            },
            'Pro trombony': {
              // bedrock
            },
            'Pro tuby': {
              // bedrock
            },
            Ostatní: {
              // bedrock
            },
          },
        },
        'Ostatní dřevěné dechové nástroje': {
          // fakebedrock
        },
      },
      'Smyčcové nástroje': {
        Struny: {
          // fakebedrock
        },
        'Pouzdra a povlaky': {
          // fakebedrock
        },
        Smyčce: {
          'Smyčce pro housle': {
            // bedrock
          },
          'Smyčce pro violu': {
            // bedrock
          },
          'Smyčce pro violoncello': {
            // bedrock
          },
          'Smyčce pro kontrabas': {
            // bedrock
          },
          'Smyčce pro historické nástroje': {
            // bedrock
          },
        },
        'Příslušenství pro smyčcové nástroje': {
          // fakebedrock
        },
        Housle: {
          'Klasické housle': {
            // bedrock
          },
          'Elektrické housle': {
            // bedrock
          },
          'Příslušenství pro housle': {
            // bedrock
          },
        },
        Violy: {
          // bedrock
        },
        Violoncella: {
          // bedrock
        },
        Kontrabasy: {
          // bedrock
        },
      },
      'Strunné a drnkací nástroje': {
        'Koncertní kytary': {
          // bedrock
        },
        'Westernové kytary': {
          // bedrock
        },
        Ukulele: {
          // bedrock
        },
        Harfy: {
          // bedrock
        },
        'Elektrické kytary': {
          // bedrock
        },
        'Struny na kytary a ukulele': {
          // bedrock
        },
        'Struny na harfu': {
          'Sady strun na harfu': {
            // bedrock
          },
          'Jednotlivé struny na harfu': {
            // bedrock
          },
        },
        'Ostatní strunné a drnkací nástroje': {
          // bedrock
        },
        'Příslušenství pro strunné a drnakcí nástroje': {
          'Příslušenství pro strunné a drnkací nástroje': {
            // bedrock
          },
          'Příslušenství pro koncertní kytary': {
            // bedrock
          },
          'Příslušenství pro westernové kytary': {
            // bedrock
          },
          'Příslušenství pro harfy': {
            // bedrock
          },
          'Příslušenství pro ostatní strunné nástroje': {
            // bedrock
          },
        },
      },
      'Klávesové nástroje': {
        Pianina: {
          // bedrock
        },
        Křídla: {
          // bedrock
        },
        'Digitální piána': {
          // bedrock
        },
        'Stage piána': {
          // bedrock
        },
        'Keyboardy / klávesy': {
          // bedrock
        },
        'Masterkeyboardy / MIDI klaviatury': {
          // bedrock
        },
        Syntezátroy: {
          // bedrock
        },
        Akordeony: {
          // bedrock
        },
        Příslušenství: {
          'Příslušenství pro pianina': {
            // bedrock
          },
          'Příslušenství pro křídla': {
            // bedrock
          },
          'Příslušenství pro digitální piána': {
            // bedrock
          },
          'Příslušenství pro stage piana': {
            // bedrock
          },
          'Příslušenství pro keyboardy/klávesy': {
            // bedrock
          },
          'Příslušenství pro akordeony': {
            // bedrock
          },
        },
      },
      'Koncertní bicí nástroje a perkuse': {
        'Orchestrální bicí nástroje': {
          Melodické: {
            Marimby: {
              // bedrock
            },
            Vibrafony: {
              // bedrock
            },
            Xylofony: {
              // bedrock
            },
            Zvonkohry: {
              // bedrock
            },
            Zvony: {
              // bedrock
            },
          },
          Rytmické: {
            // fakebedrock
          },
        },
        'Bicí soupravy a jednotlivé bubny': {
          // bedrock
        },
        'Elektronické bicí': {
          // bedrock
        },
        Perkuse: {
          'Africké perkuse': {
            // bedrock
          },
          'Latinskoamerické perkuse': {
            // bedrock
          },
          Tamburiny: {
            // bedrock
          },
          Cajony: {
            // bedrock
          },
          'Rámové bubny': {
            // bedrock
          },
          'Efektové a netradiční perkuse': {
            // bedrock
          },
        },
        Činely: {
          'Orchestrální činely': {
            // bedrock
          },
        },
        'Orffovy nástroje': {
          // bedrock
        },
        Blány: {
          // fakebedrock
        },
        Paličky: {
          // bedrock
        },
        Hardware: {
          // bedrock
        },
        'Příslušenství, obaly, kufry': {
          // fakebedrock
        },
      },
      'Noty pro hudební nástroje': {
        'Vokální soubory & sbory': {
          'Smíšený sbor': {
            satb: {
              // bedrock
            },
            sab: {
              // bedrock
            },
            ssb: {
              // bedrock
            },
            ssab: {
              // bedrock
            },
            ssatb: {
              // bedrock
            },
          },
          'Ženský sbor': {
            // fakebedrock
          },
          'X-part mix': {
            // fakebedrock
          },
          'Mužský sbor': {
            // fakebedrock
          },
          'Dětský sbor': {
            // bedrock
          },
        },
        'Noty pro kytaru': {
          // fakebedrock
        },
        'Noty pro altový saxofon': {
          // fakebedrock
        },
        Orchestr: {
          // fakebedrock
        },
        'Klavír sólo': {
          // fakebedrock
        },
        'Noty pro trumpetu': {
          // fakebedrock
        },
        Zpěvníky: {
          // fakebedrock
        },
      },
      'Dárkové zboží': {
        // bedrock
      },
      Příslušenství: {
        'Ladičky a metronomy': {
          // bedrock
        },
        'Notové stojany a příslušenství': {
          // bedrock
        },
        'Mikrofonní stojany a příslušenství': {
          // bedrock
        },
        'Nástrojové stojany': {
          // bedrock
        },
        'Obaly a kufry': {
          'Pouzdra pro dechové nástroje': {
            'Pouzdra pro flétny': {
              // bedrock
            },
            'Pouzdra pro trubky a křídlovky': {
              // bedrock
            },
            'Pouzdar pro klarinety': {
              // bedrock
            },
            'Pouzdra pro tuby a eufonia': {
              // bedrock
            },
            // fakebedrock
          },
          'Obaly a kufry pro smyčcové nástroje': {
            // fakebedrock
          },
          'Obaly a kufry pro bicí nástroje': {
            // fakebedrock
          },
          'Obaly a kufry pro keyboardy': {
            // fakebedrock
          },
          'Obaly a kufry pro kytary a baskytary': {
            // fakebedrock
          },
          'Ostatní pouzdra': {
            // fakebedrock
          },
        },
        'Učební pomůcky': {
          // bedrock
        },
        'Příslušenství pro žesťové nástroje': {
          // bedrock
        },
        'Orchestrální židle': {
          // bedrock
        },
      },
    },
  };

  constructor() {
    for (let i = 0; i < 2000; i++) {
      this.products.push(this.generateProduct());
    }
  }
  generateProduct(): ProductModel {
    return {
      id: this.getID(),
      name: this.getRandomString(10, 30),
      price: this.getRandomInt(100, 800000),
      available: this.getRandomItemFromArray([
        ProductAvailabilityEnum.Available,
        ProductAvailabilityEnum.Inquiry,
        ProductAvailabilityEnum.UnderFive,
      ]),
      product_code: this.getRandomString(6, 8),
      description: this.getRandomString(250, 1000),
      image_paths: this.getRandomImagePaths(),
      productCategory: this.getRandomCategoryArray(this.categories),
      price_per: this.getRandomItemFromArray([
        ProductPricePerEnum.Piece,
        ProductPricePerEnum.Set,
      ]),
      warranty: this.getRandomInt(1, 60),
    };
  }

  // Random string generator
  private getRandomString(min: number, max: number): string {
    let length: number = Math.floor(Math.random() * (max - min)) + min;
    let result = '';
    let probabilityOfMeasure = 15; // probability of inserting a measure (the lower it is the higher probability)
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
      if (Math.floor(Math.random() * probabilityOfMeasure) <= 1) {
        probabilityOfMeasure = 13;
        result += ' ';
        counter += 1;
      } else {
        probabilityOfMeasure -= 1;
      }
    }
    return result;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getID() {
    this.lastID += 1;
    return this.lastID;
  }

  private getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private getRandomItemFromArray<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  private getRandomCategory(obj: any) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey || null;
  }

  private getRandomCategoryArray(categories: any) {
    let path: string[] = [];

    while (Object.keys(categories).length > 0) {
      let randomKey = this.getRandomCategory(categories);
      if (randomKey === null) break;

      path.push(randomKey);
      categories = categories[randomKey];
    }
    return path;
  }

  private randomProperty<T>(obj: { [key: string]: T }): T {
    const keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  private getRandomImagePaths(): string[] {
    let result = [];
    for (let i = 0; i < this.getRandomInt(1, 6); i++) {
      result.push(this.getRandomItemFromArray(this.imagePaths));
    }
    return result;
  }
}
