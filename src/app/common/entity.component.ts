export class Carousel {
    constructor(
      public carouselId:number,
      public imgUrl:string,
      public carouselStatus:string,
      public carouselUrl:string,
      public pointerStatus:string
    ){}
  }

  export class Article {
    constructor(
      public articleId:number,
      public articleTitle:string,
      public articleUrl:string,
      public articleImgUrl:string,
      public createDate:string,
      public sawNum:string,
      public favoriateSaved:boolean
    ){}
  }

  export class Category {
    constructor(
      public cagetoryId:number,
      public categoryImgUrl:string,
      public categoryTitle:string
    ){}
  }