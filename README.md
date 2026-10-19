# DyeBridge

Production-ready Yarn Dyeing Management System for Utopia Industries:

- Flask backend for recipe ingestion from Excel rows **18-44**
- Tailwind dashboard for recipe selection, machine/cone/lot/PO/MPO entry, and greigh-weight-based calculations
- Printable recipe slip with document code **UIND2/DYG/YRN/04/10**
- Manifest V3 Chrome extension for UIMD transfer-note autofill with routing:
  - **Dyes → Z-62**
  - **Chemicals → Z-66**

## Run

```bash
pip install -r requirements.txt
python app.py
```

Optional environment variable:

- `RECIPES_EXCEL_PATH` (defaults to `data/shade_recipes.xlsx`)

## Test

```bash
pytest -q tests/test_app.py
```

## Chrome extension

Load the `/extension` folder as an unpacked extension in Chrome.