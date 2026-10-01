"""
Generate public/Rodrigo_De_Fraga_Nunes_CV_Links.pdf from the Markdown CV.

Source of truth: cv/Rodrigo_De_Fraga_Nunes_CV.md
Pipeline: markdown + qrcode + WeasyPrint (Playwright HTML print fallback on Windows
if WeasyPrint/GTK is unavailable).

Run: python scripts/generate_cv_pdf.py
  or: npm run cv:pdf
"""

from __future__ import annotations

import base64
import sys
from pathlib import Path

import markdown
import qrcode

ROOT = Path(__file__).resolve().parents[1]
CV_DIR = ROOT / "cv"
MD_PATH = CV_DIR / "Rodrigo_De_Fraga_Nunes_CV.md"
QR_DIR = CV_DIR / "qr"
OUT = ROOT / "public" / "Rodrigo_De_Fraga_Nunes_CV_Links.pdf"

PORTFOLIO_URL = "https://d-dev-folio.vercel.app/"
GITHUB_QR_URL = "https://github.com/RodrigoNunes2004/RodrigoNunes2004"

# Tuned to fit exactly 2 A4 pages while staying >= ~9.5pt body.
CV_CSS = """
@page {
  size: A4;
  margin: 12mm 16mm 16mm 16mm;
  @bottom-right {
    content: "Rodrigo De Fraga Nunes - " counter(page) "/" counter(pages);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 9pt;
    color: #555;
  }
}

html, body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 9.6pt;
  line-height: 1.28;
  color: #333;
  margin: 0;
  padding: 0;
}

a {
  color: #1a5276;
  text-decoration: none;
}

.updated {
  text-align: right;
  font-size: 8.5pt;
  font-style: italic;
  color: #888;
  margin: 0 0 0.05em 0;
}

.header {
  text-align: center;
  margin-bottom: 0.3em;
}

.header h1 {
  font-size: 20pt;
  font-weight: bold;
  color: #1a5276;
  margin: 0 0 0.06em 0;
  line-height: 1.1;
}

.header .subtitle {
  font-size: 10.5pt;
  font-weight: normal;
  color: #1a5276;
  margin: 0 0 0.28em 0;
}

.contact-info {
  text-align: center;
  color: #1a5276;
  font-size: 9pt;
  line-height: 1.35;
}

.contact-info p {
  margin: 0.04em 0;
  color: #1a5276;
}

.contact-info a {
  color: #1a5276;
  text-decoration: none;
}

.contact-links {
  white-space: nowrap;
  font-size: 7.6pt;
  letter-spacing: -0.015em;
}

h2 {
  font-size: 13pt;
  font-weight: bold;
  color: #1a5276;
  border-bottom: 2px solid #1a5276;
  margin: 0.42em 0 0.18em 0;
  padding-bottom: 0.06em;
  line-height: 1.15;
}

p {
  margin: 0.14em 0;
}

.skill-line {
  margin: 0.04em 0;
}

ul {
  margin: 0.06em 0 0.22em 0;
  padding-left: 1.15em;
}

li {
  margin: 0.05em 0;
}

strong {
  font-weight: bold;
  color: #222;
}

em {
  font-style: italic;
}

.scan-links {
  margin: 0.2em 0 0.3em 0;
}

.qr-block {
  page-break-inside: avoid;
}

.experience-entry {
  page-break-inside: avoid;
  break-inside: avoid;
}

.experience-toi {
  page-break-before: always;
  break-before: page;
}

.education-entry {
  page-break-inside: avoid;
  break-inside: avoid;
}

.qr-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  margin-top: 0.35em;
  width: 100%;
}

.qr-item {
  text-align: center;
  flex: 0 0 auto;
}

.qr-label {
  margin: 0 0 0.05em 0;
  font-size: 9.5pt;
  color: #222;
}

.qr-url {
  margin: 0 0 0.2em 0;
  font-size: 8.5pt;
}

.qr-url a {
  color: #1a5276;
  text-decoration: none;
}

.qr-item img {
  width: 90px;
  height: 90px;
  display: block;
  margin: 0 auto;
}
"""

# Chromium print path: no @page footer counters; margins handled by page.pdf().
PLAYWRIGHT_CSS = """
html, body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 9.6pt;
  line-height: 1.28;
  color: #333;
  margin: 0;
  padding: 0;
}

a {
  color: #1a5276 !important;
  text-decoration: none !important;
}

.updated {
  text-align: right;
  font-size: 8.5pt;
  font-style: italic;
  color: #888;
  margin: 0 0 0.05em 0;
}

.header {
  text-align: center;
  margin-bottom: 0.3em;
}

.header h1 {
  font-size: 20pt;
  font-weight: bold;
  color: #1a5276;
  margin: 0 0 0.06em 0;
  line-height: 1.1;
}

.header .subtitle {
  font-size: 10.5pt;
  font-weight: normal;
  color: #1a5276;
  margin: 0 0 0.28em 0;
}

.contact-info {
  text-align: center;
  color: #1a5276;
  font-size: 9pt;
  line-height: 1.35;
}

.contact-info p {
  margin: 0.04em 0;
  color: #1a5276;
}

.contact-info a {
  color: #1a5276 !important;
  text-decoration: none !important;
}

.contact-links {
  white-space: nowrap;
  font-size: 7.6pt;
  letter-spacing: -0.015em;
}

h2 {
  font-size: 13pt;
  font-weight: bold;
  color: #1a5276;
  border-bottom: 2px solid #1a5276;
  margin: 0.42em 0 0.18em 0;
  padding-bottom: 0.06em;
  line-height: 1.15;
}

p {
  margin: 0.14em 0;
}

.skill-line {
  margin: 0.04em 0;
}

ul {
  margin: 0.06em 0 0.22em 0;
  padding-left: 1.15em;
}

li {
  margin: 0.05em 0;
}

strong {
  font-weight: bold;
  color: #222;
}

em {
  font-style: italic;
}

.scan-links {
  margin: 0.2em 0 0.3em 0;
}

.qr-block {
  page-break-inside: avoid;
}

.experience-entry {
  page-break-inside: avoid;
  break-inside: avoid;
}

.experience-toi {
  page-break-before: always;
  break-before: page;
}

.education-entry {
  page-break-inside: avoid;
  break-inside: avoid;
}

.qr-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  margin-top: 0.35em;
  width: 100%;
}

.qr-item {
  text-align: center;
  flex: 0 0 auto;
}

.qr-label {
  margin: 0 0 0.05em 0;
  font-size: 9.5pt;
  color: #222;
}

.qr-url {
  margin: 0 0 0.2em 0;
  font-size: 8.5pt;
}

.qr-url a {
  color: #1a5276 !important;
  text-decoration: none !important;
}

.qr-item img {
  width: 90px;
  height: 90px;
  display: block;
  margin: 0 auto;
}
"""


