export type KeyValueParserState =
  | 'root'
  | 'tag_name'
  | 'start_tag'
  | 'property'
  | 'in_tag'
  | 'end_tag';
