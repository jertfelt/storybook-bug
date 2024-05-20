export const createIconButton = ({ label, disabled, ...args }) => {
    const btn = document.createElement("button");
    btn.disabled = disabled ? true : false;
    btn.classList.add("core-icon-button");

    if (args.type === "secondary") {
        btn.classList.add("core-icon-button--secondary");
    }

    if (args.type === "primary") {
        btn.classList.add("core-icon-button--primary");
    }

    if (args.iconType === "material symbol") {
        btn.insertAdjacentHTML(
            "afterbegin",
            `<span class="core-icon-button__icon" translate="no" role="img" aria-label="Accessible label of icon">` + args.icon + `</span>`
        );
    } 
    else {
        btn.insertAdjacentHTML(
            "afterbegin",
            `<img class="core-custom-icon" src="` + args.customIcon + `" alt="Text describing this icon" aria-label="Accessible label of icon">`
        );
    }

    if (args.notice) {
        btn.insertAdjacentHTML(
            "afterbegin",
            `<span class="core-notice" role="status" aria-label="Accessible label for notice"><span class="core-notice__text">1</span></span>`
        );
    }

    return btn;
};
