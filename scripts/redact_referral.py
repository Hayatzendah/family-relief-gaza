"""Redact phone number and national ID from the referral document before public use."""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

SRC = Path(r"F:\Gaza\src\image") / "صورة التحويلة.jpg"
# Fall back to already-copied file if Arabic path fails on some shells
FALLBACK = Path(r"F:\Gaza\public\images\referral-document.jpg")
OUT = Path(r"F:\Gaza\public\images\referral-document-redacted.jpg")


def main() -> None:
    src = SRC if SRC.exists() else FALLBACK
    im = Image.open(src).convert("RGB")
    w, h = im.size
    print(f"source={src} size={w}x{h}")

    draw = ImageDraw.Draw(im)

    # Upper patient-info table: cover national ID and phone values only.
    # Tuned for 1078x1600 scan of Ministry of Health Transfer Form No. (1).
    bands = [
        (560, 285, 1000, 325),  # ID number value
        (560, 325, 1000, 365),  # phone value
    ]

    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except OSError:
        font = ImageFont.load_default()

    for box in bands:
        draw.rectangle(box, fill=(95, 107, 78))
        draw.text((box[0] + 10, box[1] + 8), "redacted for privacy", fill=(247, 244, 239), font=font)

    im.save(OUT, quality=92)
    print(f"saved {OUT}")


if __name__ == "__main__":
    main()
