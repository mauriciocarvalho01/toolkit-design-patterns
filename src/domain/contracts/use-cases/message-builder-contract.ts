import { MessageCompositeContract } from "@/domain/contracts/use-cases";

export interface MessageBuilderContract {
  makeText(content: MessageCompositeContract.TextType): this;
  makeRichCard(content: MessageCompositeContract.RichCardType): this;
  makeCarousel(content: MessageCompositeContract.CarouselType): this;
  makeSuggestion(content: MessageCompositeContract.SuggestionType): this;
  makeMedia(content: MessageCompositeContract.MediaType): this;
  getMessages(): MessageCompositeContract.GenericType;
}