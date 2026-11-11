categories = [
    ("Rikets styr.",    17268338,  17162338),
    ("Samhällsek.",     17971183,  17961183),
    ("Skatt &amp; tull", 12729734,  12639734),
    ("Rättsväs.",       61688986,  59528486),
    ("Int. samv.",       2235117,   2235117),
    ("Försvar",         76525799,  76401299),
    ("Int. bistånd",    51939762,  64949762),
    ("Migration",        8456364,   8351364),
    ("Hälsovård",      112483613, 112173613),
    ("Ek.trygg:sjuk.",  97721457, 103140457),
    ("Ek.trygg:åld.",   41786128,  41786128),
    ("Ek.trygg:fam.",  103040770, 106269770),
    ("Jämställdh.",      6319015,   6318015),
    ("Arbetsmarkn.",    94025726,  98119426),
    ("Studiestöd",      27801485,  27796485),
    ("Utbildning",      94529445,  94390445),
    ("Kultur m.m.",     18454593,  18454593),
    ("Samhällspl.",      7025334,   8281334),
    ("Regional utv.",    5241801,   5166801),
    ("Miljö",           21851580,  21776580),
    ("Energi",           4454924,   5304924),
    ("Kommunik.",       76964552,  75880552),
    ("Areella näring.", 22044754,  22189754),
    ("Näringsliv",       9344901,   9429901),
    ("Bid.kommuner",   152322194, 146673194),
    ("Statsskuld",      12155200,  12155200),
    ("EU-avgift",       47836848,  47836848),
]

svg_w     = 1400
svg_h     = 700
c_left    = 90
c_top     = 40
c_right   = svg_w - 20
c_bottom  = svg_h - 210
c_w       = c_right - c_left
c_h       = c_bottom - c_top
max_val   = 160_000_000
n         = len(categories)
gw        = c_w / n          # group width per category
bw        = gw * 0.38        # bar width
gap       = gw * 0.05        # gap between A and B bar

COLOR_A    = "#d4d4d4"
COLOR_B    = "#565656"
COLOR_AXIS = "#606060"
COLOR_GRID = "#2a2a2a"
COLOR_TEXT = "#a8a8a8"

def yp(val):
    return c_bottom - (val / max_val) * c_h

def bar(i, val, is_a):
    xg = c_left + i * gw
    x  = xg + gw * 0.06 + (0 if is_a else bw + gap)
    h  = (val / max_val) * c_h
    y  = c_bottom - h
    return x, y, bw, h

out = []
out.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{svg_w}" height="{svg_h}">')
out.append('<style>text { font-family: "Courier New", Courier, monospace; }</style>')

# Grid lines + y-axis labels
for v in range(0, 170_000_000, 20_000_000):
    y = yp(v)
    out.append(f'<line x1="{c_left}" y1="{y:.1f}" x2="{c_right}" y2="{y:.1f}" stroke="{COLOR_GRID}" stroke-width="1"/>')
    label = f"{v // 1_000_000}M"
    out.append(f'<text x="{c_left - 6}" y="{y + 4:.1f}" text-anchor="end" fill="{COLOR_TEXT}" font-size="10">{label}</text>')

# Bars
for i, (name, va, vb) in enumerate(categories):
    x, y, w, h = bar(i, va, True)
    out.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{COLOR_A}"/>')
    x, y, w, h = bar(i, vb, False)
    out.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{COLOR_B}"/>')

# Axes
out.append(f'<line x1="{c_left}" y1="{c_bottom}" x2="{c_right}" y2="{c_bottom}" stroke="{COLOR_AXIS}" stroke-width="1"/>')
out.append(f'<line x1="{c_left}" y1="{c_top}" x2="{c_left}" y2="{c_bottom}" stroke="{COLOR_AXIS}" stroke-width="1"/>')

# X-axis tick marks + rotated labels
for i, (name, va, vb) in enumerate(categories):
    xc = c_left + i * gw + gw / 2
    out.append(f'<line x1="{xc:.1f}" y1="{c_bottom}" x2="{xc:.1f}" y2="{c_bottom + 4}" stroke="{COLOR_AXIS}" stroke-width="1"/>')
    yl = c_bottom + 10
    out.append(f'<text x="{xc:.1f}" y="{yl}" text-anchor="end" fill="{COLOR_TEXT}" font-size="9" transform="rotate(-52 {xc:.1f} {yl})">{name}</text>')

# Legend
lx, ly = c_left, c_bottom + 170
out.append(f'<rect x="{lx}" y="{ly}" width="13" height="11" fill="{COLOR_A}"/>')
out.append(f'<text x="{lx + 17}" y="{ly + 13}" fill="{COLOR_TEXT}" font-size="14">Moderaterna</text>')
out.append(f'<rect x="{lx + 135}" y="{ly}" width="13" height="11" fill="{COLOR_B}"/>')
out.append(f'<text x="{lx + 152}" y="{ly + 13}" fill="{COLOR_TEXT}" font-size="14">Löfven II</text>')

out.append('</svg>')

with open('images/budget-chart.svg', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print("Saved images/budget-chart.svg")
