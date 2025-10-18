#!/bin/bash
# Video compression script for web optimization
# Requires ffmpeg: brew install ffmpeg (on Mac)

INPUT="src/assets/meal.mp4"
OUTPUT="src/assets/meal-optimized.mp4"

echo "Compressing video for web..."
echo "Input: $INPUT ($(du -h "$INPUT" | cut -f1))"

# Compress video: reduce resolution to 1080p, optimize for web streaming, reduce quality slightly
ffmpeg -i "$INPUT" \
  -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -movflags +faststart \
  -pix_fmt yuv420p \
  -an \
  "$OUTPUT"

echo ""
echo "Compression complete!"
echo "Output: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
echo ""
echo "To use the optimized video:"
echo "1. Backup original: mv src/assets/meal.mp4 src/assets/meal-original.mp4"
echo "2. Replace: mv src/assets/meal-optimized.mp4 src/assets/meal.mp4"

