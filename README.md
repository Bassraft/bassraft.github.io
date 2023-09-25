
# Image processing

### Converts an entire directory of files to jpg and compresses them for web. Looks for a ../web directory as the parent.
https://www.tlbx.app/blog/convert-images-for-web-using-sips
sips -s format jpeg -s formatOptions high -s dpiWidth 72 -s dpiHeight 72 -Z 1600 -m '/System/Library/ColorSync/Profiles/sRGB Profile.icc' * --out .
