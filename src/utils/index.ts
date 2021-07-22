// 泛型测试

export function identity<T>(arg: T): T {
  return arg;
}

export function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

export const identity2 = <T>(args: T): T => {
  return args
}
