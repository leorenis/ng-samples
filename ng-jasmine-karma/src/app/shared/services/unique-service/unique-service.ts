import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueService {
  private numberOfIds = 0;
  private validIDExp = /^[A-Za-z]+[\w\-\:\.]*$/;

  getUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validIDExp.test(prefix)) {
      throw new Error('Prefix cannot be empty');
    }
    return `${prefix}-${this.generateUniqueUuid()}`;
  }

  getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfIds;
  }

  private generateUniqueUuid(): string {
    this.numberOfIds ++;
    return uuidv4();
  }

}
