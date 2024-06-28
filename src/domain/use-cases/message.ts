// domain/use-cases/text.ts
import { AbstractMessage } from "@/domain/use-cases";
import { MessageCompositeContract } from "@/domain/contracts/use-cases";

export class Text extends AbstractMessage {
    constructor(public override content: MessageCompositeContract.TextType) {
        super('text', content);
    }

    override getContentMessages(): MessageCompositeContract.TextType | Error {
        if (this.content.text.length > 100) throw new Error('Text too long');
        return super.getContentMessages();
    }
}

// domain/use-cases/rich-card.ts
export class RichCard extends AbstractMessage {
    constructor(public override content: MessageCompositeContract.RichCardType) {
        super('richCard', content);
    }

    override getContentMessages(): MessageCompositeContract.RichCardType | Error {
        if (!this.content.title || !this.content.description || !this.content.imageUrl) {
            throw new Error('RichCard must have a title, description, and imageUrl');
        }
        return super.getContentMessages();
    }

    override resolveFee(messageType: string): number {
        // Exemplo: Podemos implemntar essa lógica para calcular o custo do Carousel
        return super.resolveFee(messageType) + 0.1; // Adicional se o richCard possui mais de um card
    }
}

  // domain/use-cases/carousel.ts
export class Carousel extends AbstractMessage {
    constructor(public override content: MessageCompositeContract.CarouselType) {
        super('carousel', content);
    }

    override getContentMessages(): MessageCompositeContract.CarouselType | Error {
        if (!Array.isArray(this.content.cards) || this.content.cards.length === 0) {
            throw new Error('Carousel must have at least one card');
        }
        for (const card of this.content.cards) {
            if (!card.title || !card.description || !card.imageUrl) {
                throw new Error('Each card in Carousel must have a title, description, and imageUrl');
            }
        }
        return super.getContentMessages();
    }
}

// domain/use-cases/suggestion.ts
export class Suggestion extends AbstractMessage {
    constructor(public override content: MessageCompositeContract.SuggestionType) {
        super('suggestion', content);
    }

    override getContentMessages(): MessageCompositeContract.SuggestionType | Error {
        if (!Array.isArray(this.content.suggestions) || this.content.suggestions.length === 0) {
            throw new Error('Suggestions must be an array and contain at least one suggestion');
        }
        return super.getContentMessages();
    }
}

// domain/use-cases/media.ts
export class Media extends AbstractMessage {
    constructor(public override content: MessageCompositeContract.MediaType) {
        super('media', content);
    }

    override getContentMessages(): MessageCompositeContract.MediaType | Error {
        const validMediaTypes = ['image', 'video', 'audio', 'pdf'];
        if (!this.content.url || !validMediaTypes.includes(this.content.mediaType)) {
            throw new Error('Media must have a valid url and mediaType (image, video, or audio)');
        }
        return super.getContentMessages();
    }
}
