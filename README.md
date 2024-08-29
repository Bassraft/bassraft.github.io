
# Image processing

### Converts an entire directory of files to jpg and compresses them for web. Looks for a ../web directory as the parent.
https://www.tlbx.app/blog/convert-images-for-web-using-sips
sips -s format jpeg -s formatOptions high -s dpiWidth 72 -s dpiHeight 72 -Z 1600 -m '/System/Library/ColorSync/Profiles/sRGB Profile.icc' * --out .

### Video conversion for web

ffmpeg -i take\ 4.mov -map_metadata -1 -vf "scale=1920:1080" -c:v libx264 -crf 20 -preset slow -b:v 4000k -maxrate 4000k -bufsize 8000k -c:a aac -b:a 192k output.mp4
