export function keyFromComponent({
  __component,
  id,
}: {
  __component: string;
  id: number;
}): string {
  return `${__component}.${id}`;
}
