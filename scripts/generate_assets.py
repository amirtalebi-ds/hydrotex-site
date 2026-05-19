from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
IMAGES = PUBLIC / "images"
DOWNLOADS = PUBLIC / "downloads"
IMAGES.mkdir(parents=True, exist_ok=True)
DOWNLOADS.mkdir(parents=True, exist_ok=True)

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

    # Soft background bands
    for y in range(0, 1000):
        ratio = y / 1000
        r = int(247 * (1 - ratio) + 235 * ratio)
        g = int(251 * (1 - ratio) + 247 * ratio)
        b = int(250 * (1 - ratio) + 246 * ratio)
        draw.line((0, y, 1800, y), fill=(r, g, b))
    for cx, cy, rx, ry, c in [
        (1430, 110, 520, 220, (75, 182, 183, 35)),
        (1680, 760, 540, 260, (15, 139, 120, 30)),
        (830, 930, 700, 190, (22, 106, 143, 24)),
    ]:
        draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=c)

    draw_factory(draw)

    # Treatment module
    rounded_rect(draw, (760, 312, 1110, 560), 28, fill="#FFFFFF", outline="#7FCBC3", width=3)
    rounded_rect(draw, (800, 350, 1070, 432), 16, fill="#EAF8F6", outline="#A8DCD6", width=2)
    draw.text((850, 374), "HydroTex", font=font(34, True), fill=INK)
    draw.text((818, 458), "solvent extraction + regeneration", font=font(22), fill=BLUE)
    draw.arc((848, 455, 1028, 632), start=25, end=325, fill=TEAL, width=8)
    draw.polygon([(1038, 510), (1065, 522), (1040, 538)], fill=TEAL)

    # Inlet colored textile wastewater streams
    draw_stream(draw, [(620, 372), (680, 350), (738, 364), (760, 384)], "#2F80ED")
    draw_stream(draw, [(612, 442), (690, 420), (736, 440), (760, 458)], "#C83B79")
    draw_stream(draw, [(626, 502), (684, 510), (732, 496), (760, 506)], "#7C5CC4")

    # Clean outputs
    draw_stream(draw, [(1110, 386), (1200, 366), (1318, 354), (1468, 330)], "#6ED0E0", width=18)
    draw_stream(draw, [(1110, 500), (1215, 546), (1340, 566), (1490, 538)], "#28A879", width=12)
    rounded_rect(draw, (1480, 284, 1690, 378), 18, fill="#FFFFFF", outline="#B9DCD8", width=2)
    draw.text((1514, 308), "Clean water", font=font(27, True), fill=INK)
    draw.text((1514, 342), "recovery-ready", font=font(19), fill=BLUE)
    rounded_rect(draw, (1502, 498, 1718, 598), 18, fill="#FFFFFF", outline="#B9DCD8", width=2)
    draw.text((1532, 524), "Solvent loop", font=font(27, True), fill=INK)
    draw.text((1532, 558), "regenerated", font=font(19), fill=TEAL)

    # Minimal sludge
    rounded_rect(draw, (1080, 640, 1280, 724), 18, fill="#FFF7EB", outline="#E8BF7A", width=2)
    draw.rectangle((1124, 678, 1236, 700), fill="#B2784A")
    draw.text((1108, 654), "Minimal sludge", font=font(24, True), fill="#7A4D21")

    # Subtle title in image for OG fallbacks only, kept away from hero text area.
    draw.text((82, 760), "Solvent-based textile wastewater treatment", font=font(36, True), fill=(11, 37, 69, 175))
    draw.text((84, 812), "Lower sludge burden • solvent regeneration • cost-focused validation", font=font(24), fill=(22, 106, 143, 165))

    img.save(IMAGES / "hero-technical.png", quality=94)


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


def generate_one_pager():
    path = DOWNLOADS / "hydrotex-one-pager.pdf"
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=16 * mm,
    )
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="HydroTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=colors.HexColor(INK),
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HydroHeading",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=15,
            textColor=colors.HexColor(BLUE),
            spaceBefore=10,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HydroBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.6,
            leading=13,
            textColor=colors.HexColor(INK),
            spaceAfter=5,
        )
    )

    story = [
        Paragraph("HydroTex", styles["HydroTitle"]),
        Paragraph(
            "Solvent-based textile wastewater treatment for sludge reduction, water recovery, and circular solvent regeneration.",
            styles["HydroBody"],
        ),
        Paragraph("Problem", styles["HydroHeading"]),
        Paragraph(
            "Textile dyeing and finishing plants face high color loads, sludge disposal burden, chemical consumption, and increasing compliance pressure from regulators, brands, and export markets.",
            styles["HydroBody"],
        ),
        Paragraph("Solution", styles["HydroHeading"]),
        Paragraph(
            "HydroTex is developing a modular solvent-extraction and regeneration platform designed to remove dyes from wastewater, concentrate pollutants into a smaller waste stream, and support lower total operating cost.",
            styles["HydroBody"],
        ),
    ]
    data = [
        ["Impact metric", "Target / positioning"],
        ["Sludge reduction", "Up to 90% target, pending real-wastewater validation"],
        ["OPEX", "Target EUR 0.3-1.0 per m3"],
        ["Solvent", "Reusable bio-based solvent loop"],
        ["Control", "PLC-ready system with AI-supervised optimization option"],
    ]
    table = Table(data, colWidths=[52 * mm, 104 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#EAF5F4")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor(INK)),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.8),
                ("LEADING", (0, 0), (-1, -1), 11),
                ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor(LINE)),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.extend(
        [
            Spacer(1, 4),
            table,
            Paragraph("Validation roadmap", styles["HydroHeading"]),
            Paragraph(
                "Feasibility Study -> Real Wastewater Validation -> Pilot Project -> Commercial Deployment.",
                styles["HydroBody"],
            ),
            Paragraph("First market focus", styles["HydroHeading"]),
            Paragraph(
                "Reactive cotton dyeing, knitwear, and garment dyeing facilities with sludge/disposal pressure and export-market sustainability requirements.",
                styles["HydroBody"],
            ),
            Paragraph("Founder", styles["HydroHeading"]),
            Paragraph(
                "Dr. Amir Talebi, Environmental Technology Researcher & Founder. PhD in Environmental Technology. Freiburg, Germany.",
                styles["HydroBody"],
            ),
            Paragraph("Contact", styles["HydroHeading"]),
            Paragraph("contact@hydrotex.eu | https://www.hydrotex.eu", styles["HydroBody"]),
        ]
    )
    doc.build(story)


if __name__ == "__main__":
    generate_hero()
    generate_og()
    generate_one_pager()
