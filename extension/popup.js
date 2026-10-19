function destinationFor(item) {
  if (/dye/i.test(item.category || "") || /dye/i.test(item.name || "")) return "Z-62";
  return "Z-66";
}

document.getElementById("fillBtn").addEventListener("click", async () => {
  const text = document.getElementById("payload").value;
  let payload;

  try {
    payload = JSON.parse(text);
  } catch {
    alert("Invalid JSON payload.");
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || !tab.url?.startsWith("https://portal.utopiaindustries.pk")) {
    alert("Open portal.utopiaindustries.pk first.");
    return;
  }

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    args: [payload],
    func: (data) => {
      const rows = Array.from(document.querySelectorAll("tr.material-row"));
      (data.materials || []).forEach((item, idx) => {
        const row = rows[idx] || rows[rows.length - 1];
        if (!row) return;

        const nameField = row.querySelector('input[name*="material"], input.material-name');
        const qtyField = row.querySelector('input[name*="qty"], input.material-qty');
        const destField = row.querySelector('input[name*="dest"], select[name*="dest"], .material-destination');

        const destination = (/dye/i.test(item.category || "") || /dye/i.test(item.name || "")) ? "Z-62" : "Z-66";

        if (nameField) nameField.value = item.name || "";
        if (qtyField) qtyField.value = String(item.quantity_kg ?? "");
        if (destField) {
          if (destField.tagName === "SELECT") {
            const option = Array.from(destField.options).find((opt) => opt.value === destination || opt.textContent.includes(destination));
            if (option) destField.value = option.value;
          } else {
            destField.value = destination;
          }
        }

        [nameField, qtyField, destField].forEach((el) => {
          if (!el) return;
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
    },
  });

  alert("Autofill executed.");
});
