
// builders/message-builder.ts
import { 
  Text, 
  RichCard, 
  Carousel, 
  Suggestion, 
  Media, 
  MessageBox,

} from "@/domain/use-cases";
import { MessageBuilderContract, MessageCompositeContract } from "@/domain/contracts/use-cases";


export class MessageBuilder implements MessageBuilderContract {
  private _messages: MessageBox = new MessageBox();

  reset(): this {
    this._messages = new MessageBox();
    return this;
  }

  // CRIACIONAL
  // Factory methods
  makeText(content: MessageCompositeContract.TextType): this {
    const text = new Text(content);
    this._messages.add(text);
    return this;
  }

  makeRichCard(content: MessageCompositeContract.RichCardType): this {
    const richCard = new RichCard(content);
    this._messages.add(richCard);
    return this;
  }

  makeCarousel(content: MessageCompositeContract.CarouselType): this {
    const carousel = new Carousel(content);
    this._messages.add(carousel);
    return this;
  }

  makeSuggestion(content: MessageCompositeContract.SuggestionType): this {
    const suggestion = new Suggestion(content);
    this._messages.add(suggestion);
    return this;
  }

  makeMedia(content: MessageCompositeContract.MediaType): this {
    const media = new Media(content);
    this._messages.add(media);
    return this;
  }

  getMessages(): MessageBox {
    return this._messages;
  }

  getContentMessages(): MessageCompositeContract.GenericType {
    return this._messages.getContentMessages();
  }

  count(): number {
    return this._messages.count();
  }

  countContentMessages(): number {
    return this._messages.countContentMessages();
  }

}