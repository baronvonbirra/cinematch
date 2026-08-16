# Backend Architecture - CineMatch

CineMatch follows a 3-layer architecture:
1. **Ingestion Layer**: FilmAffinity scraper + TMDb data enrichment
2. **Analysis Layer**: Preference, Temporal, Tonal, Emotional, and Surprise analyzers
3. **Recommender Engines Layer**: 9 specialized engines producing distinct recommendation feeds.
