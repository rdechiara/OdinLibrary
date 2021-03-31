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
        console.log(`container is ${container}`);
    }
    function setForm(id)
    {
        form = document.getElementById(id);
        console.log(`form is ${form}`);
    }
    function setAddBookButton(id)
    {
        addButton = document.getElementById(id);
        console.log(`addButton is ${addButton}`);
    }
    function setToggleButton(id)
    {
        toggleButton = document.getElementById(id);
        toggleButton.onclick = toggleForm;
        console.log(`toggleButton is ${toggleButton}`);
    }

    function toggleForm()
    {
        const formStatus = form.style.display;
        if(formStatus === `block`)
        {
            form.style.display = `none`;
            toggleButton.textContent = `+`;
            toggleButton.style.fontSize = `x-large`;
        }
        else
        {
            form.style.display = `block`;
            toggleButton.textContent = `X`;
        }
    }

    return {setContainer, setForm, setAddBookButton, setToggleButton};
})();

app.setContainer(`root`);
app.setForm(`book-form`);
app.setAddBookButton(`add-button`);
app.setToggleButton(`toggle-button`);