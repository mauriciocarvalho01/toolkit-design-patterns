import { MessageCompositeContract } from '@/domain/contracts/use-cases'

export class MessageBox implements MessageCompositeContract {
  private readonly _childrens: MessageCompositeContract[] = []
  getContentMessages (): MessageCompositeContract.GenericType {
    return this._childrens.map((message) => message.getContentMessages())
  }

  resolveFee (messageType: string): number {
    return this._childrens.reduce((total, message) => total + message.resolveFee(messageType), 0)
  }

  add (...message: MessageCompositeContract[]): void {
    message.forEach((item) => this._childrens.push(item))
  }

  countContentMessages (): number {
    const contentMessages = this.getContentMessages()
    return contentMessages.length
  }

  count (): number {
    return this._childrens.length
  }
}
