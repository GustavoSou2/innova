import { response } from 'express';

export class ResponseOne<T> {
  response!: T;
  status: boolean = false;

  constructor(data: T) {
    return {
      response: data,
      status: !!data,
    };
  }
}
