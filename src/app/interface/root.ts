import { RecommendedWine } from './recommended-wines';

export interface Root {
  recommendedWines: RecommendedWine[];
  totalFound: number;
}
