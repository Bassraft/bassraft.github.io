
# Image processing

### Converts an entire directory of files to jpg and compresses them for web. Looks for a ../web directory as the parent.
https://www.tlbx.app/blog/convert-images-for-web-using-sips
sips -s format jpeg -s formatOptions high -s dpiWidth 72 -s dpiHeight 72 -Z 1600 -m '/System/Library/ColorSync/Profiles/sRGB Profile.icc' * --out .

### Video conversion for web

# Use handbrake to convert video to mp4
* BassRaft preset
* 1080p fast
* 4000 bitrate
* multiple pass
* 60 fps
* web optimized
* slow encode

* mp4 (don't use if handbrake is avaailable)
ffmpeg -i input.mov -map_metadata -1 -vf "scale=1920:1080" -c:v libx264 -crf 20 -preset slow -b:v 4000k -maxrate 4000k -bufsize 8000k -c:a aac -b:a 192k output.mp4

* webm
ffmpeg -i input.mov -vf "scale=1920:1080" -c:v libvpx-vp9 -b:v 1M -c:a libopus -b:a 128k output.webm

* probe to see what formats a video has
ffprobe -v error -show_entries stream=codec_name,codec_type -of default=noprint_wrappers=1:nokey=1 input.mov
