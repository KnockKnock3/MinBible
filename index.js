const bible = {
    Genesis: {
      1: "In the beginning God created the heaven and the earth...",
      2: "Thus the heavens and the earth were finished, and all the host of them..."
    },
    Exodus: {
      1: "Now these are the names of the children of Israel, which came into Egypt...",
      2: "And there went a man of the house of Levi, and took to wife a daughter of Levi..."
    }
  };

const bookSelect = document.getElementById("book");
const chapterSelect = document.getElementById("chapter");
const contentDiv = document.getElementById("content");

bookSelect.addEventListener("change", () => {
    const selectedBook = bookSelect.value;
    const chapters = Object.keys(bible[selectedBook]);

    chapterSelect.innerHTML = '';

    chapters.forEach(chapter => {
      const option = document.createElement("option");
      option.value = chapter;
      option.textContent = chapter;
      chapterSelect.appendChild(option);
    });

    loadChapter();
});

chapterSelect.addEventListener("change", loadChapter);

function loadChapter() {
    const selectedBook = bookSelect.value;
    const selectedChapter = chapterSelect.value;

    const chapterContent = bible[selectedBook][selectedChapter];
    contentDiv.textContent = chapterContent || "Chapter not available.";
}

loadChapter();