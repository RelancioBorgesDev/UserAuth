export type ResponseObjectType = {
  status: number;
  message: string;
};

export function responseObject(
  status: number,
  message: string
): ResponseObjectType {
  return {
    status: status,
    message: message,
  };
}
