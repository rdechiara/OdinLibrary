const app = (function()
{
    let container = undefined;
    let form = undefined;
    let addButton = undefined;
    let toggleButton = undefined;
    let books = [];

    function setContainer(id)
    {
        container = document.getElementById(id);
    }
    function setForm(id)
    {
        form = document.getElementById(id);
    }
    function setAddBookButton(id)
    {
        addButton = document.getElementById(id);
    }
    function setToggleButton(id)
    {
        toggleButton = document.getElementById(id);
    }

    function toggleForm()
    {
        const formStatus = form.style.display;
        if(formStatus === `block`)
        {
            form.style.display = `none`;
        }
        else
        {
            form.style.display = `block`;
        }
    }
    return {setContainer, setForm, setAddBookButton, setToggleButton};
})();