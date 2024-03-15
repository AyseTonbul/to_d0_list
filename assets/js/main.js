
    //sayfa yüklendiğinde çalışacak kodlar
    document.addEventListener("DOMContentLoaded", function() {
      let btnTaskAdd = document.getElementById("btnTaskAdd"); // Add Task butonununu seçiyoruz
      let taskList = document.getElementById("taskList"); // Görev listesini için <ul> elementini seçiyoruz
      let taskNameInput = document.getElementById("taskName"); // Görev ismi girilen input'u seçiyoruz
      let completedTaskList = document.getElementById("taskCompeted"); // Tamamlanan görevler listesini seçiyoruz

      // Görev ekleme işlevi
      btnTaskAdd.addEventListener("click", function() {
          let taskName = taskNameInput.value;

          if (taskName !== "") { // Eğer görev ismi boş değilse
              let li = document.createElement("li"); // Yeni bir <li> elementi oluşturutoruz
              li.classList.add("list-group-item", "bg-secondary"); // <li> elementine classlar ekleyoruz
              li.innerHTML = `
                  <input type="checkbox" name="itemSelection" class="me-2">
                  ${taskName}
                  <i class="bi bi-trash float-end text-primary delete-product"></i>
              `; // <li> elementine içeriği ekledik.
              taskList.appendChild(li); // Görev listesi içinde ki <ul< elementine <li> elementini ekliyoruz
              taskNameInput.value = ""; // input içine gireln değer eklendikten sonra input boşaltıyoruz.

              // Yeni görevde <i> elemnti ile eklediğimiz çöp icona event listener ekliyoruz
              let trashIcon = li.querySelector(".delete-product");
              trashIcon.addEventListener("click", function() {
                  li.remove(); // Görevi sil
              });
          } else {
              alert("Please enter a task name!"); // Görev ismi boşsa uyarı veriyoruz
          }
      });

      // Tamamlanan görevlerin "Completed" butonu ile aktarılması yapıyoruz
      let btnCompleted = document.getElementById("btnCompleted");
      btnCompleted.addEventListener("click", function() {
          let selectedTasks = document.querySelectorAll("#taskList input[type='checkbox']:checked");
          selectedTasks.forEach(function(task) {
              let li = task.parentElement; // Tamamlanan görevin li elementini alıyoruz
              li.querySelector("input[type='checkbox']").remove(); // Checkbox'u kaldırıyoruz
              li.querySelector(".delete-product").remove(); // Silme ikonunu kaldırıyoruz
              completedTaskList.appendChild(li); // Tamamlanan görevleri listeye ekliyoruz
          });
      });

      // Tüm görevleri seçme işlevini yapıyoruz
      let btnSelectAll = document.getElementById("btnSelectAll");
      btnSelectAll.addEventListener("click", function() {
          let allTasks = document.querySelectorAll("#taskList input[type='checkbox']");
          allTasks.forEach(function(task) {
              task.checked = true; // Tüm görevleri işaretle
          });
      });

      // Seçilen görevleri listeden kaldırma işlevi
      let btnRemove = document.getElementById("btnRemove");
      btnRemove.addEventListener("click", function() {
          let selectedTasks = document.querySelectorAll("#taskList input[type='checkbox']:checked");
          selectedTasks.forEach(function(task) {
              let li = task.parentElement; // Seçilen görevin li elementini al
              li.remove(); // Görevi listeden kaldır
          });
      });

      // Clear List butonuna tıklanınca tamamlanan görevleri silme işlevi
      let btnClearList = document.getElementById("clearList");
      btnClearList.addEventListener("click", function() {
          completedTaskList.innerHTML = ""; // Tamamlanan görev listesini temizliyoruz
      });
  });