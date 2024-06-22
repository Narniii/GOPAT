import '../App.css';

const MenuTab = () => {
    function changeButtonClass() {
        var element = document.getElementById("PMbutton");
        // element.classList.remove("pmButton")
        if (element.classList.contains("pmButtonSelected")) {
            element.classList.remove("pmButtonSelected")
        } else {
            element.classList.add("pmButtonSelected")
        }
    }

    return (
        <button id="PMbutton" className="pmButton" onClick={changeButtonClass}>
            <span></span>
            <span></span>
        </button>
    );
}

export default MenuTab;