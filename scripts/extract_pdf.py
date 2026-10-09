import pdfplumber
import sys

pdf_path = "/home/z/my-project/upload/KV Practical"

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        print(f"\n========== PAGE {i+1} ==========\n")
        text = page.extract_text()
        if text:
            print(text)
        else:
            print("[No extractable text]")
        # Also extract tables
        tables = page.extract_tables()
        if tables:
            print(f"\n--- TABLES ON PAGE {i+1} ---")
            for t_idx, table in enumerate(tables):
                print(f"\nTable {t_idx+1}:")
                for row in table:
                    print(row)
