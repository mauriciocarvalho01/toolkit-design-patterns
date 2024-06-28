import { MessageCompositeContract } from "@/domain/contracts/use-cases";

// COMPOSITE PATTERN
// 
export abstract class  AbstractMessage implements MessageCompositeContract {
  constructor(public type: string, public content: MessageCompositeContract.GenericType) {}
  getContentMessages(): MessageCompositeContract.GenericType {
    return {
      contentMessage: {
        [this.type]: this.content
      }
    }
  }

  resolveFee(messageType: string): number {
    switch (messageType) {
      case 'text':
        return 0.1;
      case 'richCard':
        return 0.2;
      case 'carousel':
        return 0.3;
      case 'suggestion':
        return 0.4;
      case'media':
        return 0.5;
      default:
        return 0;
    }
  }
}

