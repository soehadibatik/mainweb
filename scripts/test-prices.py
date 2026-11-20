import re

price_strs = [
    "Rp 1,5 jt", "Rp 3 jt", "Rp 5 jt", "Rp 10 jt", "Rp 20 jt", "Rp 30 jt",
    "Rp 50 jt", "Rp 75 jt", "Rp 100 jt", "Rp 1 miliar", "Rp 2 miliar", "Rp 3 miliar",
    "Rp 20 miliar", "Rp 50 miliar", "Rp 100 miliar"
]

def parse_price(build):
    m = re.search(r"Rp\s*([\d.,]+)\s*(jt|miliar)?", build, re.IGNORECASE)
    if not m:
        return 0
    val_str = m.group(1).replace(".", "").replace(",", ".")
    unit = m.group(2).lower() if m.group(2) else ""
    val = float(val_str)
    if unit == "jt":
        return int(val * 1_000_000)
    elif unit == "miliar":
        return int(val * 1_000_000_000)
    return int(val)

for p in price_strs:
    print(p, "->", parse_price(p))
