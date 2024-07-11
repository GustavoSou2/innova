import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getComplementaryColor, getDominantColor } from '../../core/handler/vibrant/vibrant.handle';
import { Observable, map, of } from 'rxjs';
import Vibrant from 'node-vibrant';

interface Image {
  id: number;
  src: string;
  row: number;
  col: number;
}

interface Svg {
  id: number;
  src: string;
  title: string;
}

interface Work {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  image: string;
  color: string;
}

const works = [
  {
    id: 1,
    title: 'Lanchonete',
    description: 'Social media',
    color: '#ff5454',
    categoryId: 1,
    image: 'assets/images/work/coca-cola.png',
  },
  {
    id: 2,
    title: 'Sapataria',
    description: 'Social media',
    categoryId: 1,
    image: './assets/images/work/nike.png',
    color: '#527dff',
  },
  {
    id: 3,
    title: 'Cafeteria',
    description: 'Branding',
    categoryId: 1,
    image: './assets/images/work/cafe.png',
    color: '#ffc04d',
  },
  {
    id: 4,
    title: 'Confeitaria',
    description: 'Branding',
    categoryId: 1,
    image: './assets/images/work/cake.png',
    color: 'pink',
  },
];

const numbers = [
  {
    id: 1,
    description: 'Crescimento de marca',
    number: 230,
    sufix: '%',
  },
  {
    id: 2,
    description: 'Marcas Salvas',
    number: 19,
    sufix: '+',
  },
  {
    id: 3,
    description: 'Marcas que confiam em nós',
    number: 19,
    sufix: '+',
  },
  {
    id: 4,
    description: 'Visualizações ganhas',
    number: 873,
    sufix: 'M+',
  },
];

const comments = [
  {
    id: 22,
    name: 'Marcio',
    company: 'MDS Gesos',
    gender: 'men',
    services: ['Social media'],
    comment:
      'A innova tem me ajudado a saber o atrai clientes e como deixar minha marca mais visível para mais clientes',
  },
  {
    id: 1,
    name: 'Gustavo Souza',
    company: 'Lanchonete',
    gender: 'men',
    services: ['Social media', 'Tráfego pago'],
    comment: 'A innova ajudou a aumentar as vendas',
  },
  {
    id: 3,
    name: 'Ana Maria',
    company: 'AM Outlet',
    gender: 'women',
    services: ['Branding', 'Social media', 'Trafego pago'],
    comment: 'Eu sempre tive o desejo de ter uma marca de roupa só minha. A inova tem me ajudado a realizar esse sonho',
  },
  {
    id: 4,
    name: 'Joaquim',
    company: 'Padaria do Joca',
    gender: 'men',
    services: ['Social media', 'Trafego pago'],
    comment: 'Em um lugar com muita competitividade, a innova vem me ajudado a me distacar',
  },
];

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  images: Image[] = [
    { id: 1, src: 'assets/images/home/brand.jpg', row: 0, col: 0 },
    { id: 2, src: 'assets/images/home/design.jpg', row: 0, col: 2 },
    { id: 3, src: 'assets/images/home/team.jpg', row: 2, col: 2 },
  ];

  svgs: Svg[] = [
    { id: 1, src: 'assets/images/partners/adobe.svg', title: 'Adobe' },
    { id: 2, src: 'assets/images/partners/amazon.svg', title: 'Amazon' },
    { id: 3, src: 'assets/images/partners/google.svg', title: 'Google' },
    { id: 4, src: 'assets/images/partners/jetbrains.svg', title: 'Jetabrains' },
    { id: 5, src: 'assets/images/partners/microsoft.svg', title: 'Microsoft' },
    { id: 6, src: 'assets/images/partners/notion.svg', title: 'Notion' },
  ];

  howItWorkSteps = [
    {
      id: 1,
      title: 'Prospectação',
      icon: 'assets/images/it-work/user.svg',
      description: 'Nos encontramos com você para conhecer seu negócio, seus objetivos e seu público-alvo.',
    },
    {
      id: 2,
      title: 'Estratégia',
      icon: 'assets/images/it-work/chess.svg',
      description:
        'Desenvolvemos uma estratégia de marketing personalizada baseada em suas necessidades e objetivos únicos.',
    },
    {
      id: 3,
      title: 'Execução',
      icon: 'assets/images/it-work/target.svg',
      description: 'Executamos nossa estratégia usando as mais recentes ferramentas e técnicas de marketing digital.',
    },
    {
      id: 4,
      title: 'Medição',
      icon: 'assets/images/it-work/ruler.svg',
      description:
        'Acompanhamos os resultados de nossas campanhas para que possamos fazer ajustes conforme necessário.',
    },
  ];

  services = [
    {
      id: 1,
      title: 'Branding',
      description:
        'O Branding é o coração da identidade da sua empresa. É a forma como sua marca é percebida pelo público e como ela se diferencia no mercado. ',
      image: 'assets/images/services/branding.jpg',
    },
    {
      id: 2,
      title: 'Social Media',
      description: 'As Redes Sociais são essenciais para construir e fortalecer a presença digital de sua marca.',
      image: 'assets/images/services/social-media.jpg',
    },
    {
      id: 3,
      title: 'Publicidade',
      description:
        'A Publicidade permite às empresas comunicar seus produtos, serviços e valores para um público amplo de forma eficaz e estratégica.',
      image: 'assets/images/services/marketing.jpg',
    },
  ];

  // works = works;
  numbers = numbers;
  comments = comments;

  works: any[] = works;
  colors$!: Observable<any[]>;

  ngOnInit() {
    // const _colors = works.map((work) => {
    //   const colors = getDominantColor(`${work.image}`).then((pallet) => {
    //     let { rgb: arr }: any = pallet.Vibrant;
    //     let [red, green, blue]: any = arr;
    //     const [r, g, b] = getComplementaryColor([red, green, blue]);
    //     return `rgba(${red},${green},${blue},0.5)`;
    //   });
    //   return colors;
    // });
    // this.colors$ = of(_colors);
  }

  getStyle(image: Image) {
    return {
      transform: `translate(${image.col * 100}%, ${image.row * 100}%)`,
    };
  }

  mudar() {
    this.images.forEach((image) => {
      image.row = (image.row + 1) % 3;
      image.col = (image.col + 1) % 3;
    });
  }

  async getBackground(image: string) {
    await getDominantColor(image);
  }
}
