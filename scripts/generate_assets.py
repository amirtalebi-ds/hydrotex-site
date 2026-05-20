from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
IMAGES = PUBLIC / "images"
IMAGES.mkdir(parents=True, exist_ok=True)

INK = "#0B2545"
BLUE = "#166A8F"
TEAL = "#0F8B78"
AQUA = "#4BB6B7"
MINT = "#DDF7F0"
PAPER = "#F7FBFA"
LINE = "#D9E8E6"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            continue
    return ImageFont.load_default()


def rounded_rect(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_factory(draw):
    base_y = 242
    draw.rectangle((60, 150, 630, base_y), fill="#E7F0EF", outline="#C5D9D6", width=2)
    draw.rectangle((92, 118, 145, base_y), fill="#DCEBE8", outline="#C5D9D6", width=2)
    draw.rectangle((175, 92, 228, base_y), fill="#DCEBE8", outline="#C5D9D6", width=2)
    draw.rectangle((540, 104, 590, base_y), fill="#DCEBE8", outline="#C5D9D6", width=2)
    roof = [(60, 150), (160, 110), (260, 150), (360, 110), (460, 150), (630, 150)]
    draw.line(roof, fill="#9EBFBA", width=5, joint="curve")
    for x in range(90, 600, 82):
        draw.rounded_rectangle((x, 172, x + 42, 206), radius=5, fill="#F8FBFB", outline="#C5D9D6")
    for x, y, r in [(120, 84, 16), (198, 62, 18), (564, 75, 16)]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill="#DDF7F0", outline="#B5D7D2")
        draw.ellipse((x - r - 32, y - r - 18, x + r + 15, y + r + 7), outline="#CDE2DF", width=2)


def draw_stream(draw, points, color, width=14):
    draw.line(points, fill=color, width=width, joint="curve")
    draw.line(points, fill=(255, 255, 255, 95), width=max(3, width // 4), joint="curve")


def generate_hero():
    img = Image.new("RGB", (1800, 1000), PAPER)
    draw = ImageDraw.Draw(img, "RGBA")

    # Soft abstract background bands for a clean investor-ready hero.
    for y in range(0, 1000):
        ratio = y / 1000
        r = int(247 * (1 - ratio) + 221 * ratio)
        g = int(251 * (1 - ratio) + 245 * ratio)
        b = int(250 * (1 - ratio) + 247 * ratio)
        draw.line((0, y, 1800, y), fill=(r, g, b))
    for y in range(150, 940, 70):
        offset = (y // 70) % 3 * 45
        points = [
            (-120, y),
            (140, y - 48 + offset // 8),
            (340, y + 42),
            (610, y - 12),
            (880, y - 58),
            (1180, y + 40),
            (1920, y - 20),
        ]
        draw.line(points, fill=(22, 106, 143, 32), width=3, joint="curve")
        draw.line([(x, yy + 18) for x, yy in points], fill=(15, 139, 120, 22), width=2, joint="curve")

    img.save(IMAGES / "hero-abstract.png", quality=94)


def generate_og():
    img = Image.new("RGB", (1200, 630), PAPER)
    draw = ImageDraw.Draw(img, "RGBA")
    for x in range(1200):
        ratio = x / 1200
        color = (
            int(247 * (1 - ratio) + 222 * ratio),
            int(251 * (1 - ratio) + 247 * ratio),
            int(250 * (1 - ratio) + 244 * ratio),
        )
        draw.line((x, 0, x, 630), fill=color)
    draw.ellipse((820, -80, 1340, 260), fill=(75, 182, 183, 46))
    draw.ellipse((760, 370, 1360, 760), fill=(15, 139, 120, 38))
    draw.text((72, 78), "HydroTex", font=font(54, True), fill=INK)
    draw.text((72, 160), "Solvent-Based Textile Wastewater Treatment", font=font(40, True), fill=BLUE)
    draw.text((76, 232), "Sludge reduction • water recovery • circular solvent regeneration", font=font(27), fill=TEAL)
    rounded_rect(draw, (76, 350, 366, 430), 18, fill="#FFFFFF", outline="#B7D9D4", width=2)
    draw.text((104, 370), "Target OPEX", font=font(22, True), fill=INK)
    draw.text((104, 398), "€0.3–1.0/m³", font=font(22), fill=TEAL)
    rounded_rect(draw, (402, 350, 692, 430), 18, fill="#FFFFFF", outline="#B7D9D4", width=2)
    draw.text((430, 370), "Up to 90%", font=font(22, True), fill=INK)
    draw.text((430, 398), "sludge reduction", font=font(22), fill=TEAL)
    rounded_rect(draw, (728, 350, 1050, 430), 18, fill="#FFFFFF", outline="#B7D9D4", width=2)
    draw.text((756, 370), "Validation-first", font=font(22, True), fill=INK)
    draw.text((756, 398), "pilot pathway", font=font(22), fill=TEAL)
    img.save(PUBLIC / "og-image.png", quality=94)


if __name__ == "__main__":
    generate_hero()
    generate_og()
