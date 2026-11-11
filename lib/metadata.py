"""Read optional author metadata from leading HTML comment directives."""
import re
DIRECTIVE = re.compile(r"\s*<!--\s*(title|date|description)\s*:\s*(.*?)\s*-->", re.IGNORECASE | re.DOTALL)

def read_metadata(text):
    metadata = {}
    position = 0
    while True:
        match = DIRECTIVE.match(text, position)
        if not match:
            break
        key = match.group(1).lower()
        # Plain text only; output templates HTML-escape these values.
        metadata.setdefault(key, " ".join(match.group(2).split()))
        position = match.end()
    return metadata, text[position:]
