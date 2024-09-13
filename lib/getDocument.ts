import { StrapiFindOneResult } from '../types/StrapiFindOneResult';

export function getDocument<T>(result?: StrapiFindOneResult<T> | null) {
  if (!result || !result.data || 'error' in result.data) {
    return null;
  }
  return result.data;
}
