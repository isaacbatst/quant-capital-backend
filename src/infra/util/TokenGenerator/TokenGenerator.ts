export type TokenGenerator = {
	generate(): Promise<string>;
};
