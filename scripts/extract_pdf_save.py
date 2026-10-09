import pdfplumber

pdf_path = "/home/z/my-project/upload/KV Practical"

output = []
with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        output.append(f"\n========== PAGE {i+1} ==========\n")
        text = page.extract_text()
        if text:
            output.append(text)
        else:
            output.append("[No extractable text]")

full_text = "\n".join(output)

with open("/home/z/my-project/scripts/pdf_content.txt", "w") as f:
    f.write(full_text)

print(f"Saved {len(full_text)} chars")
