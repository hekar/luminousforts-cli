export class KeyValueNode {
  readonly children: Array<KeyValueNode>;
  readonly properties: Record<string, string>;

  constructor(
    readonly parent: KeyValueNode | undefined,
    readonly tag: string,
  ) {
    this.properties = {}
    this.children = []
  }

  add(child: KeyValueNode): void {
    this.children.push(child)
  }
}
