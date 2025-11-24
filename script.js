// nếu click button -> thì hiện ra question đó, ấn lại thì ẩn,
// ấn thì lấy id của content->thêm active 
const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const quesId = btn.dataset.question;
        const content = document.getElementById(quesId);
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            content.classList.remove("active");
        } else {
            btn.classList.add("active");
            content.classList.add("active");
        }
    });
});