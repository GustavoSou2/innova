export class ResponseMany<T> {
  constructor(data: T) {
    return {
      response: [...(<T[]>data)],
      length: (<T[]>data).length,
      status: !!data,
    };
  }
}