def generate_qr_codes() -> dict[str, Path]:
    """Write QR PNGs under cv/qr/ and return their paths."""
    QR_DIR.mkdir(parents=True, exist_ok=True)
    targets = {
        "portfolio_qr.png": PORTFOLIO_URL,
        "github_qr.png": GITHUB_QR_URL,
    }
    paths: dict[str, Path] = {}
    for filename, data in targets.items():
        path = QR_DIR / filename
        qr = qrcode.QRCode(box_size=8, border=2)
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        img.save(path)
        paths[filename] = path
    return paths


def _data_uri(path: Path) -> str:
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:image/png;base64,{encoded}"


def build_html(md_text: str, css: str, *, embed_qr: bool = False) -> str:
    body = markdown.markdown(md_text, extensions=["extra", "md_in_html"])
    if embed_qr:
        portfolio = _data_uri(QR_DIR / "portfolio_qr.png")
        github = _data_uri(QR_DIR / "github_qr.png")
        body = body.replace('src="qr/portfolio_qr.png"', f'src="{portfolio}"')
        body = body.replace('src="qr/github_qr.png"', f'src="{github}"')
    return (
        "<!DOCTYPE html>\n"
        '<html lang="en">\n'
        "<head>\n"
        '<meta charset="utf-8" />\n'
        "<title>Rodrigo De Fraga Nunes — CV</title>\n"
        f"<style>\n{css}\n</style>\n"
        "</head>\n"
        f"<body>\n{body}\n</body>\n"
        "</html>\n"
    )


def write_pdf_weasyprint(html: str, output_path: Path) -> str:
    import io
    from contextlib import redirect_stderr, redirect_stdout

    # WeasyPrint prints a long GTK help banner to stdout when native libs are missing.
    sink = io.StringIO()
    with redirect_stdout(sink), redirect_stderr(sink):
        from weasyprint import HTML

        HTML(string=html, base_url=str(CV_DIR.resolve()) + "/").write_pdf(str(output_path))
    return "weasyprint"


def write_pdf_playwright(html: str, output_path: Path) -> str:
    """Fallback when WeasyPrint cannot load native GTK/Pango libs on Windows."""
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_content(html, wait_until="load")
        page.pdf(
            path=str(output_path),
            format="A4",
            print_background=True,
            margin={
                "top": "12mm",
                "right": "16mm",
                "bottom": "16mm",
                "left": "16mm",
            },
            display_header_footer=True,
            header_template="<span></span>",
            footer_template=(
                '<div style="width:100%; font-size:9pt; color:#555; '
                "font-family:Helvetica,Arial,sans-serif; "
                'padding:0 10mm 3mm 0; text-align:right; box-sizing:border-box;">'
                "Rodrigo De Fraga Nunes - "
                '<span class="pageNumber"></span>/<span class="totalPages"></span>'
                "</div>"
            ),
        )
        browser.close()
    return "playwright"


def convert_cv_to_pdf(markdown_file_path: Path, output_pdf_path: Path) -> str:
    if not markdown_file_path.is_file():
        raise FileNotFoundError(f"Markdown CV not found: {markdown_file_path}")

    generate_qr_codes()
    md_text = markdown_file_path.read_text(encoding="utf-8")
    output_pdf_path.parent.mkdir(parents=True, exist_ok=True)

    # Embed QR as data URIs for both engines so Playwright (about:blank) and
    # WeasyPrint both resolve images without remote or file:// dependency.
    weasy_html = build_html(md_text, CV_CSS, embed_qr=True)
    try:
        return write_pdf_weasyprint(weasy_html, output_pdf_path)
    except Exception as weasy_err:
        print(
            f"WeasyPrint unavailable ({weasy_err!r}); falling back to Playwright.",
            file=sys.stderr,
        )
        pw_html = build_html(md_text, PLAYWRIGHT_CSS, embed_qr=True)
        try:
            return write_pdf_playwright(pw_html, output_pdf_path)
        except Exception as pw_err:
            raise RuntimeError(
                f"PDF generation failed. WeasyPrint: {weasy_err}; Playwright: {pw_err}"
            ) from pw_err


def main() -> int:
    try:
        engine = convert_cv_to_pdf(MD_PATH, OUT)
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    print(f"SUCCESS: Wrote {OUT} using {engine}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
