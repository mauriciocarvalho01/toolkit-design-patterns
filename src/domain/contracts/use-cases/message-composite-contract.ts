export interface MessageCompositeContract {
  getContentMessages(): MessageCompositeContract.GenericType;
  resolveFee(messageType: string): number;
}

export namespace MessageCompositeContract {
  export type GenericType<T = any> = T

  export type TextType = {
    text: string;
  }

  export type RichCardType = {
    title: string;
    description: string;
    imageUrl: string;
  }

  export type CarouselType = {
    cards: RichCardType[];
  }

  export type SuggestionType = {
    suggestions: string[];
  }

  export type MediaType = {
    url: string;
    mediaType: 'image' | 'video' | 'audio' | 'pdf'
  }

}