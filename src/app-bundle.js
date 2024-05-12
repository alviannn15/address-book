document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");
  const modal = document.getElementById("modal");
  const formData = document.getElementById("formData");
  const submitButton = document.getElementById("submitBtn");
  const dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  window.onload = function () {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      data.forEach((entry) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td class="border px-4 py-2">${entry.fullName}</td>
          <td class="border px-4 py-2">${entry.phone}</td>
          <td class="border px-4 py-2">${entry.email}</td>
          <td class="border px-4 py-2">${entry.address}</td>
          <td class="border px-4 py-2">${entry.category}</td>
        `;
        dataTable.appendChild(newRow);
      });
    }
  };

  openModalButton.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModalButton.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  submitButton.addEventListener("click", function () {
    const fullName = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const category = document.getElementById("category").value;

    const newData = {
      fullName: fullName,
      phone: phone,
      email: email,
      address: address,
      category: category,
    };

    let data = [];
    if (localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data"));
    }

    data.push(newData);

    localStorage.setItem("data", JSON.stringify(data));

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td class="border px-4 py-2">${fullName}</td>
      <td class="border px-4 py-2">${phone}</td>
      <td class="border px-4 py-2">${email}</td>
      <td class="border px-4 py-2">${address}</td>
      <td class="border px-4 py-2">${category}</td>
    `;
    dataTable.appendChild(newRow);

    formData.reset();

    modal.classList.add("hidden");

    // localStorage.clear();
  });
});
