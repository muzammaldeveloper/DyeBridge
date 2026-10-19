let recipes = [];
let currentCalculation = [];

const els = {
  recipeCode: document.getElementById("recipeCode"),
  shade: document.getElementById("shade"),
  machineNo: document.getElementById("machineNo"),
  cones: document.getElementById("cones"),
  lotNo: document.getElementById("lotNo"),
  poNo: document.getElementById("poNo"),
  mpoNo: document.getElementById("mpoNo"),
  greighWeight: document.getElementById("greighWeight"),
  calcBody: document.getElementById("calcBody"),
};

async function loadRecipes() {
  const response = await fetch("/api/recipes");
  if (!response.ok) {
    els.recipeCode.replaceChildren(new Option("No recipes found", ""));
    return;
  }

  recipes = await response.json();
  els.recipeCode.replaceChildren(
    ...recipes.map((r) => new Option(r.serial_code, r.serial_code))
  );

  if (recipes.length) {
    onRecipeChange();
  }
}

function onRecipeChange() {
  const selected = recipes.find((r) => r.serial_code === els.recipeCode.value);
  if (!selected) return;
  els.shade.value = selected.shade;
}

async function calculate() {
  const selected = recipes.find((r) => r.serial_code === els.recipeCode.value);
  const payload = {
    machine_no: els.machineNo.value,
    cones: els.cones.value,
    lot_no: els.lotNo.value,
    po_no: els.poNo.value,
    mpo_no: els.mpoNo.value,
    greigh_weight_kg: Number(els.greighWeight.value),
    chemicals: selected?.chemicals || {},
  };

  const response = await fetch("/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    alert("Please enter a valid greigh weight.");
    return;
  }

  const data = await response.json();
  currentCalculation = data.items;
  els.calcBody.replaceChildren(
    ...data.items.map((item) => {
      const tr = document.createElement("tr");
      tr.className = "border-b";
      [item.chemical, item.percentage, item.kg, item.g, item.mg].forEach((value) => {
        const td = document.createElement("td");
        td.className = "py-2";
        td.textContent = String(value);
        tr.appendChild(td);
      });
      return tr;
    })
  );
}

function printSlip() {
  if (!currentCalculation.length) {
    alert("Calculate first.");
    return;
  }

  const tpl = document.getElementById("printTemplate");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = tpl.innerHTML;
  wrapper.querySelector("#printMeta").textContent =
    `Recipe: ${els.recipeCode.value} | Shade: ${els.shade.value} | ` +
    `Machine#: ${els.machineNo.value} | Cones: ${els.cones.value} | ` +
    `Lot#: ${els.lotNo.value} | PO#: ${els.poNo.value} | MPO#: ${els.mpoNo.value}`;

  const printBody = wrapper.querySelector("#printBody");
  printBody.replaceChildren(
    ...currentCalculation.map((item) => {
      const tr = document.createElement("tr");
      [item.chemical, item.percentage, item.kg, item.g, item.mg].forEach((value) => {
        const td = document.createElement("td");
        td.textContent = String(value);
        tr.appendChild(td);
      });
      return tr;
    })
  );

  const printWindow = window.open("", "_blank");
  printWindow.document.write(wrapper.innerHTML);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function exportTransferJson() {
  if (!currentCalculation.length) {
    alert("Calculate first.");
    return;
  }

  const transfer = {
    machine_no: els.machineNo.value,
    lot_no: els.lotNo.value,
    po_no: els.poNo.value,
    mpo_no: els.mpoNo.value,
    materials: currentCalculation.map((item) => ({
      name: item.chemical,
      quantity_kg: item.kg,
      route_to: /dye/i.test(item.chemical) ? "Z-62" : "Z-66",
      category: /dye/i.test(item.chemical) ? "Dyes" : "Chemicals",
    })),
  };

  navigator.clipboard.writeText(JSON.stringify(transfer, null, 2));
  alert("Transfer note JSON copied to clipboard.");
}

document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("printBtn").addEventListener("click", printSlip);
document.getElementById("exportTransferBtn").addEventListener("click", exportTransferJson);
els.recipeCode.addEventListener("change", onRecipeChange);

loadRecipes();
