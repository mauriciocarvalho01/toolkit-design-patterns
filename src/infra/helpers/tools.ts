import crypto, { BinaryToTextEncoding } from 'crypto'
import * as zlib from 'zlib'
export class ToolsHelper {
  createHash (target?: string, algoritm?: string, format?: BinaryToTextEncoding): string {
    if (!target) return crypto.randomUUID()
    const algorithmToUse = algoritm ?? 'md5'
    const formatToUse = format ?? 'hex'
    return crypto.createHash(algorithmToUse).update(target).digest(formatToUse)
  }

  verifyMD5 (target: string, md5Hash: string): boolean {
    const calculatedHash = this.createHash(target)
    return calculatedHash === md5Hash
  }

  zip (target: any): any {
    return zlib.deflateSync(Buffer.from(target))
  }

  unzip (target: any): any {
    return zlib.inflateSync(target)
  }
}
