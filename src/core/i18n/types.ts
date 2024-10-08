//  https://github.com/infinitered/ignite/blob/master/boilerplate/app/i18n/i18n.ts
export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (number | string)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `.${TKey}` | `['${TKey}']`
  >;
}[keyof TObj & (number | string)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? `${Text}${RecursiveKeyOfInner<TValue>}` | Text
  : Text;
