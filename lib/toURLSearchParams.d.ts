type Serializable = Record<string | number, unknown> | {} | null | undefined;
export declare function toURLSearchParams(obj: Serializable): string;
export {};
